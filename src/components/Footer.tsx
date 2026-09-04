import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { business, images, nav } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-on-ink">
      <div className="shell grid gap-14 py-20 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-24">
        <div>
          <img
            src={images.logo}
            alt={`${business.name} logo`}
            width={1024}
            height={1024}
            loading="lazy"
            className="h-16 w-auto"
          />
          <h3 className="mt-7 text-2xl">{business.name}</h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-ink-muted">{business.tagline}</p>
          <p className="mt-8 flex items-center gap-2 text-sm text-on-ink-muted">
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            Serving Nova Scotia, Canada
          </p>
        </div>

        <div>
          <p className="eyebrow text-primary">Navigate</p>
          <ul className="mt-6 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-on-ink-muted transition-colors hover:text-on-ink"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-on-ink" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-primary">Contact</p>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 font-display text-lg font-bold text-on-ink transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                +1 {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={business.emailHref}
                className="flex min-w-0 items-center gap-3 text-sm text-on-ink-muted transition-colors hover:text-on-ink"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="truncate">{business.email}</span>
              </a>
            </li>
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-xs bg-primary px-6 py-3.5 font-display text-[0.75rem] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="shell flex flex-col gap-2 py-7 text-xs uppercase tracking-[0.16em] text-on-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {business.name}
          </p>
          <p>Residential Roofing &amp; Siding — Nova Scotia</p>
        </div>
      </div>
    </footer>
  );
}
