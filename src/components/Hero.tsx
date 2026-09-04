import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { business, images } from "@/data/site";
import { ActionLink } from "@/components/ui-kit";
import { cn } from "@/lib/utils";

export function Hero() {
  const [ready, setReady] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(Math.min(window.scrollY, 700) * 0.12));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const step = (i: number) =>
    cn(
      "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
      ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
    ) + ` [transition-delay:${i}ms]`;

  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={images.hero}
          alt="Canadian residential home with a new shingle roof and fresh siding at golden hour"
          width={1920}
          height={1280}
          className={cn(
            "h-[118%] w-full object-cover transition-[transform,opacity] duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            ready ? "scale-100 opacity-100" : "scale-[1.08] opacity-0",
          )}
          style={{ transform: `translate3d(0, ${-offset}px, 0)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-ink/25" />
      </div>

      <div className="shell w-full">
        <div className="max-w-4xl">
          <p
            className="eyebrow flex items-center gap-3 text-on-ink"
            style={{ transitionDelay: "60ms" }}
          >
            <span className="inline-block h-[3px] w-10 bg-primary" />
            Serving Homeowners Across Nova Scotia
          </p>

          <h1
            className={cn(
              "mt-7 text-[clamp(2.5rem,7.5vw,5.75rem)] text-on-ink",
              "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
              ready ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            Roofing &amp; Siding Built to{" "}
            <span className="text-primary">Protect</span> Your Home.
          </h1>

          <p
            className={cn(
              "mt-8 max-w-2xl text-base leading-relaxed text-on-ink-muted sm:text-lg",
              step(220),
            )}
            style={{ transitionDelay: "220ms" }}
          >
            High-quality residential roofing and siding services across Nova Scotia, backed by
            professional workmanship, competitive pricing, and dependable local service.
          </p>

          <div
            className={cn("mt-10 flex flex-wrap items-center gap-4", step(340))}
            style={{ transitionDelay: "340ms" }}
          >
            <ActionLink to="/contact">Get a Free Quote</ActionLink>
            <ActionLink to="/projects" variant="ghostLight">
              Explore Our Work
            </ActionLink>
          </div>

          <a
            href={business.phoneHref}
            className={cn(
              "mt-12 inline-flex items-center gap-4 border-t border-ink-line pt-8",
              step(460),
            )}
            style={{ transitionDelay: "460ms" }}
          >
            <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="num-plate text-3xl text-on-ink transition-colors hover:text-primary sm:text-4xl">
              {business.phoneDisplay}
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 md:flex">
        <span className="text-[0.625rem] uppercase tracking-[0.28em] text-on-ink-muted [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="relative h-16 w-px overflow-hidden bg-ink-line">
          <span className="absolute inset-x-0 top-0 h-6 animate-[scrollcue_2.2s_ease-in-out_infinite] bg-primary" />
        </span>
      </div>

      <style>{`@keyframes scrollcue{0%{transform:translateY(-100%)}60%,100%{transform:translateY(300%)}}`}</style>
    </section>
  );
}
