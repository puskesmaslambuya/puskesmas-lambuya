# Panduan Deploy — GitHub & Cloudflare Pages

Repo Git di dalam folder proyek ini **sudah diinisialisasi dan sudah ada 1 commit awal**
("Tahap 1-11: website + panel admin lengkap"). Kamu tinggal hubungkan ke GitHub lalu
sambungkan ke Cloudflare Pages.

## 1. Push ke GitHub

1. Buat repository baru (kosong, tanpa README/gitignore) di https://github.com/new
   Contoh nama: `puskesmas-lambuya`.
2. Di terminal, masuk ke folder proyek ini, lalu jalankan:

   ```bash
   git remote add origin https://github.com/USERNAME/puskesmas-lambuya.git
   git branch -M main
   git push -u origin main
   ```

   Ganti `USERNAME` dengan username GitHub kamu. Jika diminta login, gunakan
   Personal Access Token (bukan password) — buat di
   GitHub > Settings > Developer settings > Personal access tokens.

3. Setelah berhasil, refresh halaman repo di GitHub — semua file proyek harus sudah muncul.

> Untuk perubahan berikutnya, cukup `git add -A && git commit -m "pesan"` lalu `git push`.

## 2. Hubungkan ke Cloudflare Pages

1. Buka https://dash.cloudflare.com > **Workers & Pages** > **Create application** >
   tab **Pages** > **Connect to Git**.
2. Pilih repo `puskesmas-lambuya` yang baru di-push, klik **Begin setup**.
3. Isi **Build settings**:

   | Setting | Nilai |
   |---|---|
   | Framework preset | Next.js |
   | Build command | `npx @cloudflare/next-on-pages@1` |
   | Build output directory | `.vercel/output/static` |
   | Root directory | `/` (atau path ke folder `puskesmas-lambuya` jika repo berisi folder lain) |

4. Isi **Environment variables** (klik "Add variable", tambahkan untuk **Production** dan **Preview**):

   | Nama | Nilai |
   |---|---|
   | `NEXT_PUBLIC_SUPABASE_URL` | URL project Supabase kamu |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | anon public key Supabase kamu |
   | `NEXT_PUBLIC_SITE_URL` | URL domain akhir, mis. `https://puskesmaslambuya.pages.dev` |
   | `NODE_VERSION` | `20` |

5. Klik **Save and Deploy**. Tunggu proses build selesai (±2-4 menit).

## 3. Aktifkan `nodejs_compat` (WAJIB)

Supabase client memakai sebagian API Node.js, jadi flag ini wajib aktif:

1. Di halaman project Cloudflare Pages kamu > **Settings** > **Functions**.
2. Di bagian **Compatibility flags**, tambahkan `nodejs_compat` untuk **Production**
   dan **Preview**.
3. Set **Compatibility date** minimal `2024-09-23` (samakan dengan `wrangler.toml`).
4. Redeploy (Deployments > pilih deployment terakhir > **Retry deployment**) agar flag aktif.

> `wrangler.toml` di proyek ini sudah memuat pengaturan yang sama — berguna kalau kamu
> deploy manual lewat CLI Wrangler (`npx wrangler pages deploy .vercel/output/static`),
> tapi setting di dashboard (langkah di atas) tetap wajib untuk deploy via Git.

## 4. Setelah live

- Buka `https://<nama-project>.pages.dev` — situs publik harus tampil normal.
- Buka `https://<nama-project>.pages.dev/admin/login` — login pakai akun admin Supabase
  yang sudah kamu buat sebelumnya.
- Kalau punya domain sendiri (mis. `puskesmaslambuya.go.id`), tambahkan di
  **Custom domains** pada project Cloudflare Pages, lalu arahkan DNS sesuai instruksi
  yang ditampilkan.

## Build lokal untuk uji coba (opsional, sebelum push)

Untuk mensimulasikan build Cloudflare Pages di komputer sendiri:

```bash
npm install
npm run pages:build
npm run preview
```

`npm run preview` menjalankan hasil build lewat Wrangler secara lokal — kalau ini
jalan tanpa error, build di Cloudflare Pages kemungkinan besar juga akan berhasil.

## Troubleshooting umum

- **Error terkait `edge runtime` / Node API tidak didukung**: pastikan semua halaman
  yang memanggil `createSupabaseServerClient` sudah punya `export const runtime = "edge";`
  (sudah ditambahkan di semua halaman `/admin/**` pada proyek ini).
- **Middleware tidak jalan / redirect ke login tidak terjadi**: cek environment variable
  Supabase sudah benar di Cloudflare Pages, dan flag `nodejs_compat` sudah aktif.
- **Gambar tidak muncul**: pastikan `next.config.js` tetap punya `images.unoptimized: true`.
