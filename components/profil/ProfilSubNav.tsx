"use client";

const SECTIONS = [
  { id: "sejarah", label: "Sejarah" },
  { id: "visi-misi", label: "Visi & Misi" },
  { id: "motto", label: "Motto" },
  { id: "maklumat-pelayanan", label: "Maklumat Pelayanan" },
  { id: "struktur-organisasi", label: "Struktur Organisasi" },
  { id: "sdm", label: "SDM" },
  { id: "wilayah-kerja", label: "Wilayah Kerja" },
  { id: "akreditasi", label: "Akreditasi" },
];

export default function ProfilSubNav() {
  return (
    <nav
      aria-label="Navigasi bagian profil"
      className="sticky top-[68px] z-30 overflow-x-auto border-b border-slate-100 bg-white/95 backdrop-blur md:top-[96px]"
    >
      <ul className="container-page flex min-w-max items-center gap-1 py-2.5 text-sm">
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block whitespace-nowrap rounded-lg px-3 py-1.5 font-medium text-slate-600
                transition-colors hover:bg-primary-50 hover:text-primary-dark"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
