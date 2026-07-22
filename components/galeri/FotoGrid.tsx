"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { GaleriFoto, GaleriKategori } from "@/types/galeri";
import { cn } from "@/lib/utils";
import FotoCard from "./FotoCard";
import FotoLightbox from "./FotoLightbox";

type FotoGridProps = {
  daftarFoto: GaleriFoto[];
  kategori: GaleriKategori[];
};

const SEMUA_KATEGORI = "Semua";

export default function FotoGrid({ daftarFoto, kategori }: FotoGridProps) {
  const [filterAktif, setFilterAktif] = useState<string>(SEMUA_KATEGORI);
  const [fotoAktif, setFotoAktif] = useState<GaleriFoto | null>(null);

  const fotoTerfilter = useMemo(() => {
    if (filterAktif === SEMUA_KATEGORI) return daftarFoto;
    return daftarFoto.filter((item) => item.category === filterAktif);
  }, [daftarFoto, filterAktif]);

  const tabs = [SEMUA_KATEGORI, ...kategori];

  return (
    <div>
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

      {fotoTerfilter.length > 0 ? (
        <motion.div
          key={filterAktif}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {fotoTerfilter.map((foto) => (
            <FotoCard key={foto.id} foto={foto} onClick={() => setFotoAktif(foto)} />
          ))}
        </motion.div>
      ) : (
        <p className="mt-10 text-center text-sm text-slate-500">
          Belum ada foto untuk kategori ini.
        </p>
      )}

      <FotoLightbox foto={fotoAktif} onClose={() => setFotoAktif(null)} />
    </div>
  );
}
