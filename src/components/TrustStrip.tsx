import { trustPoints } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-background" aria-label="What we do">
      <div className="shell">
        <ul className="grid grid-cols-2 divide-border sm:grid-cols-3 lg:grid-cols-6">
          {trustPoints.map((point, i) => (
            <Reveal
              as="li"
              key={point}
              delay={i * 70}
              className="flex items-center gap-3 border-b border-border py-6 pr-4 sm:border-b-0 sm:py-8 lg:border-r lg:last:border-r-0"
            >
              <span className="num-plate shrink-0 text-xs text-primary">{`0${i + 1}`}</span>
              <span className="min-w-0 font-display text-[0.8125rem] font-semibold uppercase leading-tight tracking-[0.1em] text-foreground">
                {point}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
