import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { reels } from "@/data/site";
import { SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/reels")({
  head: () => ({
    meta: [
      { title: "Project Reels | 902 Roofing & Siding" },
      {
        name: "description",
        content:
          "Short video walkthroughs of roofing and siding projects completed across Nova Scotia by 902 Roofing & Siding.",
      },
      { property: "og:title", content: "Project Reels | 902 Roofing & Siding" },
      { property: "og:description", content: "Video walkthroughs of our recent exterior projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReelsPage,
});

function ReelsPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-40 sm:pt-48">
        <div className="shell">
          <SectionHead
            eyebrow="On Site"
            tone="dark"
            title={
              <>
                Watch the work <span className="text-primary">in motion</span>.
              </>
            }
            copy="Short clips from active job sites across Nova Scotia."
          />
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-8 md:grid-cols-3">
          {reels.map((reel, i) => (
            <Reveal key={reel.num} delay={i * 70}>
              <article className="overflow-hidden rounded-xs border border-border">
                <div className="relative aspect-[9/16] bg-ink">
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
                      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-ink-line text-primary">
                        <Play className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="text-[0.625rem] uppercase tracking-[0.24em] text-on-ink-muted">
                        {reel.label} — Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline justify-between gap-4 p-6">
                  <h2 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-foreground">
                    {reel.title}
                  </h2>
                  <span className="num-plate text-lg text-border">{reel.num}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
