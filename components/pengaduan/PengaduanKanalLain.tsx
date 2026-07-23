import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { SITE_CONFIG } from "@/lib/constants";
import { PENGADUAN_WHATSAPP_QR_URL, PENGADUAN_WHATSAPP_URL } from "@/lib/data/pengaduan";

export default function PengaduanKanalLain() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-lg font-semibold text-slate-900">Kanal Pengaduan Lain</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Anda juga bisa menyampaikan pengaduan langsung melalui WhatsApp atau email berikut.
      </p>

      <div className="mt-5 flex flex-col items-center gap-3 rounded-xl bg-primary-50 p-5 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PENGADUAN_WHATSAPP_QR_URL}
          alt="QR Code WhatsApp Pengaduan"
          width={160}
          height={160}
          className="h-[160px] w-[160px] rounded-lg bg-white p-2 shadow-sm"
        />
        <a
          href={PENGADUAN_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-fit"
        >
          Chat WhatsApp
        </a>
      </div>

      <a
        href={`mailto:${SITE_CONFIG.email}`}
        className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-secondary-50 hover:text-secondary-dark"
      >
        <EnvelopeIcon className="h-4 w-4 shrink-0 text-secondary" />
        {SITE_CONFIG.email}
      </a>
    </div>
  );
}
