import SectionHeading from "@/components/ui/SectionHeading";
import { STRUKTUR_ORGANISASI } from "@/lib/data/profil";
import type { StrukturNode } from "@/types/profil";

function OrgCard({ node, highlight = false }: { node: StrukturNode; highlight?: boolean }) {
  return (
    <div
      className={
        highlight
          ? "rounded-xl bg-primary px-4 py-3 text-center text-white shadow-card"
          : "rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm"
      }
    >
      <p className={highlight ? "text-sm font-semibold" : "text-sm font-semibold text-slate-900"}>
        {node.name}
      </p>
      <p className={highlight ? "text-xs text-white/80" : "text-xs text-slate-500"}>
        {node.role}
      </p>
    </div>
  );
}

export default function StrukturOrganisasiSection() {
  const kepala = STRUKTUR_ORGANISASI;
  const koordinatorUtama = kepala.children ?? [];

  return (
    <section id="struktur-organisasi" className="scroll-mt-36 section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Organisasi"
          title="Struktur Organisasi"
          description="Susunan organisasi Puskesmas Lambuya dalam menjalankan tugas pokok dan fungsi pelayanan kesehatan."
        />

        <div className="mt-10 overflow-x-auto">
          <div className="min-w-[720px]">
            {/* Level 1: Kepala Puskesmas */}
            <div className="mx-auto w-72">
              <OrgCard node={kepala} highlight />
            </div>

            {/* Garis penghubung */}
            <div className="mx-auto h-6 w-px bg-slate-300" />

            {/* Level 2: Koordinator utama */}
            <div className="grid grid-cols-3 gap-4">
              {koordinatorUtama.map((unit) => (
                <div key={unit.id} className="flex flex-col items-center">
                  <div className="h-6 w-px bg-slate-300" />
                  <div className="w-full">
                    <OrgCard node={unit} />
                  </div>

                  {/* Level 3: sub-unit */}
                  {unit.children && (
                    <div className="mt-4 flex w-full flex-col gap-2">
                      {unit.children.map((sub) => (
                        <div key={sub.id} className="rounded-lg border border-dashed border-slate-200 bg-surface-muted px-3 py-2 text-center">
                          <p className="text-xs font-medium text-slate-700">{sub.role}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
