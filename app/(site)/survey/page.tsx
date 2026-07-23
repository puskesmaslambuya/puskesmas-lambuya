import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SurveyCard from "@/components/survey/SurveyCard";
import SurveySteps from "@/components/survey/SurveySteps";

export const metadata: Metadata = {
  title: "Survey Kepuasan Masyarakat",
  description:
    "Isi Survey Kepuasan Masyarakat (SKM) Puskesmas Lambuya melalui kode QR atau link survey.",
};

export default function SurveyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partisipasi Masyarakat"
        title="Survey Kepuasan Masyarakat"
        description="Penilaian Anda membantu kami terus meningkatkan kualitas pelayanan kesehatan di Puskesmas Lambuya."
      />
      <section className="section-y">
        <div className="container-page grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SurveyCard />
          <SurveySteps />
        </div>
      </section>
    </>
  );
}
