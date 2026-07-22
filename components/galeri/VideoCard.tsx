"use client";

import { motion } from "framer-motion";
import { PlayCircleIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import type { GaleriVideo } from "@/types/galeri";
import { cn, formatTanggalIndonesia } from "@/lib/utils";

type VideoCardProps = {
  video: GaleriVideo;
  onClick: () => void;
};

export default function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div
        className={cn(
          "relative flex aspect-video items-center justify-center bg-gradient-to-br",
          video.thumbnailColor
        )}
      >
        <PlayCircleIcon className="h-14 w-14 text-white/90 transition-transform group-hover:scale-110" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-base leading-snug text-slate-900 group-hover:text-primary-dark">
          {video.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
          {video.description}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
          <CalendarDaysIcon className="h-4 w-4" />
          {formatTanggalIndonesia(video.date)}
        </div>
      </div>
    </motion.button>
  );
}
