import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import type { Dokumen } from "@/types/download";
import { formatTanggalIndonesia } from "@/lib/utils";
import FileTypeIcon from "./FileTypeIcon";

type DokumenItemProps = {
  dokumen: Dokumen;
};

export default function DokumenItem({ dokumen }: DokumenItemProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-dark">
          <FileTypeIcon fileType={dokumen.fileType} />
        </div>
        <div>
          <p className="inline-block rounded-full bg-secondary-50 px-2.5 py-0.5 text-xs font-semibold text-secondary-dark">
            {dokumen.category}
          </p>
          <h3 className="mt-1.5 text-base font-semibold text-slate-900">{dokumen.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{dokumen.description}</p>
          <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">
            {dokumen.fileType} &middot; {dokumen.fileSize} &middot;{" "}
            {formatTanggalIndonesia(dokumen.date)}
          </p>
        </div>
      </div>

      <a
        href={dokumen.fileUrl}
        download
        className="btn-secondary shrink-0 self-start sm:self-center"
      >
        <ArrowDownTrayIcon className="h-4 w-4" />
        Unduh
      </a>
    </div>
  );
}
