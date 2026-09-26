import { createFileRoute } from "@tanstack/react-router";
import { ExperienceCard } from "@/components/cards";
import { ButtonLink } from "@/components/button";
import { PageHero, SectionHeading } from "@/components/site-layout";
import { pageHead } from "@/components/seo";
import { experiences, galleryImages } from "@/data/site-data";
export const Route=createFileRoute("/tours")({head:()=>pageHead("Custom South Africa Tours | BT New Adventure Tours","Explore example Johannesburg, Soweto, Cape Town, Pretoria, Kruger and Mpumalanga experiences tailored to your plans.","/tours"),component:Tours});
function Tours(){return <><PageHero eyebrow="Tailored tours" title="Start With An Idea. Make It Your Journey." text="These examples can be adapted, combined or used as inspiration for your own South African itinerary." image={galleryImages[0].src}/><section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Example experiences" title="Where could your journey take you?" text="There are no one-size-fits-all packages here. Tell us what interests you and we’ll shape the details."/><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{experiences.map(e=><ExperienceCard key={e.title} {...e}/>)}</div><div className="mt-14 text-center"><ButtonLink to="/request-quote">Build My Tailored Tour</ButtonLink></div></div></section></>}
