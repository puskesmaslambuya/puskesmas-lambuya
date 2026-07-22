"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Berita, BeritaKategori } from "@/types/berita";
import { cn } from "@/lib/utils";
import BeritaCard from "./BeritaCard";

type BeritaListProps = {
  daftarBerita: Berita[];
  kategori: BeritaKategori[];
};

const SEMUA_KATEGORI = "Semua";

export default function BeritaList({ daftarBerita, kategori }: BeritaListProps) {
  const [filterAktif, setFilterAktif] = useState<string>(SEMUA_KATEGORI);

  const beritaTerfilter = useMemo(() => {
    if (filterAktif === SEMUA_KATEGORI) return daftarBerita;
    return daftarBerita.filter((item) => item.category === filterAktif);
  }, [daftarBerita, filterAktif]);

  const tabs = [SEMUA_KATEGORI, ...kategori];

  return (
    <section className="section-y">
      <div className="container-page">
        {/* Filter kategori */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilterAktif(tab)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filterAktif === tab
                  ? "border-primary bg-primary text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-primary-50 hover:text-primary-dark"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid berita */}
        {beritaTerfilter.length > 0 ? (
          <motion.div
            key={filterAktif}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {beritaTerfilter.map((berita) => (
              <BeritaCard key={berita.id} berita={berita} />
            ))}
          </motion.div>
        ) : (
          <p className="mt-10 text-center text-sm text-slate-500">
            Belum ada berita untuk kategori ini.
          </p>
        )}
      </div>
    </section>
  );
}
