import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import { AKREDITASI_INFO } from "@/lib/data/profil";

export default function AkreditasiSection() {
  return (
    <section id="akreditasi" className="scroll-mt-36 section-y bg-surface-muted">
      <div className="container-page">
        <SectionHeading eyebrow="Mutu Layanan" title="Status Akreditasi" />

        <div className="mt-8 flex flex-col items-center gap-6 rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-card md:flex-row md:text-left">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-dark">
            <CheckBadgeIcon className="h-10 w-10" />
          </div>
          <div>
            <p className="font-heading text-xl font-semibold text-slate-900 md:text-2xl">
              {AKREDITASI_INFO.status}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Terakreditasi tahun {AKREDITASI_INFO.tahun} &middot; {AKREDITASI_INFO.nomorSertifikat}
            </p>
            <p className="text-sm text-slate-600">{AKREDITASI_INFO.masaBerlaku}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
