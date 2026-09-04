import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business, images, nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !onHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ease-out",
        solid
          ? "border-b border-ink-line bg-ink/95 py-2.5 backdrop-blur-md supports-[backdrop-filter]:bg-ink/80"
          : "border-b border-transparent py-5",
      )}
    >
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${business.name} home`}>
          <img
            src={images.logo}
            alt={`${business.name} logo`}
            width={1024}
            height={1024}
            className={cn(
              "w-auto shrink-0 transition-all duration-500 ease-out",
              solid ? "h-10 sm:h-11" : "h-12 sm:h-14",
            )}
          />
          <span className="hidden min-w-0 flex-col leading-none sm:flex">
            <span className="truncate font-display text-sm font-extrabold uppercase tracking-[0.12em] text-on-ink">
              902 Roofing &amp; Siding
            </span>
            <span className="mt-1 truncate text-[0.6875rem] uppercase tracking-[0.2em] text-on-ink-muted">
              Nova Scotia
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative py-1 font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-on-ink-muted transition-colors duration-300 hover:text-on-ink"
                activeProps={{ className: "text-on-ink" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 font-display text-sm font-bold tracking-[0.04em] text-on-ink transition-colors hover:text-primary lg:flex"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {business.phoneDisplay}
          </a>

          <Link
            to="/contact"
            className="hidden shrink-0 rounded-xs bg-primary px-5 py-3 font-display text-[0.75rem] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift md:inline-flex"
          >
            Get a Free Quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xs border border-ink-line text-on-ink transition-colors hover:border-on-ink xl:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "fixed inset-0 z-50 xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/70 transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-ink transition-transform duration-500 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-ink-line px-6 py-5">
            <img src={images.logo} alt="" width={1024} height={1024} className="h-10 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xs border border-ink-line text-on-ink"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-4" aria-label="Mobile">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                style={{ transitionDelay: open ? `${120 + i * 45}ms` : "0ms" }}
                className={cn(
                  "border-b border-ink-line py-5 font-display text-2xl font-extrabold uppercase tracking-tight text-on-ink transition-all duration-500",
                  open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
                )}
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-3 border-t border-ink-line px-6 py-6">
            <Link
              to="/contact"
              className="block rounded-xs bg-primary px-6 py-4 text-center font-display text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground"
            >
              Get a Free Quote
            </Link>
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xs border border-ink-line px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-on-ink"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
