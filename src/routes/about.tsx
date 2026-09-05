import { createFileRoute } from "@tanstack/react-router";
import { business, images, processSteps, whyPoints } from "@/data/site";
import { ActionLink, SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Our Nova Scotia Crew | 902 Roofing & Siding" },
      {
        name: "description",
        content:
          "902 Roofing & Siding is a local Nova Scotia team delivering high-quality residential roofing and siding at competitive prices.",
      },
      { property: "og:title", content: "About | 902 Roofing & Siding" },
      {
        property: "og:description",
        content: "Local Nova Scotia roofing and siding professionals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-40 sm:pt-48">
        <div className="shell">
          <SectionHead
            eyebrow="Who We Are"
            tone="dark"
            title={
              <>
                Local professionals who <span className="text-primary">answer the phone</span>.
              </>
            }
            copy={business.tagline}
          />
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={images.crew}
              alt="Roofing crew installing shingles on a Nova Scotia home"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-xs object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="max-w-lg">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] text-foreground">
                Built on careful work and clear pricing.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We work with homeowners across Nova Scotia on roof replacements, repairs and siding
                upgrades. Every project starts with a free assessment and a straightforward quote —
                no padded extras, no pressure.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Our crews take care of the details that matter long after the job ends: proper
                underlayment and flashing, clean edge lines, tidy sites and a full clean-up before we
                leave.
              </p>
              <div className="mt-10">
                <ActionLink to="/contact">Talk to Us</ActionLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="shell">
          <SectionHead eyebrow="Why Homeowners Choose Us" tone="dark" title="Four reasons that hold up." />
          <div className="mt-14 grid gap-px border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((point, i) => (
              <Reveal key={point.num} delay={i * 60}>
                <div className="h-full bg-ink p-8">
                  <span className="num-plate text-3xl text-primary">{point.num}</span>
                  <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-[0.08em] text-on-ink">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-on-ink-muted">{point.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <SectionHead eyebrow="How It Works" title="Three simple steps." />
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div className="border-t-2 border-primary pt-7">
                  <span className="num-plate text-4xl text-border">{step.num}</span>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-[0.06em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
