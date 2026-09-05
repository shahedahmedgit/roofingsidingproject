import { processSteps } from "@/data/site";
import { SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section className="bg-bone py-24 sm:py-32">
      <div className="shell">
        <SectionHead
          eyebrow="How It Works"
          align="center"
          title={
            <>
              Three simple <span className="text-primary">steps</span>.
            </>
          }
          copy="No guesswork, no pressure — just a clear path from first call to finished exterior."
        />

        <ol className="relative mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.num}
              delay={i * 110}
              className="bg-background p-8 lg:p-10"
            >
              <span className="num-plate text-5xl text-border">{step.num}</span>
              <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-[0.08em] text-foreground">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
              <span className="mt-8 block h-[3px] w-11 bg-primary" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
