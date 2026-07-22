import { clsx, type ClassValue } from "clsx";

/** Gabungkan className secara kondisional. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/** Format tanggal ISO (YYYY-MM-DD) menjadi format Indonesia, mis. "10 Juli 2026". */
export function formatTanggalIndonesia(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
