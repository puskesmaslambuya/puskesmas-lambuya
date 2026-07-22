import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { VISI_TEXT, MISI_LIST } from "@/lib/data/profil";

export default function VisiMisiSection() {
  return (
    <section id="visi-misi" className="scroll-mt-36 section-y bg-surface-muted">
      <div className="container-page grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-dark">Visi</p>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            &ldquo;{VISI_TEXT}&rdquo;
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-dark">Misi</p>
          <ul className="mt-3 space-y-3">
            {MISI_LIST.map((misi) => (
              <li key={misi.id} className="flex items-start gap-3">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-slate-700 md:text-base">
                  {misi.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
