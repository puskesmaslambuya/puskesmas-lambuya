export type JadwalLayanan = {
  hari: string;
  jam: string;
};

/** Kunci ikon yang tersedia di ICON_MAP (components/layanan/LayananCard.tsx & LayananDetailHero.tsx). */
export type LayananIconKey =
  | "umum"
  | "gigi"
  | "kia"
  | "farmasi"
  | "lab"
  | "ugd"
  | "imunisasi"
  | "posyandu"
  | "promkes";

export type Layanan = {
  slug: string;
  nama: string;
  iconKey: LayananIconKey;
  ringkasan: string;
  deskripsi: string[];
  fasilitas: string[];
  syarat: string[];
  jadwal: JadwalLayanan[];
  penanggungJawab?: string;
};
