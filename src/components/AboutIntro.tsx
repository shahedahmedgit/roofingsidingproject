import { business, images } from "@/data/site";
import { ActionLink, SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export function AboutIntro() {
  return (
    <section className="py-24 sm:py-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="mask">
          <img
            src={images.siding}
            alt="Installer fitting new siding panels on a residential exterior"
            width={1400}
            height={1000}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-xs object-cover"
          />
        </Reveal>

        <Reveal delay={90}>
          <SectionHead
            eyebrow="About Us"
            title={
              <>
                Built on careful work and <span className="text-primary">straight answers</span>.
              </>
            }
            copy={`${business.name} is a residential roofing and siding company serving homeowners across ${business.area}. We keep crews small, standards high and quotes honest.`}
          />
          <dl className="mt-12 grid grid-cols-2 gap-px border border-border bg-border">
            <div className="bg-background p-6">
              <dt className="eyebrow text-primary">Focus</dt>
              <dd className="mt-3 font-display text-lg font-bold uppercase tracking-[0.06em] text-foreground">
                Residential Only
              </dd>
            </div>
            <div className="bg-background p-6">
              <dt className="eyebrow text-primary">Service Area</dt>
              <dd className="mt-3 font-display text-lg font-bold uppercase tracking-[0.06em] text-foreground">
                Nova Scotia
              </dd>
            </div>
          </dl>
          <div className="mt-10">
            <ActionLink to="/about" variant="outline">
              Read Our Story
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
