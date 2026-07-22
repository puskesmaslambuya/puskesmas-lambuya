/**
 * Data identitas & konfigurasi statis Puskesmas Lambuya.
 * Ganti nilai di bawah ini dengan data resmi bila sudah tersedia.
 * Di tahap Panel Admin, sebagian data ini akan dipindah ke Supabase (tabel `site_settings`).
 */

export const SITE_CONFIG = {
  name: "Puskesmas Lambuya",
  fullName: "Unit Pelaksana Teknis Daerah Puskesmas Lambuya",
  tagline: "Melayani Sepenuh Hati, Sehat Bersama Masyarakat",
  address: "Jl. Poros Lambuya, Kec. Lambuya, Kabupaten Konawe, Sulawesi Tenggara",
  phone: "(0401) 123456",
  whatsapp: "6281234567890",
  email: "puskesmaslambuya@konawekab.go.id",
  operationalHours: [
    { day: "Senin - Kamis", time: "08.00 - 14.00 WITA" },
    { day: "Jumat", time: "08.00 - 11.00 WITA" },
    { day: "Sabtu", time: "08.00 - 12.00 WITA" },
    { day: "UGD", time: "24 Jam" },
  ],
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63737.0!2d122.0!3d-4.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
  socialMedia: {
    facebook: "https://facebook.com/puskesmaslambuya",
    instagram: "https://instagram.com/puskesmaslambuya",
    youtube: "https://youtube.com/@puskesmaslambuya",
  },
} as const;

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/profil",
    children: [
      { label: "Sejarah", href: "/profil#sejarah" },
      { label: "Visi & Misi", href: "/profil#visi-misi" },
      { label: "Motto", href: "/profil#motto" },
      { label: "Maklumat Pelayanan", href: "/profil#maklumat-pelayanan" },
      { label: "Struktur Organisasi", href: "/profil#struktur-organisasi" },
      { label: "SDM", href: "/profil#sdm" },
      { label: "Wilayah Kerja", href: "/profil#wilayah-kerja" },
      { label: "Akreditasi", href: "/profil#akreditasi" },
    ],
  },
  {
    label: "Layanan",
    href: "/layanan",
    children: [
      { label: "Poli Umum", href: "/layanan/poli-umum" },
      { label: "Poli Gigi", href: "/layanan/poli-gigi" },
      { label: "KIA", href: "/layanan/kia" },
      { label: "Farmasi", href: "/layanan/farmasi" },
      { label: "Laboratorium", href: "/layanan/laboratorium" },
      { label: "UGD", href: "/layanan/ugd" },
      { label: "Imunisasi", href: "/layanan/imunisasi" },
      { label: "Posyandu", href: "/layanan/posyandu" },
      { label: "Promosi Kesehatan", href: "/layanan/promosi-kesehatan" },
    ],
  },
  {
    label: "Informasi",
    href: "/informasi",
    children: [
      { label: "Berita", href: "/informasi/berita" },
      { label: "Pengumuman", href: "/informasi/pengumuman" },
      { label: "Artikel Kesehatan", href: "/informasi/artikel" },
    ],
  },
  { label: "Galeri", href: "/galeri" },
  { label: "Download", href: "/download" },
  { label: "Survey", href: "/survey" },
  { label: "Pengaduan", href: "/pengaduan" },
  { label: "Kontak", href: "/kontak" },
];
