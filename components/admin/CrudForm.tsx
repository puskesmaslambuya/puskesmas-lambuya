import type { AdminFieldConfig, AdminRecord } from "@/types/admin";

type CrudFormProps = {
  fields: AdminFieldConfig[];
  initialValues?: AdminRecord;
  action: (formData: FormData) => void | Promise<void>;
  submitLabel: string;
};

/**
 * Form generik yang dipakai untuk membuat & mengedit data di semua modul admin.
 * Field dirender otomatis berdasarkan konfigurasi di lib/admin/modules.ts.
 */
export default function CrudForm({ fields, initialValues, action, submitLabel }: CrudFormProps) {
  return (
    <form action={action} className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
      {fields.map((field) => {
        const currentValue = initialValues?.[field.name];

        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-slate-700">
              {field.label}
              {field.required && <span className="text-red-500"> *</span>}
            </label>

            {field.type === "textarea" && (
              <textarea
                id={field.name}
                name={field.name}
                rows={4}
                required={field.required}
                placeholder={field.placeholder}
                defaultValue={currentValue !== undefined && currentValue !== null ? String(currentValue) : ""}
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            )}

            {field.type === "select" && (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                defaultValue={currentValue !== undefined && currentValue !== null ? String(currentValue) : ""}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="" disabled>
                  Pilih {field.label}
                </option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}

            {field.type === "boolean" && (
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  id={field.name}
                  name={field.name}
                  defaultChecked={Boolean(currentValue)}
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/40"
                />
                Aktif / Tampilkan
              </label>
            )}

            {(field.type === "text" || field.type === "number" || field.type === "date") && (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                defaultValue={currentValue !== undefined && currentValue !== null ? String(currentValue) : ""}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            )}

            {field.helpText && <p className="mt-1.5 text-xs text-slate-400">{field.helpText}</p>}
          </div>
        );
      })}

      <button type="submit" className="btn-primary mt-1 w-fit">
        {submitLabel}
      </button>
    </form>
  );
}
