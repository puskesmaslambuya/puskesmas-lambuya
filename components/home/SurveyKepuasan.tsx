import Link from "next/link";
import { QrCodeIcon, LinkIcon } from "@heroicons/react/24/outline";

export default function SurveyKepuasan() {
  return (
    <section className="section-y bg-secondary-50">
      <div className="container-page">
        <div className="grid items-center gap-8 rounded-2xl border border-secondary/20 bg-white p-6 shadow-card md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary-dark">
              Survey Kepuasan Masyarakat
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl">
              Bantu Kami Meningkatkan Kualitas Pelayanan
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              Pendapat Anda sangat berarti. Isi survey kepuasan masyarakat untuk membantu
              Puskesmas Lambuya terus memperbaiki mutu pelayanan kesehatan.
            </p>
            <Link href="/survey" className="btn-secondary mt-5">
              <LinkIcon className="h-4 w-4" />
              Isi Survey Sekarang
            </Link>
          </div>

          {/* Placeholder QR — ganti dengan gambar QR code asli pada Tahap 8 */}
          <div className="mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-xl border-2 border-dashed border-secondary/40 bg-secondary-50">
            <QrCodeIcon className="h-14 w-14 text-secondary-dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
