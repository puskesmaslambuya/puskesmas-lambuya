import { MapPinIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import { WILAYAH_KERJA } from "@/lib/data/profil";

export default function WilayahKerjaSection() {
  return (
    <section id="wilayah-kerja" className="scroll-mt-36 section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Cakupan Layanan"
          title="Wilayah Kerja"
          description={`Puskesmas Lambuya melayani ${WILAYAH_KERJA.length} desa di Kecamatan Lambuya, Kabupaten Konawe.`}
        />

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {WILAYAH_KERJA.map((desa) => (
            <div
              key={desa.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-card"
            >
              <MapPinIcon className="h-5 w-5 shrink-0 text-primary-dark" />
              <div>
                <p className="text-sm font-semibold text-slate-900">{desa.name}</p>
                <p className="text-xs text-slate-500">
                  {desa.jarakKm === 0 ? "Lokasi Puskesmas" : `± ${desa.jarakKm} km`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
