/**
 * Central content + media configuration for 902 Roofing & Siding.
 * Replace any image (or a Reel embed URL) here — components read from this file
 * and never hardcode media.
 */

import logo from "@/assets/logo-902.png";
import heroHome from "@/assets/hero-home.jpg";
import crewRoofing from "@/assets/crew-roofing.jpg";
import sidingInstall from "@/assets/siding-install.jpg";
import ba1Before from "@/assets/ba1-before.jpg";
import ba1After from "@/assets/ba1-after.jpg";
import ba2Before from "@/assets/ba2-before.jpg";
import ba2After from "@/assets/ba2-after.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import ctaBand from "@/assets/cta-band.jpg";

export const business = {
  name: "902 Roofing & Siding",
  phoneDisplay: "902-476-8438",
  phoneHref: "tel:+19024768438",
  email: "902roofandsiding@gmail.com",
  emailHref: "mailto:902roofandsiding@gmail.com",
  area: "Nova Scotia, Canada",
  tagline: "Residential roofing and siding services across Nova Scotia.",
} as const;

export const images = {
  logo,
  hero: heroHome,
  crew: crewRoofing,
  siding: sidingInstall,
  ctaBand,
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Before & After", to: "/before-after" },
  { label: "About", to: "/about" },
  { label: "Reels", to: "/reels" },
  { label: "Contact", to: "/contact" },
] as const;

export const trustPoints = [
  "Residential Roofing",
  "Siding Specialists",
  "Quality Work",
  "Competitive Pricing",
  "Free Quotes",
  "Nova Scotia Service Area",
] as const;

export type Service = {
  num: string;
  title: string;
  copy: string;
  image: string;
};

export const services: Service[] = [
  {
    num: "01",
    title: "Residential Roofing",
    copy: "Professional roofing solutions designed to protect your home and improve long-term durability.",
    image: crewRoofing,
  },
  {
    num: "02",
    title: "Roof Replacement",
    copy: "Complete roof replacement solutions with attention to detail and quality workmanship.",
    image: ba1After,
  },
  {
    num: "03",
    title: "Roof Repairs",
    copy: "Reliable repairs for damaged, aging or weathered roofing systems.",
    image: gallery2,
  },
  {
    num: "04",
    title: "Residential Siding",
    copy: "Upgrade your home's exterior with durable and attractive siding solutions.",
    image: sidingInstall,
  },
  {
    num: "05",
    title: "Exterior Upgrades",
    copy: "Improve protection, appearance and overall curb appeal.",
    image: gallery6,
  },
  {
    num: "06",
    title: "Free Roofing & Siding Estimates",
    copy: "Get a clear, straightforward quote for your upcoming project.",
    image: gallery3,
  },
];

export const whyPoints = [
  { num: "01", title: "Quality Work", copy: "Careful prep, clean lines and finishes we stand behind." },
  { num: "02", title: "Competitive Pricing", copy: "Straightforward quotes with no padded extras." },
  { num: "03", title: "Local Professionals", copy: "A Nova Scotia crew that answers the phone." },
  { num: "04", title: "Free Quotes", copy: "An honest assessment before you commit to anything." },
] as const;

/** Exactly two before/after comparisons. Swap the image paths to use real project photos. */
export const beforeAfter = [
  {
    num: "01",
    title: "Residential Roof Renewal",
    copy: "Full tear-off and replacement with new architectural shingles, ice-and-water protection and refreshed edge detailing.",
    before: ba1Before,
    after: ba1After,
    beforeAlt: "Aged, moss-covered asphalt shingle roof before replacement",
    afterAlt: "The same home with a new dark architectural shingle roof",
  },
  {
    num: "02",
    title: "Exterior Roofing & Siding Upgrade",
    copy: "Complete exterior transformation: new roof system, new siding, trim and gutters on a two-storey home.",
    before: ba2Before,
    after: ba2After,
    beforeAlt: "Two-storey house with peeling siding and an aged roof before renovation",
    afterAlt: "The same house after new siding, trim and a new roof were installed",
  },
] as const;

export type GalleryCategory = "Roofing" | "Siding" | "Exterior";

export const gallery: {
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
}[] = [
  { src: gallery1, alt: "Coastal Nova Scotia home with a dark shingle roof", category: "Roofing", caption: "Coastal Cape — Roof System" },
  { src: gallery2, alt: "New architectural shingles with ridge cap detail", category: "Roofing", caption: "Ridge & Flashing Detail" },
  { src: gallery3, alt: "Bungalow with new light grey siding", category: "Siding", caption: "Bungalow Siding Refresh" },
  { src: gallery4, alt: "Scaffolding around a house during siding installation", category: "Exterior", caption: "Mid-Build Worksite" },
  { src: gallery5, alt: "Modern dark-clad home exterior at dusk", category: "Exterior", caption: "Dark Clad Exterior" },
  { src: gallery6, alt: "New soffit, fascia and gutter detail", category: "Siding", caption: "Soffit, Fascia & Gutters" },
];

/**
 * Exactly three Facebook Reel slots. Leave `embedUrl` as null to keep the
 * premium placeholder. To publish a reel, paste its Facebook embed URL:
 *   embedUrl: "https://www.facebook.com/plugins/video.php?href=<reel-url>"
 */
export type Reel = {
  num: string;
  label: string;
  title: string;
  embedUrl: string | null;
};

export const reels: Reel[] = [
  { num: "01", label: "Facebook Reel", title: "Project Title Placeholder", embedUrl: null },
  { num: "02", label: "Facebook Reel", title: "Project Title Placeholder", embedUrl: null },
  { num: "03", label: "Facebook Reel", title: "Project Title Placeholder", embedUrl: null },
];

export const processSteps = [
  { num: "01", title: "Request a Free Quote", copy: "Call or send the form. We learn what your home needs." },
  { num: "02", title: "Plan Your Project", copy: "Clear scope, materials and pricing before work begins." },
  { num: "03", title: "Transform Your Home", copy: "Tidy installation, careful finishing, full clean-up." },
] as const;

export const serviceOptions = [
  "Roofing",
  "Roof Replacement",
  "Roof Repair",
  "Siding",
  "Roofing & Siding",
  "Other",
] as const;

export const propertyTypes = ["Single Family Home", "Semi-Detached", "Townhouse", "Cottage", "Other"] as const;
