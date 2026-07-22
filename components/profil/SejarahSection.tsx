import { SEJARAH_TEXT } from "@/lib/data/profil";

export default function SejarahSection() {
  return (
    <section id="sejarah" className="scroll-mt-36 section-y">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-dark">
              Profil
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl">Sejarah Puskesmas Lambuya</h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
            {SEJARAH_TEXT.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph.replace(/\n/g, " ")}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
