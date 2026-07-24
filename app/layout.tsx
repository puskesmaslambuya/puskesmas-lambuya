import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://puskesmaslambuya.go.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Website resmi Puskesmas Lambuya, Kabupaten Konawe. Informasi layanan kesehatan, berita, jadwal pelayanan, dan pengaduan masyarakat.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Puskesmas Lambuya",
    "Puskesmas Konawe",
    "layanan kesehatan Lambuya",
    "pelayanan kesehatan masyarakat",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description:
      "Website resmi Puskesmas Lambuya. Informasi layanan kesehatan, berita, jadwal pelayanan, dan pengaduan masyarakat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Root layout HANYA berisi <html>/<body>, font, dan metadata global.
 * Navbar & Footer situs publik dipindahkan ke app/(site)/layout.tsx agar
 * TIDAK ikut tampil di /admin (Panel Admin punya layout & sidebar sendiri).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
