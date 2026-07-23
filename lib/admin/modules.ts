import type { AdminModuleConfig } from "@/types/admin";

/**
 * Registry SATU-SATUNYA untuk semua modul admin bertipe CRUD generik.
 * Rute /admin/[module], /admin/[module]/baru, dan /admin/[module]/[id]
 * membaca konfigurasi dari sini — untuk menambah modul baru, cukup
 * tambahkan entri di sini (tidak perlu membuat halaman baru).
 *
 * PENTING: setiap `table` di sini harus sudah dibuat di Supabase.
 * Lihat sql/schema.sql untuk definisi lengkap tabelnya.
 */
export const ADMIN_MODULES: Record<string, AdminModuleConfig> = {
  slider: {
    slug: "slider",
    label: "Slider / Banner Beranda",
    description: "Kelola gambar Hero Banner yang tampil di slider halaman Beranda.",
    table: "slider",
    orderBy: { column: "urutan", ascending: true },
    listColumns: ["title", "urutan", "is_active"],
    fields: [
      { name: "title", label: "Judul", type: "text", required: true },
      { name: "subtitle", label: "Subjudul", type: "textarea" },
      {
        name: "image_url",
        label: "URL Gambar",
        type: "text",
        required: true,
        helpText: "URL gambar dari Supabase Storage atau sumber lain.",
      },
      { name: "link_url", label: "Link Tujuan (opsional)", type: "text" },
      { name: "urutan", label: "Urutan Tampil", type: "number", required: true },
      { name: "is_active", label: "Tampilkan di Beranda", type: "boolean" },
    ],
  },

  berita: {
    slug: "berita",
    label: "Berita",
    description: "Kelola berita dan kegiatan Puskesmas Lambuya.",
    table: "berita",
    orderBy: { column: "published_at", ascending: false },
    listColumns: ["title", "category", "published_at", "is_published"],
    fields: [
      { name: "title", label: "Judul", type: "text", required: true },
      {
        name: "slug",
        label: "Slug URL",
        type: "text",
        required: true,
        helpText: "Contoh: vaksinasi-massal-anak-sekolah",
      },
      {
        name: "category",
        label: "Kategori",
        type: "select",
        required: true,
        options: [
          { label: "Kesehatan", value: "Kesehatan" },
          { label: "Kegiatan", value: "Kegiatan" },
          { label: "Pengumuman Internal", value: "Pengumuman Internal" },
          { label: "Prestasi", value: "Prestasi" },
        ],
      },
      { name: "excerpt", label: "Ringkasan Singkat", type: "textarea", required: true },
      { name: "content", label: "Isi Berita", type: "textarea", required: true },
      { name: "cover_url", label: "URL Gambar Sampul", type: "text" },
      { name: "published_at", label: "Tanggal Terbit", type: "date", required: true },
      { name: "is_published", label: "Publikasikan", type: "boolean" },
    ],
  },

  pengumuman: {
    slug: "pengumuman",
    label: "Pengumuman",
    description: "Kelola pengumuman resmi untuk masyarakat.",
    table: "pengumuman",
    orderBy: { column: "tanggal", ascending: false },
    listColumns: ["title", "tanggal", "is_active"],
    fields: [
      { name: "title", label: "Judul Pengumuman", type: "text", required: true },
      { name: "content", label: "Isi Pengumuman", type: "textarea", required: true },
      { name: "tanggal", label: "Tanggal", type: "date", required: true },
      { name: "is_active", label: "Tampilkan", type: "boolean" },
    ],
  },

  artikel: {
    slug: "artikel",
    label: "Artikel Kesehatan",
    description: "Kelola artikel edukasi kesehatan untuk masyarakat.",
    table: "artikel",
    orderBy: { column: "published_at", ascending: false },
    listColumns: ["title", "category", "published_at", "is_published"],
    fields: [
      { name: "title", label: "Judul", type: "text", required: true },
      {
        name: "category",
        label: "Kategori",
        type: "select",
        required: true,
        options: [
          { label: "Gizi", value: "Gizi" },
          { label: "Ibu & Anak", value: "Ibu & Anak" },
          { label: "Penyakit Menular", value: "Penyakit Menular" },
          { label: "Gaya Hidup Sehat", value: "Gaya Hidup Sehat" },
        ],
      },
      { name: "excerpt", label: "Ringkasan Singkat", type: "textarea", required: true },
      { name: "content", label: "Isi Artikel", type: "textarea", required: true },
      { name: "cover_url", label: "URL Gambar Sampul", type: "text" },
      { name: "published_at", label: "Tanggal Terbit", type: "date", required: true },
      { name: "is_published", label: "Publikasikan", type: "boolean" },
    ],
  },

  pegawai: {
    slug: "pegawai",
    label: "Pegawai",
    description: "Kelola data tenaga kesehatan dan staf Puskesmas.",
    table: "pegawai",
    orderBy: { column: "urutan", ascending: true },
    listColumns: ["nama", "jabatan", "unit"],
    fields: [
      { name: "nama", label: "Nama Lengkap", type: "text", required: true },
      { name: "jabatan", label: "Jabatan", type: "text", required: true },
      { name: "unit", label: "Unit / Poli", type: "text", helpText: "Contoh: Poli Umum" },
      { name: "foto_url", label: "URL Foto", type: "text" },
      { name: "urutan", label: "Urutan Tampil", type: "number" },
    ],
  },

  "struktur-organisasi": {
    slug: "struktur-organisasi",
    label: "Struktur Organisasi",
    description: "Kelola susunan struktur organisasi Puskesmas.",
    table: "struktur_organisasi",
    orderBy: { column: "urutan", ascending: true },
    listColumns: ["nama", "jabatan", "urutan"],
    fields: [
      { name: "nama", label: "Nama Lengkap", type: "text", required: true },
      { name: "jabatan", label: "Jabatan Struktural", type: "text", required: true },
      { name: "urutan", label: "Urutan Bagan", type: "number", required: true },
      { name: "foto_url", label: "URL Foto", type: "text" },
    ],
  },

  "jadwal-pelayanan": {
    slug: "jadwal-pelayanan",
    label: "Jadwal Pelayanan",
    description: "Kelola jadwal buka setiap layanan/poli.",
    table: "jadwal_pelayanan",
    orderBy: { column: "poli", ascending: true },
    listColumns: ["poli", "hari", "jam_mulai", "jam_selesai"],
    fields: [
      { name: "poli", label: "Nama Layanan / Poli", type: "text", required: true },
      { name: "hari", label: "Hari", type: "text", required: true, helpText: "Contoh: Senin - Kamis" },
      { name: "jam_mulai", label: "Jam Mulai", type: "text", required: true, helpText: "Contoh: 08.00" },
      { name: "jam_selesai", label: "Jam Selesai", type: "text", required: true, helpText: "Contoh: 14.00" },
      { name: "keterangan", label: "Keterangan (opsional)", type: "text" },
    ],
  },

  dokumen: {
    slug: "dokumen",
    label: "Dokumen",
    description: "Kelola SOP, SK, formulir, dan dokumen publik yang bisa diunduh.",
    table: "dokumen",
    orderBy: { column: "tanggal", ascending: false },
    listColumns: ["title", "category", "file_type", "tanggal"],
    fields: [
      { name: "title", label: "Judul Dokumen", type: "text", required: true },
      {
        name: "category",
        label: "Kategori",
        type: "select",
        required: true,
        options: [
          { label: "SOP", value: "SOP" },
          { label: "SK", value: "SK" },
          { label: "Formulir", value: "Formulir" },
          { label: "Dokumen Publik", value: "Dokumen Publik" },
        ],
      },
      { name: "description", label: "Deskripsi Singkat", type: "textarea" },
      {
        name: "file_type",
        label: "Tipe File",
        type: "select",
        required: true,
        options: [
          { label: "PDF", value: "pdf" },
          { label: "DOC", value: "doc" },
          { label: "DOCX", value: "docx" },
          { label: "XLSX", value: "xlsx" },
        ],
      },
      { name: "file_size", label: "Ukuran File", type: "text", helpText: "Contoh: 820 KB" },
      {
        name: "file_url",
        label: "URL File",
        type: "text",
        required: true,
        helpText: "URL file dari Supabase Storage.",
      },
      { name: "tanggal", label: "Tanggal", type: "date", required: true },
    ],
  },

  "galeri-foto": {
    slug: "galeri-foto",
    label: "Galeri Foto",
    description: "Kelola dokumentasi foto kegiatan Puskesmas.",
    table: "galeri_foto",
    orderBy: { column: "tanggal", ascending: false },
    listColumns: ["caption", "category", "tanggal"],
    fields: [
      { name: "caption", label: "Keterangan Foto", type: "text", required: true },
      {
        name: "category",
        label: "Kategori",
        type: "select",
        required: true,
        options: [
          { label: "Gedung & Fasilitas", value: "Gedung & Fasilitas" },
          { label: "Pelayanan", value: "Pelayanan" },
          { label: "Kegiatan", value: "Kegiatan" },
          { label: "Posyandu", value: "Posyandu" },
          { label: "Imunisasi", value: "Imunisasi" },
        ],
      },
      { name: "tanggal", label: "Tanggal", type: "date", required: true },
      {
        name: "image_url",
        label: "URL Foto",
        type: "text",
        required: true,
        helpText: "URL gambar dari Supabase Storage.",
      },
    ],
  },

  "galeri-video": {
    slug: "galeri-video",
    label: "Galeri Video",
    description: "Kelola dokumentasi video kegiatan Puskesmas (YouTube).",
    table: "galeri_video",
    orderBy: { column: "tanggal", ascending: false },
    listColumns: ["title", "tanggal", "youtube_id"],
    fields: [
      { name: "title", label: "Judul Video", type: "text", required: true },
      { name: "description", label: "Deskripsi", type: "textarea" },
      { name: "tanggal", label: "Tanggal", type: "date", required: true },
      {
        name: "youtube_id",
        label: "ID Video YouTube",
        type: "text",
        required: true,
        helpText: "Contoh: dQw4w9WgXcQ (bagian akhir URL YouTube)",
      },
    ],
  },
};

export function getAdminModule(slug: string) {
  return ADMIN_MODULES[slug];
}

export function getAdminModuleList() {
  return Object.values(ADMIN_MODULES);
}
