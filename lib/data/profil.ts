import type {
  MisiItem,
  MaklumatItem,
  StrukturNode,
  SdmCategory,
  WilayahDesa,
  AkreditasiInfo,
} from "@/types/profil";

/**
 * Semua data di file ini adalah DATA CONTOH.
 * Ganti dengan data resmi Puskesmas Lambuya, dan pindahkan ke Supabase
 * setelah Panel Admin (Tahap 11) tersedia.
 */

export const SEJARAH_TEXT = `Puskesmas Lambuya didirikan untuk memenuhi kebutuhan pelayanan kesehatan dasar
masyarakat di wilayah Kecamatan Lambuya, Kabupaten Konawe. Sejak awal berdirinya,
Puskesmas Lambuya terus berkembang baik dari sisi fasilitas, tenaga kesehatan,
maupun cakupan layanan, guna menjawab kebutuhan kesehatan masyarakat yang semakin
beragam. Melalui dukungan pemerintah daerah dan partisipasi aktif masyarakat,
Puskesmas Lambuya berkomitmen menjadi pusat pelayanan kesehatan yang terpercaya
dan mudah dijangkau oleh seluruh lapisan masyarakat di wilayah kerjanya.`;

export const VISI_TEXT =
  "Menjadi Puskesmas dengan pelayanan kesehatan yang bermutu, merata, dan berkeadilan menuju masyarakat Lambuya yang sehat dan mandiri.";

export const MISI_LIST: MisiItem[] = [
  { id: "m1", text: "Meningkatkan kualitas pelayanan kesehatan yang profesional dan berorientasi pada masyarakat." },
  { id: "m2", text: "Mendorong kemandirian masyarakat untuk hidup sehat melalui upaya promotif dan preventif." },
  { id: "m3", text: "Meningkatkan kompetensi dan kesejahteraan sumber daya manusia kesehatan." },
  { id: "m4", text: "Menjalin kemitraan lintas sektor dalam mendukung pembangunan kesehatan wilayah." },
];

export const MOTTO_TEXT = "Sehat Anda, Prioritas Kami";

export const MAKLUMAT_PELAYANAN: MaklumatItem[] = [
  { id: "mp1", text: "Kami siap memberikan pelayanan kesehatan sesuai standar operasional prosedur yang berlaku." },
  { id: "mp2", text: "Kami siap melayani masyarakat dengan ramah, cepat, tepat, dan tanpa membeda-bedakan." },
  { id: "mp3", text: "Kami siap menerima kritik dan saran masyarakat sebagai bahan perbaikan pelayanan." },
  { id: "mp4", text: "Kami siap menerima sanksi sesuai peraturan yang berlaku apabila tidak menepati janji ini." },
];

export const STRUKTUR_ORGANISASI: StrukturNode = {
  id: "kepala",
  name: "SRI SUMIATI, SKM",
  role: "Kepala Puskesmas",
  children: [
    {
      id: "tu",
      name: "Nama Petugas",
      role: "Kepala Sub Bagian Tata Usaha",
      children: [
        { id: "tu-1", name: "Unit Kepegawaian", role: "Koordinator" },
        { id: "tu-2", name: "Unit Keuangan", role: "Koordinator" },
        { id: "tu-3", name: "Unit Sistem Informasi", role: "Koordinator" },
      ],
    },
    {
      id: "ukm",
      name: "Nama Petugas",
      role: "Penanggung Jawab UKM",
      children: [
        { id: "ukm-1", name: "Promosi Kesehatan", role: "Koordinator" },
        { id: "ukm-2", name: "Kesehatan Lingkungan", role: "Koordinator" },
        { id: "ukm-3", name: "KIA & KB", role: "Koordinator" },
        { id: "ukm-4", name: "Gizi Masyarakat", role: "Koordinator" },
      ],
    },
    {
      id: "ukp",
      name: "Nama Petugas",
      role: "Penanggung Jawab UKP",
      children: [
        { id: "ukp-1", name: "Poli Umum & UGD", role: "Koordinator" },
        { id: "ukp-2", name: "Poli Gigi", role: "Koordinator" },
        { id: "ukp-3", name: "Farmasi & Laboratorium", role: "Koordinator" },
      ],
    },
  ],
};

export const SDM_CATEGORIES: SdmCategory[] = [
  { id: "sdm1", label: "Dokter Umum", count: 4 },
  { id: "sdm2", label: "Dokter Gigi", count: 2 },
  { id: "sdm3", label: "Bidan", count: 9 },
  { id: "sdm4", label: "Perawat", count: 12 },
  { id: "sdm5", label: "Apoteker & Tenaga Farmasi", count: 3 },
  { id: "sdm6", label: "Tenaga Kesehatan Masyarakat", count: 4 },
  { id: "sdm7", label: "Analis Laboratorium", count: 2 },
  { id: "sdm8", label: "Tenaga Administrasi & Umum", count: 5 },
];

export const WILAYAH_KERJA: WilayahDesa[] = [
  { id: "w1", name: "Desa Lambuya", jarakKm: 0 },
  { id: "w2", name: "Desa Lamomea", jarakKm: 3 },
  { id: "w3", name: "Desa Ambekairi", jarakKm: 5 },
  { id: "w4", name: "Desa Puuduria", jarakKm: 4 },
  { id: "w5", name: "Desa Lanibungi", jarakKm: 6 },
  { id: "w6", name: "Desa Ranomeeto", jarakKm: 8 },
  { id: "w7", name: "Desa Amosilu", jarakKm: 7 },
  { id: "w8", name: "Desa Lambuya Timur", jarakKm: 2 },
];

export const AKREDITASI_INFO: AkreditasiInfo = {
  status: "Terakreditasi Utama",
  tahun: "2024",
  nomorSertifikat: "No. Sertifikat: XXX/AKR-PKM/2024",
  masaBerlaku: "Berlaku hingga tahun 2029",
};
