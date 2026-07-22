import { DAFTAR_LAYANAN } from "@/lib/data/layanan";
import LayananCard from "./LayananCard";

export default function LayananGrid() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DAFTAR_LAYANAN.map((layanan, index) => (
            <LayananCard key={layanan.slug} layanan={layanan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
