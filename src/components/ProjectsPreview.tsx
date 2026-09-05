import { gallery } from "@/data/site";
import { ActionLink, SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export function ProjectsPreview() {
  return (
    <section className="bg-bone py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Recent Projects"
            title={
              <>
                Selected <span className="text-primary">work</span>.
              </>
            }
            copy="A look at roofs, siding and full exterior upgrades finished across the province."
          />
          <ActionLink to="/projects" variant="outline">
            Full Gallery
          </ActionLink>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 6).map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 3) * 90}
              className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <figure className="group relative h-full overflow-hidden rounded-xs">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05] ${
                    i === 0 ? "aspect-[4/3] sm:h-full" : "aspect-[4/3]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="eyebrow text-primary">{item.category}</span>
                  <span className="mt-2 block font-display text-sm font-bold uppercase tracking-[0.1em] text-on-ink">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
