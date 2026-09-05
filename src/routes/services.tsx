import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/site";
import { ActionLink, SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Roofing & Siding Services | 902 Roofing & Siding" },
      {
        name: "description",
        content:
          "Residential roofing, roof replacement, repairs, siding and exterior upgrades across Nova Scotia. Free estimates from local professionals.",
      },
      { property: "og:title", content: "Roofing & Siding Services | 902 Roofing & Siding" },
      {
        property: "og:description",
        content: "Roofing, replacement, repairs and siding for Nova Scotia homes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-40 sm:pt-48">
        <div className="shell">
          <SectionHead
            eyebrow="What We Do"
            tone="dark"
            title={
              <>
                Exterior work done <span className="text-primary">properly</span>, the first time.
              </>
            }
            copy="From full roof systems to complete siding upgrades, every project is planned, priced and finished by a local Nova Scotia crew."
          />
        </div>
      </section>

      <section className="py-24">
        <div className="shell space-y-20">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 60}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="overflow-hidden rounded-xs">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                </figure>
                <div>
                  <span className="num-plate text-5xl text-border">{service.num}</span>
                  <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.75rem)] text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                    {service.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-8">
          <h2 className="max-w-xl text-[clamp(1.75rem,4vw,3rem)] text-foreground">
            Ready for a straightforward quote?
          </h2>
          <ActionLink to="/contact">Get a Free Quote</ActionLink>
        </div>
      </section>
    </>
  );
}
