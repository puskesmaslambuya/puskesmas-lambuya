import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import BeritaList from "@/components/berita/BeritaList";
import { DAFTAR_BERITA, getKategoriBerita } from "@/lib/data/berita";

export const metadata: Metadata = {
  title: "Berita",
  description:
    "Kumpulan berita, kegiatan, dan artikel kesehatan terbaru dari Puskesmas Lambuya.",
};

export default function BeritaPage() {
  const daftarBerita = [...DAFTAR_BERITA].sort((a, b) => (a.date < b.date ? 1 : -1));
  const kategori = getKategoriBerita();

  return (
    <>
      <PageHeader
        eyebrow="Informasi"
        title="Berita & Kegiatan"
        description="Ikuti perkembangan kegiatan, pengumuman, dan informasi kesehatan terbaru dari Puskesmas Lambuya."
      />
      <BeritaList daftarBerita={daftarBerita} kategori={kategori} />
    </>
  );
}
