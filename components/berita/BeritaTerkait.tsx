import SectionHeading from "@/components/ui/SectionHeading";
import type { Berita } from "@/types/berita";
import BeritaCard from "./BeritaCard";

type BeritaTerkaitProps = {
  daftarBerita: Berita[];
};

export default function BeritaTerkait({ daftarBerita }: BeritaTerkaitProps) {
  if (daftarBerita.length === 0) return null;

  return (
    <section className="section-y bg-surface-muted">
      <div className="container-page">
        <SectionHeading eyebrow="Baca Juga" title="Berita Terkait Lainnya" />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {daftarBerita.map((berita) => (
            <BeritaCard key={berita.id} berita={berita} />
          ))}
        </div>
      </div>
    </section>
  );
}
