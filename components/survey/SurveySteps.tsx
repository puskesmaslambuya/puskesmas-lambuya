import { SURVEY_CONFIG } from "@/lib/data/survey";

export default function SurveySteps() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-lg font-semibold text-slate-900">Cara Mengisi Survey</h3>
      <ol className="mt-5 flex flex-col gap-4">
        {SURVEY_CONFIG.steps.map((step, index) => (
          <li key={step} className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
              {index + 1}
            </span>
            <p className="pt-0.5 text-sm leading-relaxed text-slate-600">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
