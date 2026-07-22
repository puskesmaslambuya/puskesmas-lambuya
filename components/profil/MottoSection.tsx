import { MOTTO_TEXT } from "@/lib/data/profil";

export default function MottoSection() {
  return (
    <section id="motto" className="scroll-mt-36 section-y">
      <div className="container-page">
        <div className="rounded-2xl bg-primary px-6 py-10 text-center text-white md:py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Motto</p>
          <p className="mx-auto mt-3 max-w-xl font-heading text-2xl font-semibold md:text-3xl">
            &ldquo;{MOTTO_TEXT}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
