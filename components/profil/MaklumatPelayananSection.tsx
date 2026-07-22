import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import { MAKLUMAT_PELAYANAN } from "@/lib/data/profil";

export default function MaklumatPelayananSection() {
  return (
    <section id="maklumat-pelayanan" className="scroll-mt-36 section-y bg-surface-muted">
      <div className="container-page">
        <SectionHeading
          eyebrow="Komitmen Kami"
          title="Maklumat Pelayanan"
          description="Pernyataan kesanggupan Puskesmas Lambuya dalam memberikan pelayanan sesuai standar yang telah ditetapkan."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {MAKLUMAT_PELAYANAN.map((item, index) => (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-dark">
                <ShieldCheckIcon className="h-5 w-5" />
              </div>
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                <span className="font-semibold text-slate-900">{index + 1}.</span>{" "}
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
