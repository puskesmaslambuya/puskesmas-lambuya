import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getAdminModule } from "@/lib/admin/modules";
import { crudCreate } from "@/lib/admin/actions";
import CrudForm from "@/components/admin/CrudForm";

// Wajib untuk Cloudflare Pages (lihat wrangler.toml)
export const runtime = "edge";

type PageProps = {
  params: { module: string };
};

export default function AdminModuleCreatePage({ params }: PageProps) {
  const config = getAdminModule(params.module);
  if (!config) notFound();

  const action = crudCreate.bind(null, config.table, config.fields, `/admin/${config.slug}`);

  return (
    <div>
      <Link
        href={`/admin/${config.slug}`}
        className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-primary-dark"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Kembali ke {config.label}
      </Link>

      <h1 className="mt-3 text-2xl font-semibold text-slate-900">Tambah {config.label}</h1>

      <div className="mt-6 max-w-2xl">
        <CrudForm fields={config.fields} action={action} submitLabel="Simpan Data" />
      </div>
    </div>
  );
}
