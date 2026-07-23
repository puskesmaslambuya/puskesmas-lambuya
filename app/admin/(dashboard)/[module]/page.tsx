import { notFound } from "next/navigation";
import { getAdminModule } from "@/lib/admin/modules";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import DataTable from "@/components/admin/DataTable";
import type { AdminRecord } from "@/types/admin";

// Wajib untuk Cloudflare Pages (lihat wrangler.toml)
export const runtime = "edge";

type PageProps = {
  params: { module: string };
};

export default async function AdminModuleListPage({ params }: PageProps) {
  const config = getAdminModule(params.module);
  if (!config) notFound();

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from(config.table)
    .select("*")
    .order(config.orderBy.column, { ascending: config.orderBy.ascending ?? true });

  const records = (error ? [] : (data as AdminRecord[])) ?? [];

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">{config.label}</h1>
        <p className="mt-1 text-sm text-slate-500">{config.description}</p>
      </div>

      {error && (
        <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
          Gagal memuat data dari tabel &ldquo;{config.table}&rdquo;: {error.message}. Pastikan
          tabel sudah dibuat sesuai sql/schema.sql.
        </p>
      )}

      <div className="mt-6">
        <DataTable
          moduleSlug={config.slug}
          moduleLabel={config.label}
          table={config.table}
          fields={config.fields}
          listColumns={config.listColumns}
          records={records}
        />
      </div>
    </div>
  );
}
