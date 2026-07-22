import { DocumentIcon, DocumentTextIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import type { DokumenFileType } from "@/types/download";

type FileTypeIconProps = {
  fileType: DokumenFileType;
  className?: string;
};

/** Ikon berbeda untuk setiap format file agar mudah dikenali pengguna. */
export default function FileTypeIcon({ fileType, className = "h-6 w-6" }: FileTypeIconProps) {
  if (fileType === "xlsx") {
    return <TableCellsIcon className={className} />;
  }
  if (fileType === "doc" || fileType === "docx") {
    return <DocumentIcon className={className} />;
  }
  return <DocumentTextIcon className={className} />;
}
