"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { HERO_SLIDES } from "@/lib/data/home";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL_MS = 6000;

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeIndex] ?? HERO_SLIDES[0];

  if (!slide) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-page relative py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Teks */}
          <div className="min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-dark">
                  {slide.eyebrow}
                </span>
                <h1 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 md:text-base">
                  {slide.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href={slide.primaryCta.href} className="btn-primary">
                    {slide.primaryCta.label}
                  </Link>
                  {slide.secondaryCta && (
                    <Link href={slide.secondaryCta.href} className="btn-secondary">
                      {slide.secondaryCta.label}
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indikator & kontrol */}
            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                aria-label="Slide sebelumnya"
                onClick={() => goTo(activeIndex - 1)}
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {HERO_SLIDES.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Ke slide ${index + 1}`}
                    onClick={() => goTo(index)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === activeIndex ? "w-8 bg-primary" : "w-2 bg-slate-300"
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Slide berikutnya"
                onClick={() => goTo(activeIndex + 1)}
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Ilustrasi placeholder — ganti dengan foto gedung/kegiatan asli */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mx-auto aspect-[4/3] w-full max-w-md rounded-2xl bg-gradient-to-br
              from-primary/15 via-white to-secondary/15 shadow-card"
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-white">
                  PL
                </div>
                <p className="mt-3 text-sm font-medium text-slate-500">
                  Foto Gedung Puskesmas Lambuya
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
