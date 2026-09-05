import { Play } from "lucide-react";
import { reels } from "@/data/site";
import { ActionLink, SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export function ReelsSection() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="On Site"
            tone="dark"
            title={
              <>
                Watch the work <span className="text-primary">in motion</span>.
              </>
            }
            copy="Short clips from active roofing and siding job sites."
          />
          <ActionLink to="/reels" variant="ghostLight">
            All Reels
          </ActionLink>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reels.map((reel, i) => (
            <Reveal as="article" key={reel.num} delay={i * 90}>
              <div className="relative aspect-[9/16] overflow-hidden rounded-xs border border-ink-line bg-ink-soft">
                {reel.embedUrl ? (
                  <iframe
                    src={reel.embedUrl}
                    title={reel.title}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-ink-line text-primary transition-transform duration-500 hover:scale-105">
                      <Play className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-[0.625rem] uppercase tracking-[0.24em] text-on-ink-muted">
                      {reel.label} — Coming Soon
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-on-ink">
                  {reel.title}
                </h3>
                <span className="num-plate text-lg text-ink-line">{reel.num}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
