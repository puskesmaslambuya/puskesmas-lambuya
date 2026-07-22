"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  ShieldExclamationIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import { LAYANAN_UNGGULAN } from "@/lib/data/home";
import type { LayananItem } from "@/types/home";

const ICON_MAP: Record<LayananItem["iconKey"], typeof HeartIcon> = {
  umum: HeartIcon,
  gigi: SparklesIcon,
  kia: UserGroupIcon,
  farmasi: ClipboardDocumentCheckIcon,
  lab: BeakerIcon,
  ugd: ShieldExclamationIcon,
  imunisasi: ShieldExclamationIcon,
  posyandu: UserGroupIcon,
  promkes: HeartIcon,
};

export default function LayananUnggulan() {
  return (
    <section className="section-y bg-surface-muted">
      <div className="container-page">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Layanan Unggulan Puskesmas Lambuya"
          description="Kami menyediakan berbagai layanan kesehatan dasar untuk memenuhi kebutuhan masyarakat di wilayah kerja Puskesmas Lambuya."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LAYANAN_UNGGULAN.map((item, index) => {
            const Icon = ICON_MAP[item.iconKey];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6
                    shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-dark">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-dark">
                    Selengkapnya
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
