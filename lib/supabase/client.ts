import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase client untuk digunakan di dalam Client Component ("use client").
 * Contoh: form Pengaduan, form Survey, atau fitur interaktif lain di sisi browser.
 */
export function createSupabaseBrowserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
