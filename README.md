# Website Resmi Puskesmas Lambuya

Dibangun dengan Next.js (App Router) + TypeScript + Tailwind CSS + Supabase.

## Status: Tahap 11 — Panel Admin (Selesai Semua Tahap)

Sudah tersedia:
- **Tahap 1**: struktur proyek, konfigurasi, routing dasar, layout, Navbar, Footer
- **Tahap 2**: Halaman Beranda lengkap
- **Tahap 3**: Halaman Profil
- **Tahap 4**: Halaman Layanan (9 poli)
- **Tahap 5**: Berita (daftar, filter kategori, detail, berita terkait)
- **Tahap 6**: Galeri (Foto + Video, filter kategori, lightbox)
- **Tahap 7**: Download (SOP, SK, Formulir, Dokumen Publik — filter + pencarian)
- **Tahap 8**: Survey Kepuasan Masyarakat (QR Code + link Google Form)
- **Tahap 9**: Pengaduan (form terhubung Supabase, mekanisme, WhatsApp QR, email)
- **Tahap 10**: Kontak (Google Maps, telepon, WhatsApp, email, jam pelayanan)
- **Tahap 11**: Panel Admin (login Supabase Auth, dashboard, CRUD semua modul)

## Menjalankan Proyek

```bash
# 1. Install dependencies
npm install

# 2. Salin file environment lalu isi kredensial Supabase
cp .env.local.example .env.local

# 3. Jalankan development server
npm run dev
```

Situs publik: http://localhost:3000
Panel Admin: http://localhost:3000/admin/login

## Deploy ke GitHub + Cloudflare Pages

Lihat **[DEPLOY.md](./DEPLOY.md)** untuk panduan lengkap push ke GitHub dan
menyambungkannya ke Cloudflare Pages (termasuk pengaturan `nodejs_compat` yang wajib
untuk Supabase).

## Menyiapkan Supabase untuk Panel Admin

1. Buat project di https://supabase.com, salin `Project URL` & `anon public key` ke `.env.local`.
2. Buka **SQL Editor** di dashboard Supabase, jalankan seluruh isi file `sql/schema.sql`
   (membuat semua tabel + Row Level Security).
3. Buka **Authentication > Users**, klik **Add user**, buat akun admin (email + password).
   Akun inilah yang dipakai untuk login di `/admin/login`.
4. Jalankan `npm run dev`, login ke `/admin/login` dengan akun tersebut.

> Catatan: kebijakan RLS di `sql/schema.sql` mengizinkan **semua** pengguna yang berhasil
> login (authenticated) untuk mengelola semua data — cocok untuk tim kecil. Jika perlu
> pembagian peran admin, sesuaikan kebijakan RLS di bagian akhir file tersebut.

## Struktur Folder

```
puskesmas-lambuya/
├── app/
│   ├── layout.tsx              # Root layout: hanya <html>/<body>, font, metadata
│   ├── (site)/                 # Route group: semua halaman PUBLIK (pakai Navbar+Footer)
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Beranda
│   │   ├── profil/
│   │   ├── layanan/
│   │   ├── informasi/berita/
│   │   ├── galeri/
│   │   ├── download/
│   │   ├── survey/
│   │   ├── pengaduan/
│   │   └── kontak/
│   ├── admin/
│   │   ├── login/                # Halaman login (TANPA Navbar/Footer/Sidebar)
│   │   └── (dashboard)/          # Route group: semua halaman admin (pakai Sidebar)
│   │       ├── layout.tsx          # Cek sesi + render AdminSidebar
│   │       ├── page.tsx             # Dashboard overview (stat cards)
│   │       ├── [module]/            # List generik utk 10 modul CRUD (lihat lib/admin/modules.ts)
│   │       │   ├── page.tsx           # Daftar data
│   │       │   ├── baru/page.tsx      # Form tambah data
│   │       │   └── [id]/page.tsx      # Form edit + hapus data
│   │       ├── kontak/page.tsx      # Pengaturan Kontak (bukan CRUD, 1 baris data)
│   │       ├── survey/page.tsx      # Pengaturan Survey (bukan CRUD, 1 baris data)
│   │       └── pengaduan/page.tsx   # Inbox pengaduan + ubah status
│   └── globals.css
├── components/
│   ├── layout/                 # Navbar, Footer (situs publik)
│   ├── ui/                     # PageHeader, SectionHeading (dipakai semua halaman)
│   ├── admin/                  # AdminSidebar, DataTable, CrudForm, StatCard, dll.
│   ├── home/ profil/ layanan/ berita/ galeri/ download/ survey/ pengaduan/ kontak/
├── lib/
│   ├── constants.ts            # Data situs & menu navigasi
│   ├── utils.ts
│   ├── data/                   # Data contoh per fitur (home, berita, galeri, download, survey)
│   ├── admin/
│   │   ├── modules.ts            # Registry konfigurasi 10 modul CRUD admin
│   │   └── actions.ts             # Server Actions generik (create/update/delete/logout)
│   └── supabase/
│       ├── client.ts            # Supabase client (browser)
│       └── server.ts            # Supabase client (server)
├── types/                      # Tipe data per fitur + types/admin.ts
├── sql/
│   └── schema.sql               # Definisi semua tabel Supabase + Row Level Security
├── middleware.ts                # Lindungi semua rute /admin/* kecuali /admin/login
├── public/images/
├── .env.local.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Menambah Modul Admin Baru

Karena modul CRUD (Slider, Berita, Pengumuman, Artikel, Pegawai, Struktur Organisasi,
Jadwal Pelayanan, Dokumen, Galeri Foto, Galeri Video) dilayani oleh SATU rute dinamis
`app/admin/(dashboard)/[module]/...`, menambah modul baru **tidak perlu file baru**:

1. Buat tabel baru di Supabase (lihat pola di `sql/schema.sql`).
2. Tambahkan satu entri konfigurasi di `lib/admin/modules.ts` (field, kolom daftar, urutan).
3. Tambahkan link menu di `components/admin/AdminSidebar.tsx`.

## Catatan

- Kredensial Supabase didapat dari **Project Settings > API** pada dashboard Supabase.
- `next.config.js` mengatur `images.unoptimized = true` karena Cloudflare Pages belum mendukung
  Next.js Image Optimization Server secara native.
- Kontak & Survey di situs publik (`app/(site)/kontak`, `app/(site)/survey`) masih membaca data
  statis dari `lib/constants.ts` / `lib/data/survey.ts`. Pengaturan yang diubah lewat Panel Admin
  tersimpan di Supabase (`site_settings`, `survey_settings`), tapi menghubungkan halaman publik
  agar membaca langsung dari Supabase adalah langkah lanjutan yang disarankan (ganti data statis
  dengan query Supabase di komponen/halaman terkait).
