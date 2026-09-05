import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { gallery, type GalleryCategory } from "@/data/site";
import { SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Recent Projects | 902 Roofing & Siding" },
      {
        name: "description",
        content:
          "Browse recent roofing, siding and exterior projects completed for homeowners across Nova Scotia.",
      },
      { property: "og:title", content: "Recent Projects | 902 Roofing & Siding" },
      {
        property: "og:description",
        content: "Roofing and siding work completed across Nova Scotia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const filters = ["All", "Roofing", "Siding", "Exterior"] as const;

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = gallery.filter(
    (g) => filter === "All" || g.category === (filter as GalleryCategory),
  );

  return (
    <>
      <section className="bg-ink pb-20 pt-40 sm:pt-48">
        <div className="shell">
          <SectionHead
            eyebrow="Our Work"
            tone="dark"
            title={
              <>
                Homes we've <span className="text-primary">transformed</span>.
              </>
            }
            copy="A selection of roofing, siding and full exterior projects from across the province."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="shell">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-xs border px-5 py-2.5 font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] transition-colors",
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.src} delay={i * 50}>
                <button
                  type="button"
                  onClick={() => setActive(gallery.indexOf(item))}
                  className="group block w-full overflow-hidden rounded-xs text-left"
                >
                  <span className="block overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-4 flex items-baseline justify-between gap-4">
                    <span className="font-display text-sm font-bold uppercase tracking-[0.1em] text-foreground">
                      {item.caption}
                    </span>
                    <span className="text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {item.category}
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xs border border-ink-line text-on-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[active].src}
              alt={gallery[active].alt}
              className="max-h-[80vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-sm uppercase tracking-[0.16em] text-on-ink-muted">
              {gallery[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
