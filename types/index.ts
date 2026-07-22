/**
 * Tipe-tipe global. Tipe khusus per fitur (Berita, Galeri, dll.)
 * akan ditambahkan pada tahap masing-masing di folder `types/` atau `features/*/types.ts`.
 */

export type OperationalHour = {
  day: string;
  time: string;
};

export type SocialMediaLinks = {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
};
