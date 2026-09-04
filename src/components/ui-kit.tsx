import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2.5 font-display text-[0.8125rem] font-bold uppercase tracking-[0.14em] px-7 py-4 rounded-xs transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const styles = {
  primary:
    "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lift",
  outline:
    "border border-border text-foreground hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground hover:text-background",
  ghostLight:
    "border border-on-ink/30 text-on-ink hover:-translate-y-0.5 hover:border-on-ink hover:bg-on-ink hover:text-ink",
} as const;

type Variant = keyof typeof styles;

export function ActionLink({
  to,
  href,
  variant = "primary",
  arrow = true,
  className,
  children,
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cls = cn(base, styles[variant], className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="arrow-slide h-4 w-4 shrink-0" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {inner}
    </Link>
  );
}

export function ActionButton({
  variant = "primary",
  arrow = true,
  className,
  children,
  ...rest
}: {
  variant?: Variant;
  arrow?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, styles[variant], className)} {...rest}>
      <span>{children}</span>
      {arrow && <ArrowRight className="arrow-slide h-4 w-4 shrink-0" aria-hidden="true" />}
    </button>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className={cn("eyebrow", tone === "dark" ? "text-primary" : "text-primary")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-5 text-[clamp(2rem,5vw,3.75rem)]",
          tone === "dark" ? "text-on-ink" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={cn(
            "mt-6 max-w-xl text-base leading-relaxed sm:text-lg",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-on-ink-muted" : "text-muted-foreground",
          )}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
