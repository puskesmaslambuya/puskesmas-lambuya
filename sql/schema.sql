-- =====================================================================
-- SKEMA SUPABASE — Website Puskesmas Lambuya
-- Jalankan file ini di Supabase Dashboard > SQL Editor.
-- Asumsi: akun admin dibuat lewat Supabase Auth (Authentication > Users),
-- dan SEMUA pengguna yang berhasil login (authenticated) adalah admin.
-- Jika nanti ada peran lain, sesuaikan kebijakan RLS di bagian bawah.
-- =====================================================================

-- ---------- SLIDER / BANNER BERANDA ----------
create table if not exists slider (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subtitle text,
  image_url text not null,
  link_url text,
  urutan integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- ---------- BERITA ----------
create table if not exists berita (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null,
  excerpt text not null,
  content text not null,
  cover_url text,
  published_at date not null default current_date,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

-- ---------- PENGUMUMAN ----------
create table if not exists pengumuman (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  tanggal date not null default current_date,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- ---------- ARTIKEL KESEHATAN ----------
create table if not exists artikel (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  excerpt text not null,
  content text not null,
  cover_url text,
  published_at date not null default current_date,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

-- ---------- PEGAWAI ----------
create table if not exists pegawai (
  id uuid primary key default gen_random_uuid(),
  nama text not null,
  jabatan text not null,
  unit text,
  foto_url text,
  urutan integer not null default 0,
  created_at timestamptz not null default now()
);

-- ---------- STRUKTUR ORGANISASI ----------
create table if not exists struktur_organisasi (
  id uuid primary key default gen_random_uuid(),
  nama text not null,
  jabatan text not null,
  urutan integer not null default 0,
  foto_url text,
  created_at timestamptz not null default now()
);

-- ---------- JADWAL PELAYANAN ----------
create table if not exists jadwal_pelayanan (
  id uuid primary key default gen_random_uuid(),
  poli text not null,
  hari text not null,
  jam_mulai text not null,
  jam_selesai text not null,
  keterangan text,
  created_at timestamptz not null default now()
);

-- ---------- DOKUMEN (SOP, SK, Formulir, Dokumen Publik) ----------
create table if not exists dokumen (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  description text,
  file_type text not null,
  file_size text,
  file_url text not null,
  tanggal date not null default current_date,
  created_at timestamptz not null default now()
);

-- ---------- GALERI FOTO ----------
create table if not exists galeri_foto (
  id uuid primary key default gen_random_uuid(),
  caption text not null,
  category text not null,
  tanggal date not null default current_date,
  image_url text not null,
  created_at timestamptz not null default now()
);

-- ---------- GALERI VIDEO ----------
create table if not exists galeri_video (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  tanggal date not null default current_date,
  youtube_id text not null,
  created_at timestamptz not null default now()
);

-- ---------- PENGADUAN ----------
create table if not exists pengaduan (
  id uuid primary key default gen_random_uuid(),
  nama text not null,
  kontak text not null,
  category text not null,
  message text not null,
  status text not null default 'Baru',
  created_at timestamptz not null default now()
);

-- ---------- PENGATURAN KONTAK (baris tunggal, id selalu 1) ----------
create table if not exists site_settings (
  id integer primary key default 1,
  address text,
  phone text,
  whatsapp text,
  email text,
  maps_embed_url text,
  operational_hours text
);

-- ---------- PENGATURAN SURVEY (baris tunggal, id selalu 1) ----------
create table if not exists survey_settings (
  id integer primary key default 1,
  google_form_url text
);

-- =====================================================================
-- ROW LEVEL SECURITY
-- =====================================================================
alter table slider enable row level security;
alter table berita enable row level security;
alter table pengumuman enable row level security;
alter table artikel enable row level security;
alter table pegawai enable row level security;
alter table struktur_organisasi enable row level security;
alter table jadwal_pelayanan enable row level security;
alter table dokumen enable row level security;
alter table galeri_foto enable row level security;
alter table galeri_video enable row level security;
alter table pengaduan enable row level security;
alter table site_settings enable row level security;
alter table survey_settings enable row level security;

-- Publik boleh MEMBACA seluruh konten (situs publik tidak butuh login)
create policy "public read" on slider for select using (true);
create policy "public read" on berita for select using (true);
create policy "public read" on pengumuman for select using (true);
create policy "public read" on artikel for select using (true);
create policy "public read" on pegawai for select using (true);
create policy "public read" on struktur_organisasi for select using (true);
create policy "public read" on jadwal_pelayanan for select using (true);
create policy "public read" on dokumen for select using (true);
create policy "public read" on galeri_foto for select using (true);
create policy "public read" on galeri_video for select using (true);
create policy "public read" on site_settings for select using (true);
create policy "public read" on survey_settings for select using (true);

-- Publik boleh MENGIRIM pengaduan (insert), tapi tidak boleh membaca/mengubah punya orang lain
create policy "public insert pengaduan" on pengaduan for insert with check (true);

-- Admin (authenticated) boleh melakukan semua operasi pada semua tabel
create policy "admin full access" on slider for all using (auth.role() = 'authenticated');
create policy "admin full access" on berita for all using (auth.role() = 'authenticated');
create policy "admin full access" on pengumuman for all using (auth.role() = 'authenticated');
create policy "admin full access" on artikel for all using (auth.role() = 'authenticated');
create policy "admin full access" on pegawai for all using (auth.role() = 'authenticated');
create policy "admin full access" on struktur_organisasi for all using (auth.role() = 'authenticated');
create policy "admin full access" on jadwal_pelayanan for all using (auth.role() = 'authenticated');
create policy "admin full access" on dokumen for all using (auth.role() = 'authenticated');
create policy "admin full access" on galeri_foto for all using (auth.role() = 'authenticated');
create policy "admin full access" on galeri_video for all using (auth.role() = 'authenticated');
create policy "admin full access" on pengaduan for all using (auth.role() = 'authenticated');
create policy "admin full access" on site_settings for all using (auth.role() = 'authenticated');
create policy "admin full access" on survey_settings for all using (auth.role() = 'authenticated');
