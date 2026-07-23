import {
  NewspaperIcon,
  MegaphoneIcon,
  PhotoIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentArrowDownIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import StatCard from "@/components/admin/StatCard";

// Wajib untuk Cloudflare Pages (lihat wrangler.toml)
export const runtime = "edge";

async function safeCount(table: string): Promise<number> {
  try {
    const supabase = createSupabaseServerClient();
    const { count, error } = await supabase.from(table).select("*", { count: "exact", head: true });
    if (error) return 0;
    return count ?? 0;
  } catch {
    return 0;
  }
}

export default async function AdminDashboardPage() {
  const [berita, pengumuman, galeriFoto, pengaduanBaru, dokumen, pegawai] = await Promise.all([
    safeCount("berita"),
    safeCount("pengumuman"),
    safeCount("galeri_foto"),
    safeCount("pengaduan"),
    safeCount("dokumen"),
    safeCount("pegawai"),
  ]);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">
          Ringkasan data yang dikelola di Panel Admin Puskesmas Lambuya.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard icon={NewspaperIcon} label="Berita" value={berita} href="/admin/berita" />
        <StatCard icon={MegaphoneIcon} label="Pengumuman" value={pengumuman} href="/admin/pengumuman" />
        <StatCard icon={PhotoIcon} label="Foto Galeri" value={galeriFoto} href="/admin/galeri-foto" />
        <StatCard
          icon={ChatBubbleLeftEllipsisIcon}
          label="Pengaduan Masuk"
          value={pengaduanBaru}
          href="/admin/pengaduan"
        />
        <StatCard icon={DocumentArrowDownIcon} label="Dokumen" value={dokumen} href="/admin/dokumen" />
        <StatCard icon={UserGroupIcon} label="Pegawai" value={pegawai} href="/admin/pegawai" />
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <h2 className="text-base font-semibold text-slate-900">Mulai Cepat</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Gunakan menu di samping untuk mengelola konten. Jika angka di atas menunjukkan 0
          padahal Anda sudah punya data, pastikan tabel Supabase sudah dibuat sesuai
          <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-xs">sql/schema.sql</code>
          dan environment variable Supabase sudah benar di <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-xs">.env.local</code>.
        </p>
      </div>
    </div>
  );
}
