import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import DokumenExplorer from "@/components/download/DokumenExplorer";
import { DAFTAR_DOKUMEN, getKategoriDokumen } from "@/lib/data/download";

export const metadata: Metadata = {
  title: "Download Dokumen",
  description:
    "Unduh SOP, SK, formulir, dan dokumen publik Puskesmas Lambuya.",
};

export default function DownloadPage() {
  const daftarDokumen = [...DAFTAR_DOKUMEN].sort((a, b) => (a.date < b.date ? 1 : -1));
  const kategori = getKategoriDokumen();

  return (
    <>
      <PageHeader
        eyebrow="Dokumen"
        title="Download Dokumen"
        description="Unduh Standar Operasional Prosedur (SOP), Surat Keputusan (SK), formulir pelayanan, dan dokumen publik Puskesmas Lambuya."
      />
      <DokumenExplorer daftarDokumen={daftarDokumen} kategori={kategori} />
    </>
  );
}
