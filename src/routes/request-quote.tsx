import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/site-layout";
import { pageHead } from "@/components/seo";
import { galleryImages } from "@/data/site-data";
export const Route=createFileRoute("/request-quote")({head:()=>pageHead("Request a Tailored Tour Quote | BT New Adventure Tours","Tell BT New Adventure Tours about your dates, interests and travel requirements for a tailored South Africa tour enquiry.","/request-quote"),component:Quote});
function Quote(){return <><PageHero eyebrow="Plan your journey" title="Request Your Tailored Tour" text="Share what you know so far. Your dates, interests and requirements will help start the conversation." image={galleryImages[2].src}/><section className="py-20"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.65fr_1.35fr] lg:px-8"><aside className="bg-navy p-8 text-navy-foreground"><p className="section-kicker text-gold">We tailor your tours</p><h2 className="mt-3 font-display text-3xl font-bold">Your ideas are the starting point.</h2><p className="mt-4 text-sm leading-7 text-navy-foreground/75">You do not need to have every detail decided. Tell us what matters to you and we can discuss the possibilities.</p></aside><div><EnquiryForm detailed/></div></div></section></>}
