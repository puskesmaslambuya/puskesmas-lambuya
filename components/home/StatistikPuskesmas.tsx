"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATISTIK_PUSKESMAS } from "@/lib/data/home";
import type { StatistikItem } from "@/types/home";

function CountUpValue({ item }: { item: StatistikItem }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const durationMs = 1200;
    const startTime = performance.now();
    const decimals = Number.isInteger(item.value) ? 0 : 2;

    function tick(now: number) {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const raw = eased * item.value;
      setDisplayValue(Number(raw.toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    }

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, item.value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString("id-ID", {
        minimumFractionDigits: Number.isInteger(item.value) ? 0 : 2,
        maximumFractionDigits: Number.isInteger(item.value) ? 0 : 2,
      })}
      {item.suffix}
    </span>
  );
}

export default function StatistikPuskesmas() {
  return (
    <section className="bg-primary py-14 text-white md:py-16">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATISTIK_PUSKESMAS.map((item) => (
            <div key={item.id} className="text-center">
              <p className="font-heading text-3xl font-bold md:text-4xl">
                <CountUpValue item={item} />
              </p>
              <p className="mt-2 text-sm text-white/80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
