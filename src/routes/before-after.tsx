import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { beforeAfter } from "@/data/site";
import { SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

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

function Slider({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-xs"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX);
      }}
    >
      <img
        src={after}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before}
        alt={beforeAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="pointer-events-none absolute inset-y-0 w-px bg-primary" style={{ left: `${pos}%` }} />
      <span
        className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xs bg-primary px-3 py-2 font-display text-[0.625rem] font-bold uppercase tracking-[0.16em] text-primary-foreground"
        style={{ left: `${pos}%` }}
      >
        Drag
      </span>
      <span className="pointer-events-none absolute bottom-4 left-4 bg-ink/80 px-3 py-1.5 text-[0.625rem] uppercase tracking-[0.2em] text-on-ink">
        Before
      </span>
      <span className="pointer-events-none absolute bottom-4 right-4 bg-ink/80 px-3 py-1.5 text-[0.625rem] uppercase tracking-[0.2em] text-on-ink">
        After
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="sr-only"
      />
    </div>
  );
}

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
              <Slider
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
