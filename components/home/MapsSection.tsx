import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";

type MapsSectionProps = {
  address: string;
  phone: string;
  mapsEmbedUrl: string;
  jamLayananSingkat: string;
};

export default function MapsSection({
  address,
  phone,
  mapsEmbedUrl,
  jamLayananSingkat,
}: MapsSectionProps) {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Lokasi"
          title="Kunjungi Kami"
          description="Puskesmas Lambuya mudah dijangkau dari seluruh wilayah kecamatan."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_320px]">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-slate-100 shadow-card md:aspect-auto">
            <iframe
              src={mapsEmbedUrl}
              title="Lokasi Puskesmas Lambuya"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full"
            />
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-surface-muted p-6">
            <div className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Alamat</p>
                <p className="text-sm text-slate-600">{address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Telepon</p>
                <p className="text-sm text-slate-600">{phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Jam Layanan</p>
                <p className="text-sm text-slate-600">{jamLayananSingkat}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
