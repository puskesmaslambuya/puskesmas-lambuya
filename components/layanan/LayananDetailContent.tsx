import { CheckCircleIcon } from "@heroicons/react/24/outline";
import type { Layanan } from "@/types/layanan";
import JadwalTable from "./JadwalTable";

type LayananDetailContentProps = {
  layanan: Layanan;
};

export default function LayananDetailContent({ layanan }: LayananDetailContentProps) {
  return (
    <section className="section-y">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl">Tentang Layanan</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
            {layanan.deskripsi.map((paragraf, index) => (
              <p key={index}>{paragraf}</p>
            ))}
          </div>

          <h3 className="mt-8 text-base">Fasilitas</h3>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {layanan.fasilitas.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircleIcon className="h-4 w-4 shrink-0 text-primary-dark" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-base">Syarat Pelayanan</h3>
          <ul className="mt-3 space-y-2">
            {layanan.syarat.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircleIcon className="h-4 w-4 shrink-0 text-secondary-dark" />
                {item}
              </li>
            ))}
          </ul>

          {layanan.penanggungJawab && (
            <p className="mt-6 text-xs text-slate-500">
              Penanggung jawab layanan: {layanan.penanggungJawab}
            </p>
          )}
        </div>

        <div>
          <JadwalTable jadwal={layanan.jadwal} />
        </div>
      </div>
    </section>
  );
}
