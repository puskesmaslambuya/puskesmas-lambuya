"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import type { Dokumen, DokumenKategori } from "@/types/download";
import { cn } from "@/lib/utils";
import DokumenItem from "./DokumenItem";

type DokumenExplorerProps = {
  daftarDokumen: Dokumen[];
  kategori: DokumenKategori[];
};

const SEMUA_KATEGORI = "Semua";

export default function DokumenExplorer({ daftarDokumen, kategori }: DokumenExplorerProps) {
  const [filterAktif, setFilterAktif] = useState<string>(SEMUA_KATEGORI);
  const [pencarian, setPencarian] = useState("");

  const dokumenTerfilter = useMemo(() => {
    const kataKunci = pencarian.trim().toLowerCase();

    return daftarDokumen.filter((item) => {
      const cocokKategori = filterAktif === SEMUA_KATEGORI || item.category === filterAktif;
      const cocokKataKunci =
        kataKunci.length === 0 ||
        item.title.toLowerCase().includes(kataKunci) ||
        item.description.toLowerCase().includes(kataKunci);

      return cocokKategori && cocokKataKunci;
    });
  }, [daftarDokumen, filterAktif, pencarian]);

  const tabs = [SEMUA_KATEGORI, ...kategori];

  return (
    <section className="section-y">
      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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

          {/* Pencarian dokumen */}
          <div className="relative md:w-72">
            <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={pencarian}
              onChange={(event) => setPencarian(event.target.value)}
              placeholder="Cari dokumen..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {dokumenTerfilter.length > 0 ? (
          <motion.div
            key={`${filterAktif}-${pencarian}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="mt-8 flex flex-col gap-4"
          >
            {dokumenTerfilter.map((dokumen) => (
              <DokumenItem key={dokumen.id} dokumen={dokumen} />
            ))}
          </motion.div>
        ) : (
          <p className="mt-10 text-center text-sm text-slate-500">
            Tidak ada dokumen yang cocok dengan pencarian atau kategori ini.
          </p>
        )}
      </div>
    </section>
  );
}
