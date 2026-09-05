import { beforeAfter } from "@/data/site";
import { ActionLink, SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { CompareSlider } from "@/components/CompareSlider";

export function BeforeAfterSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Before & After"
            title={
              <>
                Real homes, <span className="text-primary">transformed</span>.
              </>
            }
            copy="Drag across each photo to compare the original exterior with the finished work."
          />
          <ActionLink to="/before-after" variant="outline">
            View Transformations
          </ActionLink>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {beforeAfter.map((item, i) => (
            <Reveal key={item.num} delay={i * 90}>
              <CompareSlider
                before={item.before}
                after={item.after}
                beforeAlt={item.beforeAlt}
                afterAlt={item.afterAlt}
              />
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="text-xl text-foreground sm:text-2xl">{item.title}</h3>
                <span className="num-plate shrink-0 text-lg text-border">{item.num}</span>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
