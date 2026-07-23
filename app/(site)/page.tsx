import HeroBanner from "@/components/home/HeroBanner";
import SambutanKepala from "@/components/home/SambutanKepala";
import LayananUnggulan from "@/components/home/LayananUnggulan";
import BeritaTerbaru from "@/components/home/BeritaTerbaru";
import JadwalPelayanan from "@/components/home/JadwalPelayanan";
import StatistikPuskesmas from "@/components/home/StatistikPuskesmas";
import GaleriPreview from "@/components/home/GaleriPreview";
import SurveyKepuasan from "@/components/home/SurveyKepuasan";
import PengaduanSection from "@/components/home/PengaduanSection";
import MapsSection from "@/components/home/MapsSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <SambutanKepala />
      <LayananUnggulan />
      <BeritaTerbaru />
      <JadwalPelayanan />
      <StatistikPuskesmas />
      <GaleriPreview />
      <SurveyKepuasan />
      <PengaduanSection />
      <MapsSection />
    </>
  );
}
