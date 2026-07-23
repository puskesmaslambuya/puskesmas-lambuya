import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SURVEY_CONFIG } from "@/lib/data/survey";
import { updateSurveySettings } from "@/lib/admin/actions";

// Wajib untuk Cloudflare Pages (lihat wrangler.toml)
export const runtime = "edge";

export default async function AdminSurveyPage() {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.from("survey_settings").select("*").eq("id", 1).single();

  const googleFormUrl = data?.google_form_url ?? SURVEY_CONFIG.googleFormUrl;
  const qrPreviewUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=8&data=${encodeURIComponent(
    googleFormUrl
  )}`;

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Pengaturan Survey</h1>
      <p className="mt-1 text-sm text-slate-500">
        Ubah link Survey Kepuasan Masyarakat (SKM). Kode QR akan otomatis dibuat dari link ini.
      </p>

      <div className="mt-6 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
        <form
          action={updateSurveySettings}
          className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:col-span-2"
        >
          <div>
            <label
              htmlFor="google_form_url"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Link Google Form / Survey
            </label>
            <input
              id="google_form_url"
              name="google_form_url"
              type="url"
              required
              defaultValue={googleFormUrl}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button type="submit" className="btn-primary mt-1 w-fit">
            Simpan Perubahan
          </button>
        </form>

        <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Pratinjau QR
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qrPreviewUrl}
            alt="Pratinjau QR Code Survey"
            width={160}
            height={160}
            className="h-[160px] w-[160px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
