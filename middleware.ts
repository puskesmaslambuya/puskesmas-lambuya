import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { getRequestContext } from "@cloudflare/next-on-pages";

/**
 * Melindungi semua rute /admin/* kecuali /admin/login.
 * Jika belum login, pengguna akan diarahkan ke /admin/login.
 *
 * PENTING: di lingkungan Cloudflare Pages (next-on-pages), `process.env`
 * tidak selalu terisi dengan benar di dalam Middleware. Environment variable
 * WAJIB diambil lewat getRequestContext().env, bukan process.env langsung.
 */

function getSupabaseEnv() {
  try {
    const ctxEnv = getRequestContext().env as Record<string, string | undefined>;
    return {
      url: ctxEnv.NEXT_PUBLIC_SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL,
      anonKey: ctxEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    };
  } catch {
    return {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    };
  }
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request: { headers: request.headers } });

  const { url, anonKey } = getSupabaseEnv();
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  // Kalau environment variable benar-benar tidak terbaca, jangan sampai
  // seluruh /admin/* 500 — biarkan saja lewat ke halaman login supaya
  // pesan errornya jelas (bukan 500 generik), dan lapisan layout.tsx
  // (yang cek sesi via createSupabaseServerClient) tetap jadi pengaman kedua.
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
