import { MEKANISME_PENGADUAN } from "@/lib/data/pengaduan";

export default function MekanismePengaduan() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-lg font-semibold text-slate-900">Mekanisme Pengaduan</h3>
      <ol className="mt-5 flex flex-col gap-4">
        {MEKANISME_PENGADUAN.map((step, index) => (
          <li key={step.title} className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-white">
              {index + 1}
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">{step.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
