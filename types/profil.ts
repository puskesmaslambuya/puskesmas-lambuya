export type MisiItem = {
  id: string;
  text: string;
};

export type MaklumatItem = {
  id: string;
  text: string;
};

export type StrukturNode = {
  id: string;
  name: string;
  role: string;
  children?: StrukturNode[];
};

export type SdmCategory = {
  id: string;
  label: string;
  count: number;
};

export type WilayahDesa = {
  id: string;
  name: string;
  jarakKm: number;
};

export type AkreditasiInfo = {
  status: string;
  tahun: string;
  nomorSertifikat: string;
  masaBerlaku: string;
};
