export type PengaduanKategori =
  | "Pelayanan"
  | "Sarana & Prasarana"
  | "Petugas"
  | "Administrasi"
  | "Lainnya";

export type PengaduanFormValues = {
  nama: string;
  kontak: string;
  category: PengaduanKategori;
  message: string;
};

export type MekanismeStep = {
  title: string;
  description: string;
};
