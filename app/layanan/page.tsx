import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import LayananGrid from "@/components/layanan/LayananGrid";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Daftar layanan kesehatan yang tersedia di Puskesmas Lambuya: Poli Umum, Poli Gigi, KIA, Farmasi, Laboratorium, UGD, Imunisasi, Posyandu, dan Promosi Kesehatan.",
};

export default function LayananPage() {
  return (
    <>
      <PageHeader
        eyebrow="Layanan Kami"
        title="Layanan Kesehatan"
        description="Puskesmas Lambuya menyediakan berbagai layanan kesehatan dasar untuk masyarakat di wilayah kerja Kecamatan Lambuya."
      />
      <LayananGrid />
    </>
  );
}
