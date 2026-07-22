# Website Resmi Puskesmas Lambuya

Dibangun dengan Next.js (App Router) + TypeScript + Tailwind CSS + Supabase.

## Status: Tahap 2 — Halaman Beranda

Sudah tersedia:
- Tahap 1: struktur proyek, konfigurasi, routing dasar, layout, Navbar, Footer
- Tahap 2: Halaman Beranda lengkap (Hero Banner, Sambutan Kepala Puskesmas, Layanan
  Unggulan, Berita Terbaru, Jadwal Pelayanan, Statistik, Galeri, Survey Kepuasan,
  Pengaduan, Google Maps)

## Menjalankan Proyek

```bash
# 1. Install dependencies
npm install

# 2. Salin file environment lalu isi kredensial Supabase
cp .env.local.example .env.local

# 3. Jalankan development server
npm run dev
```

Buka http://localhost:3000 di browser.

## Struktur Folder (Tahap 1)

```
puskesmas-lambuya/
├── app/
│   ├── layout.tsx        # Root layout: font, metadata SEO, Navbar & Footer
│   ├── page.tsx           # Halaman Beranda (menyusun 10 section)
│   └── globals.css        # Style dasar Tailwind
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   └── SectionHeading.tsx   # Heading section reusable (dipakai semua halaman)
│   └── home/
│       ├── HeroBanner.tsx
│       ├── SambutanKepala.tsx
│       ├── LayananUnggulan.tsx
│       ├── BeritaTerbaru.tsx
│       ├── JadwalPelayanan.tsx
│       ├── StatistikPuskesmas.tsx
│       ├── GaleriPreview.tsx
│       ├── SurveyKepuasan.tsx
│       ├── PengaduanSection.tsx
│       └── MapsSection.tsx
├── lib/
│   ├── constants.ts        # Data situs & menu navigasi
│   ├── utils.ts
│   ├── data/
│   │   └── home.ts           # Data contoh untuk semua section Beranda
│   └── supabase/
│       ├── client.ts        # Supabase client (browser)
│       └── server.ts        # Supabase client (server)
├── types/
│   ├── index.ts
│   └── home.ts               # Tipe data section Beranda
├── public/
│   └── images/
├── .env.local.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Catatan

- Kredensial Supabase didapat dari **Project Settings > API** pada dashboard Supabase.
- `next.config.js` mengatur `images.unoptimized = true` karena Cloudflare Pages belum mendukung
  Next.js Image Optimization Server secara native. Ini akan disesuaikan lagi pada tahap deployment.
