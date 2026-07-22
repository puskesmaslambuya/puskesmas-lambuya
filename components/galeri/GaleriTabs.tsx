"use client";

import { useState } from "react";
import { PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import type { GaleriFoto, GaleriKategori, GaleriVideo } from "@/types/galeri";
import { cn } from "@/lib/utils";
import FotoGrid from "./FotoGrid";
import VideoGrid from "./VideoGrid";

type GaleriTabsProps = {
  daftarFoto: GaleriFoto[];
  kategoriFoto: GaleriKategori[];
  daftarVideo: GaleriVideo[];
};

type TabKey = "foto" | "video";

export default function GaleriTabs({ daftarFoto, kategoriFoto, daftarVideo }: GaleriTabsProps) {
  const [tabAktif, setTabAktif] = useState<TabKey>("foto");

  return (
    <section className="section-y">
      <div className="container-page">
        <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
          <button
            type="button"
            onClick={() => setTabAktif("foto")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
              tabAktif === "foto"
                ? "bg-primary text-white"
                : "text-slate-600 hover:text-primary-dark"
            )}
          >
            <PhotoIcon className="h-4 w-4" />
            Foto
          </button>
          <button
            type="button"
            onClick={() => setTabAktif("video")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
              tabAktif === "video"
                ? "bg-primary text-white"
                : "text-slate-600 hover:text-primary-dark"
            )}
          >
            <VideoCameraIcon className="h-4 w-4" />
            Video
          </button>
        </div>

        <div className="mt-8">
          {tabAktif === "foto" ? (
            <FotoGrid daftarFoto={daftarFoto} kategori={kategoriFoto} />
          ) : (
            <VideoGrid daftarVideo={daftarVideo} />
          )}
        </div>
      </div>
    </section>
  );
}
