import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import AdminSidebar from "@/components/admin/AdminSidebar";

// Wajib untuk Cloudflare Pages (lihat wrangler.toml)
export const runtime = "edge";

/**
 * Layout untuk semua halaman Panel Admin KECUALI /admin/login.
 * Route group "(dashboard)" tidak memengaruhi URL — /admin/berita tetap /admin/berita.
 * Pengecekan sesi juga dilakukan di sini sebagai lapisan kedua,
 * selain di middleware.ts.
 */
export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar />
      <div className="flex-1 overflow-x-hidden">
        <main className="p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
