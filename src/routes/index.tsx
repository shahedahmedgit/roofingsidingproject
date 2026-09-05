import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { ReelsSection } from "@/components/ReelsSection";
import { AboutIntro } from "@/components/AboutIntro";
import { Process } from "@/components/Process";
import { QuoteCTA } from "@/components/QuoteCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "902 Roofing & Siding | Nova Scotia Roofing & Siding" },
      {
        name: "description",
        content:
          "Residential roofing, roof replacement, repairs and siding across Nova Scotia. Quality workmanship, competitive pricing and free quotes from a local crew.",
      },
      { property: "og:title", content: "902 Roofing & Siding | Nova Scotia Roofing & Siding" },
      {
        property: "og:description",
        content:
          "Roofing and siding built to protect your home. Free quotes across Nova Scotia — call 902-476-8438.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <WhyChooseUs />
      <BeforeAfterSection />
      <ProjectsPreview />
      <ReelsSection />
      <AboutIntro />
      <Process />
      <QuoteCTA />
    </>
  );
}
