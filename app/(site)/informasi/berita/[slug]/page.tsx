import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import BeritaDetailContent from "@/components/berita/BeritaDetailContent";
import BeritaTerkait from "@/components/berita/BeritaTerkait";
import { DAFTAR_BERITA, getBeritaBySlug, getBeritaTerkait } from "@/lib/data/berita";

type BeritaDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return DAFTAR_BERITA.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: BeritaDetailPageProps): Metadata {
  const berita = getBeritaBySlug(params.slug);

  if (!berita) {
    return { title: "Berita Tidak Ditemukan" };
  }

  return {
    title: berita.title,
    description: berita.excerpt,
  };
}

export default function BeritaDetailPage({ params }: BeritaDetailPageProps) {
  const berita = getBeritaBySlug(params.slug);

  if (!berita) {
    notFound();
  }

  const beritaTerkait = getBeritaTerkait(params.slug);

  return (
    <>
      <PageHeader eyebrow="Informasi" title="Detail Berita" />
      <BeritaDetailContent berita={berita} />
      <BeritaTerkait daftarBerita={beritaTerkait} />
    </>
  );
}
