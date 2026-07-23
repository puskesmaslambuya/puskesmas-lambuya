/**
 * Konfigurasi Survey Kepuasan Masyarakat (SKM).
 * DATA CONTOH — ganti `googleFormUrl` dengan link Google Form/SKM resmi.
 * Setelah Panel Admin (Tahap 11) tersedia, nilai ini bisa diedit lewat
 * menu Survey tanpa perlu mengubah kode (disimpan di tabel `survey_settings`).
 */
export const SURVEY_CONFIG = {
  googleFormUrl: "https://forms.gle/contoh-link-survey-kepuasan-masyarakat",
  get qrImageUrl() {
    return `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=${encodeURIComponent(
      this.googleFormUrl
    )}`;
  },
  steps: [
    "Pindai (scan) kode QR di samping menggunakan kamera HP, atau klik tombol \u201cIsi Survey Sekarang\u201d.",
    "Isi data singkat (jenis layanan yang diterima, tanggal kunjungan).",
    "Beri penilaian terhadap unsur-unsur pelayanan yang tersedia di formulir.",
    "Sampaikan saran atau masukan pada kolom yang disediakan.",
    "Klik Kirim. Jawaban bersifat anonim dan digunakan untuk perbaikan mutu layanan.",
  ],
};
