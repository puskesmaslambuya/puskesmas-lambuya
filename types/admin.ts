export type AdminFieldType = "text" | "textarea" | "number" | "date" | "boolean" | "select";

export type AdminFieldOption = {
  label: string;
  value: string;
};

export type AdminFieldConfig = {
  /** Harus sama persis dengan nama kolom di tabel Supabase. */
  name: string;
  label: string;
  type: AdminFieldType;
  required?: boolean;
  placeholder?: string;
  /** Wajib diisi jika type === "select". */
  options?: AdminFieldOption[];
  helpText?: string;
};

export type AdminModuleConfig = {
  /** Dipakai di URL: /admin/[slug] */
  slug: string;
  label: string;
  description: string;
  /** Nama tabel di Supabase. */
  table: string;
  fields: AdminFieldConfig[];
  /** Nama field yang ditampilkan sebagai kolom di tabel daftar (selain "Aksi"). */
  listColumns: string[];
  orderBy: { column: string; ascending?: boolean };
};

export type AdminRecord = Record<string, string | number | boolean | null> & { id: string };
