import { images, whyPoints } from "@/data/site";
import { ActionLink, SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export function WhyChooseUs() {
  return (
    <section className="bg-ink">
      <div className="grid lg:grid-cols-2">
        <Reveal variant="mask" className="relative min-h-[22rem] lg:min-h-full">
          <img
            src={images.crew}
            alt="Roofing crew installing new shingles on a Nova Scotia home"
            width={1400}
            height={1000}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/40" />
        </Reveal>

        <div className="px-5 py-20 md:px-10 lg:py-28 xl:px-16">
          <div className="max-w-xl">
            <SectionHead
              eyebrow="Why Choose Us"
              tone="dark"
              title={
                <>
                  A local crew you can <span className="text-primary">rely on</span>.
                </>
              }
            />

            <ul className="mt-12 divide-y divide-ink-line border-t border-ink-line">
              {whyPoints.map((point, i) => (
                <Reveal as="li" key={point.num} delay={i * 80} className="flex gap-6 py-7">
                  <span className="num-plate shrink-0 text-sm text-primary">{point.num}</span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold uppercase tracking-[0.1em] text-on-ink">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-on-ink-muted">{point.copy}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <div className="mt-12">
              <ActionLink to="/about" variant="ghostLight">
                About 902 Roofing
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
