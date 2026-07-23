import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SITE_CONFIG } from "@/lib/constants";
import { updateSiteSettings } from "@/lib/admin/actions";

// Wajib untuk Cloudflare Pages (lihat wrangler.toml)
export const runtime = "edge";

export default async function AdminKontakPage() {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.from("site_settings").select("*").eq("id", 1).single();

  const settings = data ?? {
    address: SITE_CONFIG.address,
    phone: SITE_CONFIG.phone,
    whatsapp: SITE_CONFIG.whatsapp,
    email: SITE_CONFIG.email,
    maps_embed_url: SITE_CONFIG.mapsEmbedUrl,
    operational_hours: SITE_CONFIG.operationalHours
      .map((jam) => `${jam.day}|${jam.time}`)
      .join("\n"),
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Pengaturan Kontak</h1>
      <p className="mt-1 text-sm text-slate-500">
        Ubah informasi kontak yang tampil di Footer dan halaman Kontak situs publik.
      </p>

      <form
        action={updateSiteSettings}
        className="mt-6 flex max-w-2xl flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
      >
        <div>
          <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-slate-700">
            Alamat
          </label>
          <textarea
            id="address"
            name="address"
            rows={2}
            defaultValue={settings.address}
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
              Telepon
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              defaultValue={settings.phone}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-slate-700">
              Nomor WhatsApp
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="text"
              placeholder="62xxxxxxxxxx"
              defaultValue={settings.whatsapp}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={settings.email}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label
            htmlFor="maps_embed_url"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            URL Embed Google Maps
          </label>
          <textarea
            id="maps_embed_url"
            name="maps_embed_url"
            rows={2}
            defaultValue={settings.maps_embed_url}
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <p className="mt-1.5 text-xs text-slate-400">
            Ambil dari Google Maps &rarr; Bagikan &rarr; Sematkan peta &rarr; salin atribut src.
          </p>
        </div>

        <div>
          <label
            htmlFor="operational_hours"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Jam Pelayanan
          </label>
          <textarea
            id="operational_hours"
            name="operational_hours"
            rows={4}
            defaultValue={settings.operational_hours}
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <p className="mt-1.5 text-xs text-slate-400">
            Satu baris untuk satu jadwal, format: Hari|Jam. Contoh: Senin - Kamis|08.00 - 14.00 WITA
          </p>
        </div>

        <button type="submit" className="btn-primary mt-1 w-fit">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
