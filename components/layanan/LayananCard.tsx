"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Layanan } from "@/types/layanan";
import { LAYANAN_ICON_MAP } from "./iconMap";

type LayananCardProps = {
  layanan: Layanan;
  index?: number;
};

export default function LayananCard({ layanan, index = 0 }: LayananCardProps) {
  const Icon = LAYANAN_ICON_MAP[layanan.iconKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Link
        href={`/layanan/${layanan.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6
          shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-dark">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg">{layanan.nama}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {layanan.ringkasan}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-dark">
          Lihat detail
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}
