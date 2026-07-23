import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import MekanismePengaduan from "@/components/pengaduan/MekanismePengaduan";
import PengaduanKanalLain from "@/components/pengaduan/PengaduanKanalLain";
import PengaduanForm from "@/components/pengaduan/PengaduanForm";

export const metadata: Metadata = {
  title: "Pengaduan",
  description:
    "Sampaikan pengaduan, kritik, dan saran terkait pelayanan Puskesmas Lambuya.",
};

export default function PengaduanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Layanan Masyarakat"
        title="Pengaduan"
        description="Kami terbuka terhadap kritik dan saran untuk terus memperbaiki kualitas pelayanan kesehatan."
      />
      <section className="section-y">
        <div className="container-page grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <MekanismePengaduan />
            <PengaduanKanalLain />
          </div>
          <PengaduanForm />
        </div>
      </section>
    </>
  );
}
