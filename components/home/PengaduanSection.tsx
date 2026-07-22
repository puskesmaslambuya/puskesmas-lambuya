import Link from "next/link";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";

const CHANNELS = [
  {
    icon: ChatBubbleLeftRightIcon,
    label: "WhatsApp",
    value: "Kirim pesan langsung ke Admin",
    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
  },
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: DocumentTextIcon,
    label: "Form Pengaduan Online",
    value: "Isi formulir pengaduan resmi",
    href: "/pengaduan",
  },
];

export default function PengaduanSection() {
  return (
    <section className="section-y bg-slate-900 text-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pengaduan"
          title="Sampaikan Keluhan & Masukan Anda"
          description="Kami terbuka terhadap kritik dan saran untuk perbaikan pelayanan. Sampaikan melalui salah satu kanal berikut."
          tone="dark"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CHANNELS.map((channel) => (
            <Link
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                <channel.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-heading text-base font-semibold">{channel.label}</p>
              <p className="mt-1 text-sm text-slate-400">{channel.value}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
