import { createSupabaseServerClient } from "@/lib/supabase/server";
import { formatTanggalIndonesia } from "@/lib/utils";
import PengaduanStatusSelect from "@/components/admin/PengaduanStatusSelect";

// Wajib untuk Cloudflare Pages (lihat wrangler.toml)
export const runtime = "edge";

type PengaduanRow = {
  id: string;
  nama: string;
  kontak: string;
  category: string;
  message: string;
  status: string;
  created_at: string;
};

export default async function AdminPengaduanPage() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("pengaduan")
    .select("*")
    .order("created_at", { ascending: false });

  const daftar = (error ? [] : (data as PengaduanRow[])) ?? [];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Pengaduan Masuk</h1>
      <p className="mt-1 text-sm text-slate-500">
        Kelola dan tindak lanjuti pengaduan yang dikirim masyarakat melalui form di situs publik.
      </p>

      {error && (
        <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
          Gagal memuat data pengaduan: {error.message}. Pastikan tabel &ldquo;pengaduan&rdquo;
          sudah dibuat sesuai sql/schema.sql.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-4">
        {daftar.length === 0 ? (
          <p className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-400 shadow-card">
            Belum ada pengaduan masuk.
          </p>
        ) : (
          daftar.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="inline-block rounded-full bg-secondary-50 px-2.5 py-0.5 text-xs font-semibold text-secondary-dark">
                    {item.category}
                  </p>
                  <h3 className="mt-1.5 text-sm font-semibold text-slate-900">{item.nama}</h3>
                  <p className="text-xs text-slate-400">{item.kontak}</p>
                </div>
                <PengaduanStatusSelect id={item.id} status={item.status} />
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.message}</p>

              <p className="mt-3 text-xs text-slate-400">
                {formatTanggalIndonesia(item.created_at)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
