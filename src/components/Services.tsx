import { services } from "@/data/site";
import { ActionLink, SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Our Services"
            title={
              <>
                Complete exterior work for <span className="text-primary">Nova Scotia</span> homes.
              </>
            }
            copy="Roofing, siding and exterior upgrades handled end to end — planned carefully, priced clearly, finished cleanly."
          />
          <ActionLink to="/services" variant="outline">
            All Services
          </ActionLink>
        </div>

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              as="article"
              key={service.num}
              delay={(i % 3) * 90}
              className="group bg-background p-8 transition-colors duration-500 hover:bg-card lg:p-10"
            >
              <div className="overflow-hidden rounded-xs">
                <img
                  src={service.image}
                  alt={service.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="mt-7 flex items-baseline justify-between gap-4">
                <h3 className="text-xl text-foreground sm:text-2xl">{service.title}</h3>
                <span className="num-plate shrink-0 text-lg text-border transition-colors duration-500 group-hover:text-primary">
                  {service.num}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
