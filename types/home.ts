export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type LayananItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  iconKey:
    | "umum"
    | "gigi"
    | "kia"
    | "farmasi"
    | "lab"
    | "ugd"
    | "imunisasi"
    | "posyandu"
    | "promkes";
};

export type BeritaItem = {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string; // ISO date string
  coverColor: string; // dipakai untuk placeholder visual sebelum ada foto asli
};

export type JadwalItem = {
  id: string;
  poli: string;
  hari: string;
  jam: string;
};

export type StatistikItem = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
};

export type GaleriPreviewItem = {
  id: string;
  caption: string;
  color: string; // placeholder warna sebelum ada foto asli
};
