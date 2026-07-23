import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import GaleriTabs from "@/components/galeri/GaleriTabs";
import { DAFTAR_FOTO, DAFTAR_VIDEO, getKategoriFoto } from "@/lib/data/galeri";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Dokumentasi foto dan video kegiatan pelayanan kesehatan Puskesmas Lambuya bersama masyarakat.",
};

export default function GaleriPage() {
  const daftarFoto = [...DAFTAR_FOTO].sort((a, b) => (a.date < b.date ? 1 : -1));
  const daftarVideo = [...DAFTAR_VIDEO].sort((a, b) => (a.date < b.date ? 1 : -1));
  const kategoriFoto = getKategoriFoto();

  return (
    <>
      <PageHeader
        eyebrow="Dokumentasi"
        title="Galeri Puskesmas Lambuya"
        description="Kumpulan foto dan video kegiatan pelayanan kesehatan Puskesmas Lambuya bersama masyarakat di wilayah kerja."
      />
      <GaleriTabs
        daftarFoto={daftarFoto}
        kategoriFoto={kategoriFoto}
        daftarVideo={daftarVideo}
      />
    </>
  );
}
