import { createFileRoute } from "@tanstack/react-router";
import { beforeAfter } from "@/data/site";
import { SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { CompareSlider } from "@/components/CompareSlider";

export const Route = createFileRoute("/before-after")({
  head: () => ({
    meta: [
      { title: "Before & After Transformations | 902 Roofing & Siding" },
      {
        name: "description",
        content:
          "Drag to compare before and after photos of roof replacements and siding upgrades completed in Nova Scotia.",
      },
      { property: "og:title", content: "Before & After | 902 Roofing & Siding" },
      {
        property: "og:description",
        content: "Compare real roofing and siding transformations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BeforeAfterPage,
});

function BeforeAfterPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-40 sm:pt-48">
        <div className="shell">
          <SectionHead
            eyebrow="Before & After"
            tone="dark"
            title={
              <>
                See the <span className="text-primary">difference</span> up close.
              </>
            }
            copy="Slide across each photo to compare the original exterior with the finished result."
          />
        </div>
      </section>

      <section className="space-y-24 py-24">
        {beforeAfter.map((item, i) => (
          <Reveal key={item.num} delay={i * 80}>
            <div className="shell grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-16">
              <CompareSlider
                before={item.before}
                after={item.after}
                beforeAlt={item.beforeAlt}
                afterAlt={item.afterAlt}
              />
              <div>
                <span className="num-plate text-5xl text-border">{item.num}</span>
                <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.5rem)] text-foreground">
                  {item.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{item.copy}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
