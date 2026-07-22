export type DokumenKategori = "SOP" | "SK" | "Formulir" | "Dokumen Publik";

export type DokumenFileType = "pdf" | "doc" | "docx" | "xlsx";

export type Dokumen = {
  id: string;
  title: string;
  category: DokumenKategori;
  description: string;
  fileType: DokumenFileType;
  /** Ukuran file, mis. "1.2 MB". Tampilan saja — tidak dipakai untuk validasi. */
  fileSize: string;
  date: string; // ISO date string
  /**
   * URL file unduhan. Saat ini berupa path placeholder di /public/documents.
   * Setelah Panel Admin (Tahap 11) tersedia, nilai ini akan menunjuk ke
   * URL publik Supabase Storage (bucket `dokumen`).
   */
  fileUrl: string;
};
