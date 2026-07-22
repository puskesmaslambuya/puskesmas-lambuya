type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

/** Header standar untuk halaman selain Beranda (Profil, Layanan, Informasi, dll). */
export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-page py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-dark">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl">{title}</h1>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
