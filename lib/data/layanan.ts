import type { Layanan } from "@/types/layanan";

/**
 * Semua data di file ini adalah DATA CONTOH.
 * Ganti dengan data resmi Puskesmas Lambuya, dan pindahkan ke Supabase
 * (tabel `layanan`) setelah Panel Admin (Tahap 11) tersedia.
 *
 * Slug wajib sinkron dengan href pada lib/data/home.ts (LAYANAN_UNGGULAN)
 * dan lib/constants.ts (NAV_ITEMS -> children Layanan).
 */
export const DAFTAR_LAYANAN: Layanan[] = [
  {
    slug: "poli-umum",
    nama: "Poli Umum",
    iconKey: "umum",
    ringkasan: "Pemeriksaan dan pengobatan penyakit umum bagi seluruh lapisan masyarakat.",
    deskripsi: [
      "Poli Umum melayani pemeriksaan kesehatan dasar, diagnosis, dan pengobatan penyakit umum non-spesialistik.",
      "Pasien akan diperiksa oleh dokter umum dan mendapatkan rujukan bila diperlukan penanganan lebih lanjut ke fasilitas kesehatan tingkat lanjut.",
    ],
    fasilitas: ["Ruang periksa", "Tensimeter digital", "Timbangan & pengukur tinggi badan", "Alat diagnostik dasar"],
    syarat: ["Membawa KTP/KK", "Membawa kartu BPJS (jika ada)", "Mengambil nomor antrean"],
    jadwal: [
      { hari: "Senin - Kamis", jam: "08.00 - 13.00 WITA" },
      { hari: "Jumat", jam: "08.00 - 11.00 WITA" },
      { hari: "Sabtu", jam: "08.00 - 12.00 WITA" },
    ],
    penanggungJawab: "dr. (Nama Dokter Penanggung Jawab)",
  },
  {
    slug: "poli-gigi",
    nama: "Poli Gigi",
    iconKey: "gigi",
    ringkasan: "Pelayanan kesehatan gigi dan mulut untuk semua usia.",
    deskripsi: [
      "Poli Gigi memberikan pelayanan pemeriksaan, perawatan, dan tindakan dasar kesehatan gigi dan mulut.",
      "Meliputi penambalan, pencabutan, pembersihan karang gigi (scaling), dan edukasi kesehatan gigi.",
    ],
    fasilitas: ["Dental unit", "Alat sterilisasi", "Ruang tindakan"],
    syarat: ["Membawa KTP/KK", "Membawa kartu BPJS (jika ada)", "Mengambil nomor antrean"],
    jadwal: [{ hari: "Senin - Sabtu", jam: "08.00 - 12.00 WITA" }],
  },
  {
    slug: "kia",
    nama: "KIA (Kesehatan Ibu & Anak)",
    iconKey: "kia",
    ringkasan: "Pelayanan kesehatan ibu hamil, ibu nifas, bayi, dan balita.",
    deskripsi: [
      "Layanan KIA meliputi pemeriksaan kehamilan (ANC), pelayanan nifas, serta pemantauan tumbuh kembang anak.",
      "Termasuk konseling gizi ibu dan anak, serta deteksi dini risiko kehamilan.",
    ],
    fasilitas: ["Ruang bersalin", "USG", "Alat pemeriksaan kehamilan", "Ruang laktasi"],
    syarat: ["Membawa buku KIA", "Membawa KTP/KK", "Kartu BPJS (jika ada)"],
    jadwal: [{ hari: "Senin - Sabtu", jam: "08.00 - 13.00 WITA" }],
  },
  {
    slug: "farmasi",
    nama: "Farmasi",
    iconKey: "farmasi",
    ringkasan: "Pelayanan resep obat dan konsultasi penggunaan obat.",
    deskripsi: [
      "Unit Farmasi menyediakan obat sesuai resep dokter dan memberikan edukasi cara penggunaan obat yang benar dan aman.",
    ],
    fasilitas: ["Ruang racik obat", "Gudang obat", "Lemari pendingin vaksin/obat"],
    syarat: ["Menyerahkan resep dokter", "Kartu BPJS (jika ada)"],
    jadwal: [{ hari: "Senin - Sabtu", jam: "08.00 - 14.00 WITA" }],
  },
  {
    slug: "laboratorium",
    nama: "Laboratorium",
    iconKey: "lab",
    ringkasan: "Pemeriksaan penunjang diagnostik seperti darah, urine, dan lainnya.",
    deskripsi: [
      "Laboratorium melayani pemeriksaan sederhana untuk mendukung diagnosis dokter, seperti gula darah, kolesterol, asam urat, dan tes kehamilan.",
    ],
    fasilitas: ["Alat cek gula darah", "Alat cek kolesterol & asam urat", "Alat pemeriksaan urine"],
    syarat: ["Membawa surat pengantar dari dokter poli", "Kartu BPJS (jika ada)"],
    jadwal: [{ hari: "Senin - Sabtu", jam: "08.00 - 12.00 WITA" }],
  },
  {
    slug: "ugd",
    nama: "UGD (Unit Gawat Darurat)",
    iconKey: "ugd",
    ringkasan: "Penanganan pertama kasus kegawatdaruratan medis, siaga 24 jam.",
    deskripsi: [
      "UGD siap memberikan pertolongan pertama pada kondisi darurat sebelum dirujuk ke fasilitas kesehatan lanjutan bila diperlukan.",
    ],
    fasilitas: ["Ruang tindakan darurat", "Tabung oksigen", "Ambulans siaga"],
    syarat: ["Segera datang tanpa perlu nomor antrean", "Kartu identitas dapat menyusul jika kondisi darurat"],
    jadwal: [{ hari: "Setiap Hari", jam: "24 Jam" }],
  },
  {
    slug: "imunisasi",
    nama: "Imunisasi",
    iconKey: "imunisasi",
    ringkasan: "Pelayanan imunisasi dasar dan lanjutan bagi bayi dan anak.",
    deskripsi: [
      "Program imunisasi bertujuan mencegah penyakit menular pada bayi dan anak sesuai jadwal imunisasi nasional dari Kemenkes.",
    ],
    fasilitas: ["Lemari pendingin vaksin (cold chain)", "Ruang penyuntikan", "Kartu imunisasi"],
    syarat: ["Membawa buku KIA/KMS", "KTP/KK orang tua"],
    jadwal: [{ hari: "Rabu & Sabtu", jam: "08.00 - 12.00 WITA" }],
  },
  {
    slug: "posyandu",
    nama: "Posyandu",
    iconKey: "posyandu",
    ringkasan: "Kegiatan pemantauan kesehatan balita dan lansia berbasis masyarakat.",
    deskripsi: [
      "Posyandu merupakan kegiatan rutin bulanan yang melibatkan kader kesehatan untuk memantau tumbuh kembang balita dan kesehatan lansia di wilayah kerja Puskesmas Lambuya.",
    ],
    fasilitas: ["Alat timbang bayi/balita", "Alat ukur tinggi badan", "Meja pelayanan 5 langkah"],
    syarat: ["Membawa buku KIA/KMS", "Sesuai jadwal posyandu di desa masing-masing"],
    jadwal: [{ hari: "Sesuai Jadwal Desa", jam: "08.00 - 11.00 WITA" }],
  },
  {
    slug: "promosi-kesehatan",
    nama: "Promosi Kesehatan",
    iconKey: "promkes",
    ringkasan: "Edukasi dan penyuluhan kesehatan bagi masyarakat.",
    deskripsi: [
      "Unit Promosi Kesehatan (Promkes) melakukan penyuluhan, edukasi, dan kampanye pola hidup sehat kepada masyarakat di wilayah kerja Puskesmas Lambuya.",
    ],
    fasilitas: ["Media edukasi (poster, leaflet)", "Ruang penyuluhan", "Alat peraga kesehatan"],
    syarat: ["Terbuka untuk umum", "Dapat diakses melalui kegiatan sekolah/desa"],
    jadwal: [{ hari: "Sesuai Jadwal Kegiatan", jam: "-" }],
  },
];

export function getLayananBySlug(slug: string): Layanan | undefined {
  return DAFTAR_LAYANAN.find((item) => item.slug === slug);
}
