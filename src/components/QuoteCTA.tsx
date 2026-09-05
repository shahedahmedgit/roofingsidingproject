import { Phone } from "lucide-react";
import { business, images } from "@/data/site";
import { ActionLink } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export function QuoteCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 sm:py-32">
      <img
        src={images.ctaBand}
        alt=""
        aria-hidden="true"
        width={1920}
        height={900}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />

      <Reveal className="shell">
        <p className="eyebrow flex items-center gap-3 text-on-ink">
          <span className="inline-block h-[3px] w-10 bg-primary" />
          Free Estimates
        </p>
        <h2 className="mt-6 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] text-on-ink">
          Ready to protect your home? Let&apos;s talk about your{" "}
          <span className="text-primary">project</span>.
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <ActionLink to="/contact">Get a Free Quote</ActionLink>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-3 text-on-ink transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="num-plate text-2xl sm:text-3xl">{business.phoneDisplay}</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
