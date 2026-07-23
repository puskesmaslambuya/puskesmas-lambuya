import type { ComponentType, SVGProps } from "react";

type KontakInfoItemProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
};

export default function KontakInfoItem({ icon: Icon, label, value, href }: KontakInfoItemProps) {
  const content = (
    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-hover">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-dark">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-slate-800">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
