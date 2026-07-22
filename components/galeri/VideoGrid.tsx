"use client";

import { useState } from "react";
import type { GaleriVideo } from "@/types/galeri";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

type VideoGridProps = {
  daftarVideo: GaleriVideo[];
};

export default function VideoGrid({ daftarVideo }: VideoGridProps) {
  const [videoAktif, setVideoAktif] = useState<GaleriVideo | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {daftarVideo.map((video) => (
          <VideoCard key={video.id} video={video} onClick={() => setVideoAktif(video)} />
        ))}
      </div>

      <VideoModal video={videoAktif} onClose={() => setVideoAktif(null)} />
    </div>
  );
}
