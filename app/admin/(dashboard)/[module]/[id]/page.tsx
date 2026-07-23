import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getAdminModule } from "@/lib/admin/modules";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { crudUpdate, crudDelete } from "@/lib/admin/actions";
import CrudForm from "@/components/admin/CrudForm";
import DeleteButton from "@/components/admin/DeleteButton";
import type { AdminRecord } from "@/types/admin";

// Wajib untuk Cloudflare Pages (lihat wrangler.toml)
export const runtime = "edge";

type PageProps = {
  params: { module: string; id: string };
};

export default async function AdminModuleEditPage({ params }: PageProps) {
  const config = getAdminModule(params.module);
  if (!config) notFound();

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from(config.table)
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !data) notFound();

  const updateAction = crudUpdate.bind(
    null,
    config.table,
    config.fields,
    params.id,
    `/admin/${config.slug}`
  );
  const deleteAction = crudDelete.bind(null, config.table, params.id, `/admin/${config.slug}`);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          href={`/admin/${config.slug}`}
          className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-primary-dark"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Kembali ke {config.label}
        </Link>
        <DeleteButton action={deleteAction} />
      </div>

      <h1 className="mt-3 text-2xl font-semibold text-slate-900">Edit {config.label}</h1>

      <div className="mt-6 max-w-2xl">
        <CrudForm
          fields={config.fields}
          initialValues={data as AdminRecord}
          action={updateAction}
          submitLabel="Simpan Perubahan"
        />
      </div>
    </div>
  );
}
