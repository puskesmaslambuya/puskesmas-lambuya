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
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Informasi kontak, lokasi, dan jam pelayanan Puskesmas Lambuya.",
};

export default function KontakPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hubungi Kami"
        title="Kontak"
        description="Kunjungi, hubungi, atau kirim pesan kepada kami melalui informasi berikut."
      />

      <section className="section-y">
        <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Google Maps */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card lg:col-span-3">
            <iframe
              src={SITE_CONFIG.mapsEmbedUrl}
              title="Lokasi Puskesmas Lambuya"
              className="h-[360px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info kontak */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <KontakInfoItem icon={MapPinIcon} label="Alamat" value={SITE_CONFIG.address} />
            <KontakInfoItem
              icon={PhoneIcon}
              label="Telepon"
              value={SITE_CONFIG.phone}
              href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
            />
            <KontakInfoItem
              icon={ChatBubbleLeftRightIcon}
              label="WhatsApp"
              value={`+${SITE_CONFIG.whatsapp}`}
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            />
            <KontakInfoItem
              icon={EnvelopeIcon}
              label="Email"
              value={SITE_CONFIG.email}
              href={`mailto:${SITE_CONFIG.email}`}
            />

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <ClockIcon className="h-4 w-4" />
                Jam Pelayanan
              </div>
              <ul className="mt-2 flex flex-col gap-1.5">
                {SITE_CONFIG.operationalHours.map((jam) => (
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
