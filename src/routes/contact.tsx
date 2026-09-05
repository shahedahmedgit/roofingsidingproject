import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { business, propertyTypes, serviceOptions } from "@/data/site";
import { ActionButton, SectionHead } from "@/components/ui-kit";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote | 902 Roofing & Siding" },
      {
        name: "description",
        content:
          "Request a free roofing or siding quote in Nova Scotia. Call 902-476-8438 or send us the details of your project.",
      },
      { property: "og:title", content: "Get a Free Quote | 902 Roofing & Siding" },
      { property: "og:description", content: "Free roofing and siding estimates across Nova Scotia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const field =
  "mt-2 w-full rounded-xs border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary";
const label = "block font-display text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-muted-foreground";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-ink pb-20 pt-40 sm:pt-48">
        <div className="shell">
          <SectionHead
            eyebrow="Free Quotes"
            tone="dark"
            title={
              <>
                Tell us about your <span className="text-primary">home</span>.
              </>
            }
            copy="Send the details below or call us directly — we'll get back to you with a clear, honest estimate."
          />
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            {sent ? (
              <div className="border-l-2 border-primary py-6 pl-8">
                <h2 className="text-2xl text-foreground">Thanks — your request is in.</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We'll reach out shortly. If it's urgent, call {business.phoneDisplay}.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-6 sm:grid-cols-2"
              >
                <div>
                  <label className={label} htmlFor="name">
                    Full Name
                  </label>
                  <input id="name" name="name" required className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="phone">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" required className={field} />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="email">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="service">
                    Service Needed
                  </label>
                  <select id="service" name="service" className={field} defaultValue={serviceOptions[0]}>
                    {serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="property">
                    Property Type
                  </label>
                  <select id="property" name="property" className={field} defaultValue={propertyTypes[0]}>
                    {propertyTypes.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="details">
                    Project Details
                  </label>
                  <textarea id="details" name="details" rows={5} className={field} />
                </div>
                <div className="sm:col-span-2">
                  <ActionButton type="submit">Request My Free Quote</ActionButton>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-8 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
            <a href={business.phoneHref} className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className={label}>Call</span>
                <span className="num-plate mt-1 block text-2xl text-foreground">
                  {business.phoneDisplay}
                </span>
              </span>
            </a>
            <a href={business.emailHref} className="flex min-w-0 items-start gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0">
                <span className={label}>Email</span>
                <span className="mt-1 block truncate text-sm text-foreground">{business.email}</span>
              </span>
            </a>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className={label}>Service Area</span>
                <span className="mt-1 block text-sm text-foreground">{business.area}</span>
              </span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
