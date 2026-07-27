import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { getRequestContext } from "@cloudflare/next-on-pages";

function getSupabaseEnv() {
  let ctxUrl: string | undefined;
  let ctxKey: string | undefined;
  let ctxError = "";

  try {
    const ctxEnv = getRequestContext().env as Record<string, string | undefined>;
    ctxUrl = ctxEnv.NEXT_PUBLIC_SUPABASE_URL;
    ctxKey = ctxEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  } catch (err) {
    ctxError = err instanceof Error ? err.message : String(err);
  }

  // eslint-disable-next-line no-console
  console.log(
    "[middleware-debug]",
    JSON.stringify({
      ctxUrlExists: Boolean(ctxUrl),
      ctxUrlValue: ctxUrl ?? null,
      ctxKeyExists: Boolean(ctxKey),
      processEnvUrlExists: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
      processEnvUrlValue: process.env.NEXT_PUBLIC_SUPABASE_URL ?? null,
      ctxError,
    })
  );

  return {
    url: ctxUrl ?? process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: ctxKey ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request: { headers: request.headers } });

  const { url, anonKey } = getSupabaseEnv();
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  if (!url || !anonKey) {
    return response;
  }

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        response.cookies.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        response.cookies.set({ name, value: "", ...options });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !isLoginPage) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (user && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
