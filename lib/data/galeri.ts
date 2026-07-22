import type { GaleriFoto, GaleriKategori, GaleriVideo } from "@/types/galeri";

/**
 * Semua data di file ini adalah DATA CONTOH.
 * Setelah Panel Admin (Tahap 11) tersedia, data ini akan diambil dari Supabase Storage
 * (foto/video asli) dan tabel `galeri`, bukan lagi dari file statis.
 *
 * File ini adalah SATU-SATUNYA sumber data galeri — dipakai baik oleh
 * halaman Beranda (components/home/GaleriPreview.tsx) maupun halaman Galeri (/galeri).
 */
export const DAFTAR_FOTO: GaleriFoto[] = [
  {
    id: "foto-1",
    caption: "Gedung Pelayanan Utama",
    category: "Gedung & Fasilitas",
    date: "2026-06-01",
    color: "from-primary/25 to-primary/5",
  },
  {
    id: "foto-2",
    caption: "Kegiatan Posyandu Balita",
    category: "Posyandu",
    date: "2026-07-05",
    color: "from-secondary/25 to-secondary/5",
  },
  {
    id: "foto-3",
    caption: "Ruang Pemeriksaan Umum",
    category: "Gedung & Fasilitas",
    date: "2026-05-20",
    color: "from-primary/20 to-secondary/10",
  },
  {
    id: "foto-4",
    caption: "Vaksinasi Massal Anak Sekolah",
    category: "Imunisasi",
    date: "2026-07-10",
    color: "from-secondary/20 to-primary/10",
  },
  {
    id: "foto-5",
    caption: "Ruang Tunggu Pasien",
    category: "Gedung & Fasilitas",
    date: "2026-04-18",
    color: "from-primary/15 to-primary/5",
  },
  {
    id: "foto-6",
    caption: "Pelayanan Poli Gigi",
    category: "Pelayanan",
    date: "2026-06-22",
    color: "from-secondary/15 to-secondary/5",
  },
  {
    id: "foto-7",
    caption: "Posyandu Lansia di Desa",
    category: "Posyandu",
    date: "2026-07-05",
    color: "from-primary/25 to-secondary/5",
  },
  {
    id: "foto-8",
    caption: "Penyuluhan Kesehatan Masyarakat",
    category: "Kegiatan",
    date: "2026-06-15",
    color: "from-secondary/25 to-primary/5",
  },
  {
    id: "foto-9",
    caption: "Pelayanan KIA & Ibu Hamil",
    category: "Pelayanan",
    date: "2026-05-30",
    color: "from-primary/20 to-primary/5",
  },
  {
    id: "foto-10",
    caption: "Imunisasi Rutin Bayi",
    category: "Imunisasi",
    date: "2026-06-02",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    id: "foto-11",
    caption: "Apotek & Pelayanan Farmasi",
    category: "Gedung & Fasilitas",
    date: "2026-04-05",
    color: "from-primary/15 to-secondary/10",
  },
  {
    id: "foto-12",
    caption: "Senam Sehat Lansia",
    category: "Kegiatan",
    date: "2026-06-28",
    color: "from-secondary/15 to-primary/10",
  },
];

export const DAFTAR_VIDEO: GaleriVideo[] = [
  {
    id: "video-1",
    title: "Profil Singkat Puskesmas Lambuya",
    description:
      "Video pengenalan fasilitas, layanan, dan tenaga kesehatan Puskesmas Lambuya.",
    date: "2026-05-01",
    youtubeId: "CONTOH_ID_VIDEO_1",
    thumbnailColor: "from-primary/25 to-primary/5",
  },
  {
    id: "video-2",
    title: "Edukasi Cuci Tangan Pakai Sabun",
    description:
      "Panduan langkah-langkah cuci tangan yang benar untuk mencegah penyebaran penyakit.",
    date: "2026-06-10",
    youtubeId: "CONTOH_ID_VIDEO_2",
    thumbnailColor: "from-secondary/25 to-secondary/5",
  },
  {
    id: "video-3",
    title: "Dokumentasi Kegiatan Posyandu Lansia",
    description: "Cuplikan kegiatan pemeriksaan kesehatan lansia di 5 desa wilayah kerja.",
    date: "2026-07-05",
    youtubeId: "CONTOH_ID_VIDEO_3",
    thumbnailColor: "from-primary/20 to-secondary/10",
  },
];

export function getFotoPreview(limit: number): GaleriFoto[] {
  return [...DAFTAR_FOTO].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, limit);
}

export function getKategoriFoto(): GaleriKategori[] {
  return Array.from(new Set(DAFTAR_FOTO.map((item) => item.category)));
}
