import type { Metadata } from "next";
import {
  MapPinIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import PageHeader from "@/components/ui/PageHeader";
import KontakInfoItem from "@/components/kontak/KontakInfoItem";
import { getKontakData } from "@/lib/data/kontak-server";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Informasi kontak, lokasi, dan jam pelayanan Puskesmas Lambuya.",
};

// Halaman ini butuh data terbaru dari Supabase setiap kali dibuka.
export const dynamic = "force-dynamic";
export const runtime = "edge";

export default async function KontakPage() {
  const { address, phone, whatsapp, email, mapsEmbedUrl, operationalHours } =
    await getKontakData();

  return (
    <>
      <PageHeader
        eyebrow="Hubungi Kami"
        title="Kontak"
        description="Kunjungi, hubungi, atau kirim pesan kepada kami melalui informasi berikut."
      />

      <section className="section-y">
        <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card lg:col-span-3">
            <iframe
              src={mapsEmbedUrl}
              title="Lokasi Puskesmas Lambuya"
              className="h-[360px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-3 lg:col-span-2">
            <KontakInfoItem icon={MapPinIcon} label="Alamat" value={address} />
            <KontakInfoItem
              icon={PhoneIcon}
              label="Telepon"
              value={phone}
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
            />
            <KontakInfoItem
              icon={ChatBubbleLeftRightIcon}
              label="WhatsApp"
              value={`+${whatsapp}`}
              href={`https://wa.me/${whatsapp}`}
            />
            <KontakInfoItem
              icon={EnvelopeIcon}
              label="Email"
              value={email}
              href={`mailto:${email}`}
            />

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <ClockIcon className="h-4 w-4" />
                Jam Pelayanan
              </div>
              <ul className="mt-2 flex flex-col gap-1.5">
                {operationalHours.map((jam) => (
                  <li
                    key={jam.day}
                    className="flex items-center justify-between text-sm text-slate-700"
                  >
                    <span>{jam.day}</span>
                    <span className="font-medium">{jam.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
