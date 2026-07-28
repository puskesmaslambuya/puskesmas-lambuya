import { SITE_CONFIG } from "@/lib/constants";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * File ini KHUSUS untuk fungsi yang mengambil data Kontak dari Supabase
 * (tabel `site_settings`, server-only). Dipakai bersama oleh halaman
 * Kontak (app/(site)/kontak/page.tsx) dan Beranda (components/home/MapsSection.tsx)
 * supaya keduanya selalu menampilkan data yang sama & konsisten.
 */

export type JamPelayanan = { day: string; time: string };

/**
 * Ambil URL murni dari nilai "URL Embed Google Maps" di Panel Admin.
 * Toleran terhadap 2 kemungkinan isian:
 *  - Hanya URL: "https://www.google.com/maps/embed?pb=..."
 *  - Tag <iframe> utuh yang di-paste dari Google Maps > Bagikan > Sematkan peta
 */
export function extractMapsSrc(raw: string) {
  const match = raw.match(/src="([^"]+)"/);
  return match?.[1] ?? raw;
}

export function parseOperationalHours(raw: string | null | undefined): JamPelayanan[] {
  if (!raw) return [...SITE_CONFIG.operationalHours];

  const parsed = raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [day, time] = line.split("|");
      return { day: (day ?? "").trim(), time: (time ?? "").trim() };
    })
    .filter((jam) => jam.day && jam.time);

  return parsed.length > 0 ? parsed : [...SITE_CONFIG.operationalHours];
}

export type KontakData = {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  mapsEmbedUrl: string;
  operationalHours: JamPelayanan[];
};

/**
 * Ambil data Kontak dari Supabase (tabel `site_settings`, baris id=1).
 * Kalau kosong/error, kembalikan data contoh statis dari lib/constants.ts.
 */
export async function getKontakData(): Promise<KontakData> {
  try {
    const supabase = createSupabaseServerClient();
    const { data } = await supabase.from("site_settings").select("*").eq("id", 1).single();

    return {
      address: data?.address || SITE_CONFIG.address,
      phone: data?.phone || SITE_CONFIG.phone,
      whatsapp: data?.whatsapp || SITE_CONFIG.whatsapp,
      email: data?.email || SITE_CONFIG.email,
      mapsEmbedUrl: extractMapsSrc(data?.maps_embed_url || SITE_CONFIG.mapsEmbedUrl),
      operationalHours: parseOperationalHours(data?.operational_hours),
    };
  } catch {
    return {
      address: SITE_CONFIG.address,
      phone: SITE_CONFIG.phone,
      whatsapp: SITE_CONFIG.whatsapp,
      email: SITE_CONFIG.email,
      mapsEmbedUrl: extractMapsSrc(SITE_CONFIG.mapsEmbedUrl),
      operationalHours: [...SITE_CONFIG.operationalHours],
    };
  }
}
