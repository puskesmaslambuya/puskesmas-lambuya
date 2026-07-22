import Link from "next/link";
import { ArrowRightIcon, PhotoIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALERI_PREVIEW } from "@/lib/data/home";
import { cn } from "@/lib/utils";

export default function GaleriPreview() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Dokumentasi"
            title="Galeri Kegiatan"
            description="Momen pelayanan dan kegiatan Puskesmas Lambuya bersama masyarakat."
          />
          <Link
            href="/galeri"
            className="hidden text-sm font-semibold text-primary-dark hover:underline md:inline-flex md:items-center md:gap-1"
          >
            Lihat Semua Galeri
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALERI_PREVIEW.map((item) => (
            <div
              key={item.id}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-2xl",
                item.color
              )}
            >
              <div className="flex h-full items-center justify-center">
                <PhotoIcon className="h-8 w-8 text-slate-400" />
              </div>
              <div
                className="absolute inset-x-0 bottom-0 bg-slate-900/60 px-3 py-2 text-xs text-white
                  opacity-0 transition-opacity group-hover:opacity-100"
              >
                {item.caption}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/galeri"
          className="mt-8 flex items-center justify-center gap-1 text-sm font-semibold text-primary-dark hover:underline md:hidden"
        >
          Lihat Semua Galeri
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
