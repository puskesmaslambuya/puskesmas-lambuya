"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Squares2X2Icon,
  PhotoIcon,
  NewspaperIcon,
  MegaphoneIcon,
  BookOpenIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  DocumentArrowDownIcon,
  FilmIcon,
  MapPinIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleLeftEllipsisIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { logoutAction } from "@/lib/admin/actions";

const NAV_GROUPS = [
  {
    title: "Umum",
    items: [{ href: "/admin", label: "Dashboard", icon: Squares2X2Icon }],
  },
  {
    title: "Konten Beranda",
    items: [{ href: "/admin/slider", label: "Slider / Banner", icon: PhotoIcon }],
  },
  {
    title: "Informasi",
    items: [
      { href: "/admin/berita", label: "Berita", icon: NewspaperIcon },
      { href: "/admin/pengumuman", label: "Pengumuman", icon: MegaphoneIcon },
      { href: "/admin/artikel", label: "Artikel Kesehatan", icon: BookOpenIcon },
    ],
  },
  {
    title: "Profil",
    items: [
      { href: "/admin/pegawai", label: "Pegawai", icon: UserGroupIcon },
      {
        href: "/admin/struktur-organisasi",
        label: "Struktur Organisasi",
        icon: BuildingOffice2Icon,
      },
      { href: "/admin/jadwal-pelayanan", label: "Jadwal Pelayanan", icon: CalendarDaysIcon },
    ],
  },
  {
    title: "Media & Dokumen",
    items: [
      { href: "/admin/dokumen", label: "Dokumen", icon: DocumentArrowDownIcon },
      { href: "/admin/galeri-foto", label: "Galeri Foto", icon: PhotoIcon },
      { href: "/admin/galeri-video", label: "Galeri Video", icon: FilmIcon },
    ],
  },
  {
    title: "Interaksi Masyarakat",
    items: [
      { href: "/admin/survey", label: "Survey", icon: ClipboardDocumentCheckIcon },
      { href: "/admin/pengaduan", label: "Pengaduan", icon: ChatBubbleLeftEllipsisIcon },
      { href: "/admin/kontak", label: "Kontak", icon: MapPinIcon },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="flex items-center gap-3 border-b border-slate-100 p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
          PL
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-slate-900">Panel Admin</p>
          <p className="text-xs text-slate-400">Puskesmas Lambuya</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        {NAV_GROUPS.map((group) => (
          <div key={group.title} className="mb-5">
            <p className="mb-1.5 px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              {group.title}
            </p>
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary-50 text-primary-dark"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <form action={logoutAction} className="border-t border-slate-100 p-4">
        <button
          type="submit"
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          Keluar
        </button>
      </form>
    </aside>
  );
}
