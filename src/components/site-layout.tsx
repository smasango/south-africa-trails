import { Link } from "@tanstack/react-router";
import { Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/logo.jpeg.asset.json";
import { BUSINESS, whatsappUrl } from "@/config/business";
import { ButtonLink } from "./button";

const nav = [
  ["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Tours", "/tours"],
  ["Attractions", "/attractions"], ["Gallery", "/gallery"], ["Request a Quote", "/request-quote"], ["Contact", "/contact"],
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-sm bg-primary px-4 py-2 text-primary-foreground focus:translate-y-0">Skip to content</a>
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 shadow-sm backdrop-blur">
      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <span className="hidden sm:inline">Personalised travel experiences across South Africa</span>
          <div className="ml-auto flex items-center gap-4">
            <a href={`tel:${BUSINESS.phoneHref}`} className="flex items-center gap-1.5 hover:text-gold"><Phone size={14}/> {BUSINESS.phone}</a>
            <a href={`mailto:${BUSINESS.email}`} className="hidden items-center gap-1.5 hover:text-gold md:flex"><Mail size={14}/> {BUSINESS.email}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="BT New Adventure Tours home" className="shrink-0 py-2">
          <img src={logoAsset.url} alt="BT New Adventure Tours" className="h-24 w-auto object-contain sm:h-28 lg:h-32" />
        </Link>
        <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-1 xl:flex">
          {nav.map(([label, to]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="rounded-sm px-2.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary">{label}</Link>)}
          <ButtonLink to="/request-quote" className="ml-2 px-4">Plan Your Tour</ButtonLink>
        </nav>
        <button type="button" onClick={() => setOpen(!open)} className="ml-auto inline-flex size-11 items-center justify-center rounded-sm border border-border text-foreground xl:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-border bg-background px-4 py-4 xl:hidden">
        <div className="mx-auto grid max-w-7xl gap-1">{nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-sm px-4 py-3 font-semibold hover:bg-muted data-[status=active]:bg-muted data-[status=active]:text-primary">{label}</Link>)}<ButtonLink to="/request-quote" onClick={() => setOpen(false)} className="mt-2">Plan Your Tour</ButtonLink></div>
      </nav>}
    </header>
    <main id="main-content">{children}</main>
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="md:col-span-2 lg:col-span-1"><div className="inline-block rounded-sm bg-background p-3"><img src={logoAsset.url} alt="BT New Adventure Tours" className="h-32 w-auto" /></div><p className="mt-5 max-w-sm text-sm leading-6 text-navy-foreground/75">{BUSINESS.tagline}</p><p className="mt-2 font-bold text-gold">{BUSINESS.secondaryTagline}</p></div>
        <div><h2 className="font-display text-lg font-bold">Navigate</h2><ul className="mt-4 grid gap-2 text-sm text-navy-foreground/75">{nav.slice(0,5).map(([label,to]) => <li key={to}><Link to={to} className="hover:text-gold">{label}</Link></li>)}</ul></div>
        <div><h2 className="font-display text-lg font-bold">Travel services</h2><ul className="mt-4 grid gap-2 text-sm text-navy-foreground/75"><li><Link to="/services">Customised tours</Link></li><li><Link to="/services">Safaris & excursions</Link></li><li><Link to="/services">Accommodation & flights</Link></li><li><Link to="/services">Transfers & airport shuttle</Link></li><li><Link to="/services">Conference extensions</Link></li></ul></div>
        <div><h2 className="font-display text-lg font-bold">Contact</h2><address className="mt-4 grid gap-3 text-sm not-italic text-navy-foreground/75"><span>{BUSINESS.location}</span><a href={`tel:${BUSINESS.phoneHref}`} className="hover:text-gold">{BUSINESS.phone}</a><a href={`mailto:${BUSINESS.email}`} className="break-all hover:text-gold">{BUSINESS.email}</a><a href={BUSINESS.website} className="hover:text-gold">{BUSINESS.websiteLabel}</a></address></div>
      </div>
      <div className="border-t border-navy-foreground/15"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-navy-foreground/65 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><p>© 2026 BT New Adventure Tours. All rights reserved.</p><div className="flex flex-wrap gap-4"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link><Link to="/cookies">Cookie Policy</Link></div></div></div>
    </footer>
    <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Chat with BT New Adventure Tours on WhatsApp" className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-brand transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><MessageCircle aria-hidden="true"/></a>
  </div>;
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image?: string }) {
  return <section className={`relative overflow-hidden ${image ? "min-h-[460px]" : "bg-navy py-20 text-navy-foreground"}`}>
    {image && <><img src={image} alt="" className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-hero-overlay"/></>}
    <div className={`relative mx-auto flex max-w-7xl flex-col justify-end px-4 sm:px-6 lg:px-8 ${image ? "min-h-[460px] pb-16 pt-32 text-navy-foreground" : ""}`}><p className="section-kicker">{eyebrow}</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{title}</h1><p className={`mt-5 max-w-2xl text-lg leading-8 ${image ? "text-navy-foreground/85" : "text-navy-foreground/75"}`}>{text}</p></div>
  </section>;
}

export function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) {
  return <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className="section-kicker text-green">{eyebrow}</p><h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>{text && <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{text}</p>}</div>;
}
