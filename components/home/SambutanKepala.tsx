export default function SambutanKepala() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <div className="grid items-center gap-10 rounded-2xl border border-slate-100 bg-surface-muted p-6 shadow-card md:grid-cols-[280px_1fr] md:p-10">
          {/* Foto placeholder — ganti dengan foto resmi Kepala Puskesmas */}
          <div className="mx-auto aspect-[3/4] w-48 shrink-0 rounded-2xl bg-gradient-to-b from-primary/20 to-secondary/10 md:w-full">
            <div className="flex h-full items-center justify-center">
              <span className="text-sm font-medium text-slate-500">Foto Kepala Puskesmas</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-dark">
              Sambutan
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl">Kepala Puskesmas Lambuya</h2>
            <blockquote className="mt-4 border-l-4 border-primary/40 pl-4 text-sm leading-relaxed text-slate-600 md:text-base">
              Selamat datang di website resmi Puskesmas Lambuya. Kami berkomitmen memberikan
              pelayanan kesehatan yang bermutu, merata, dan mudah diakses oleh seluruh
              masyarakat di wilayah kerja kami. Melalui website ini, kami berharap masyarakat
              dapat memperoleh informasi layanan secara cepat dan turut berpartisipasi aktif
              dalam menjaga kesehatan bersama.
            </blockquote>
            <div className="mt-5">
              <p className="font-heading text-base font-semibold text-slate-900">
                dr. Nama Kepala Puskesmas
              </p>
              <p className="text-sm text-slate-500">Kepala UPTD Puskesmas Lambuya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
