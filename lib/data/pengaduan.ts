import type { MekanismeStep, PengaduanKategori } from "@/types/pengaduan";
import { SITE_CONFIG } from "@/lib/constants";

export const PENGADUAN_KATEGORI: PengaduanKategori[] = [
  "Pelayanan",
  "Sarana & Prasarana",
  "Petugas",
  "Administrasi",
  "Lainnya",
];

export const MEKANISME_PENGADUAN: MekanismeStep[] = [
  {
    title: "Sampaikan Pengaduan",
    description:
      "Isi form pengaduan online, kirim pesan WhatsApp, atau email dengan menjelaskan keluhan secara jelas.",
  },
  {
    title: "Verifikasi",
    description:
      "Tim Pengaduan Puskesmas memverifikasi dan mengklasifikasikan pengaduan yang masuk maksimal 1x24 jam kerja.",
  },
  {
    title: "Tindak Lanjut",
    description:
      "Pengaduan diteruskan ke unit terkait untuk ditindaklanjuti dan dicarikan solusi.",
  },
  {
    title: "Jawaban & Penyelesaian",
    description:
      "Pelapor menerima informasi tindak lanjut/penyelesaian pengaduan maksimal 5 hari kerja.",
  },
];

/** Link WhatsApp resmi untuk pengaduan, dibentuk dari nomor di lib/constants.ts */
export const PENGADUAN_WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
  "Halo Admin Puskesmas Lambuya, saya ingin menyampaikan pengaduan..."
)}`;

export const PENGADUAN_WHATSAPP_QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(
  PENGADUAN_WHATSAPP_URL
)}`;
