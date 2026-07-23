import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import LayananDetailContent from "@/components/layanan/LayananDetailContent";
import { DAFTAR_LAYANAN, getLayananBySlug } from "@/lib/data/layanan";

type LayananDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return DAFTAR_LAYANAN.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: LayananDetailPageProps): Metadata {
  const layanan = getLayananBySlug(params.slug);

  if (!layanan) {
    return { title: "Layanan Tidak Ditemukan" };
  }

  return {
    title: layanan.nama,
    description: layanan.ringkasan,
  };
}

export default function LayananDetailPage({ params }: LayananDetailPageProps) {
  const layanan = getLayananBySlug(params.slug);

  if (!layanan) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow="Layanan"
        title={layanan.nama}
        description={layanan.ringkasan}
      />
      <LayananDetailContent layanan={layanan} />
    </>
  );
}
