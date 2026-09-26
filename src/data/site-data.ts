import {
  BedDouble, Binoculars, Building2, BusFront, CalendarRange, CarFront,
  Landmark, Map, Palmtree, Plane, type LucideIcon,
} from "lucide-react";
import groupAsset from "@/assets/past-tour-group.jpeg.asset.json";
import sowetoAsset from "@/assets/soweto-tour.jpeg.asset.json";
import cultureAsset from "@/assets/cultural-experience.jpeg.asset.json";
import transferAsset from "@/assets/guest-transfer.jpeg.asset.json";
import mealAsset from "@/assets/shared-meal.jpeg.asset.json";
import conversationAsset from "@/assets/cultural-conversation.jpeg.asset.json";
import heritageAsset from "@/assets/heritage-visit.jpeg.asset.json";
import vehicleAsset from "@/assets/tour-transfer.jpeg.asset.json";

export type Service = { title: string; description: string; icon: LucideIcon };
export const services: Service[] = [
  { title: "Holiday & Leisure", description: "Carefully planned South African holidays tailored to your interests, schedule and travel requirements.", icon: Palmtree },
  { title: "Accommodation", description: "Help arranging suitable accommodation as part of your South African travel experience.", icon: BedDouble },
  { title: "Tours", description: "Customised journeys designed around your preferred destinations and experiences.", icon: Map },
  { title: "Safaris", description: "Wildlife and natural landscape experiences shaped around your wider itinerary.", icon: Binoculars },
  { title: "Pre- & Post-Conference Tours", description: "Extend a business trip with tailored tourism experiences before or after your conference.", icon: CalendarRange },
  { title: "Excursions", description: "Add memorable day experiences and local attractions to your travel plans.", icon: Landmark },
  { title: "Transfers", description: "Convenient point-to-point travel arranged around your itinerary.", icon: CarFront },
  { title: "Flight Booking", description: "Flight booking support as part of your complete travel arrangements.", icon: Plane },
  { title: "Airport Shuttle", description: "Airport collection and drop-off arranged to support a smoother arrival or departure.", icon: BusFront },
  { title: "Chauffeur Services", description: "Personal transport support for selected journeys and travel requirements.", icon: Building2 },
];

export const galleryImages = [
  { src: sowetoAsset.url, alt: "BT New Adventure Tours guests visiting Vilakazi Street in Soweto", caption: "A visit to Vilakazi Street, Soweto" },
  { src: cultureAsset.url, alt: "Guests watching a South African cultural presentation", caption: "A South African cultural experience" },
  { src: heritageAsset.url, alt: "BT New Adventure Tours guests visiting a South African heritage venue", caption: "Exploring South African heritage" },
  { src: transferAsset.url, alt: "Guests with their host beside tour transport", caption: "A warm welcome for our guests" },
  { src: groupAsset.url, alt: "A cheerful group enjoying a tour together", caption: "Shared moments on tour" },
  { src: conversationAsset.url, alt: "Travellers sharing a cultural conversation", caption: "Connecting through local experiences" },
  { src: vehicleAsset.url, alt: "Guests travelling together in a tour vehicle", caption: "Travelling together in comfort" },
  { src: mealAsset.url, alt: "A tour group enjoying a meal together", caption: "Time to relax and connect" },
];

export const experiences = [
  { title: "Johannesburg & Soweto", region: "Gauteng", description: "Explore Johannesburg’s history, culture and vibrant urban experiences.", image: sowetoAsset.url },
  { title: "Cape Town", region: "Western Cape", description: "Discover Table Mountain, District Six and the city’s surrounding attractions.", image: heritageAsset.url },
  { title: "Kruger National Park", region: "Mpumalanga & Limpopo", description: "Experience South Africa’s wildlife and remarkable natural landscapes.", image: cultureAsset.url },
  { title: "Pretoria", region: "Gauteng", description: "Explore the Union Buildings and other historic city destinations.", image: groupAsset.url },
  { title: "Cradle of Humankind", region: "Gauteng", description: "Discover one of South Africa’s significant World Heritage destinations.", image: conversationAsset.url },
  { title: "Panorama & Mpumalanga", region: "Mpumalanga", description: "Shape a journey through scenic landscapes and surrounding attractions.", image: transferAsset.url },
];

export const attractions = [
  ["Union Buildings", "Pretoria, Gauteng", "A landmark overlooking South Africa’s administrative capital."],
  ["Cradle of Humankind", "Gauteng", "A celebrated heritage landscape west of Johannesburg."],
  ["Mapungubwe", "Limpopo", "An important cultural landscape in northern South Africa."],
  ["Apartheid Museum", "Johannesburg, Gauteng", "A museum presenting South Africa’s journey through apartheid."],
  ["Robben Island", "Cape Town, Western Cape", "A historic island destination reached from Cape Town."],
  ["Liliesleaf Farm", "Johannesburg, Gauteng", "A place connected to South Africa’s liberation history."],
  ["Hector Pieterson Memorial", "Soweto, Gauteng", "A memorial honouring the events of the 1976 Soweto uprising."],
  ["Mandela House", "Soweto, Gauteng", "A heritage attraction on Vilakazi Street."],
  ["Maboneng", "Johannesburg, Gauteng", "An energetic inner-city neighbourhood with an urban creative character."],
  ["Kruger National Park", "Mpumalanga & Limpopo", "One of South Africa’s renowned wildlife destinations."],
  ["Palace of Justice", "Pretoria, Gauteng", "A historic building on Church Square."],
  ["Constitution Hill", "Johannesburg, Gauteng", "A living museum and home of the Constitutional Court."],
  ["Magaliesburg", "Gauteng", "A countryside destination near the Magaliesberg range."],
  ["Gold Reef City", "Johannesburg, Gauteng", "A leisure and entertainment destination with mining-era themes."],
  ["Hartbeespoort Dam", "North West", "A popular waterside destination near the Magaliesberg mountains."],
  ["Lesedi Cultural Village", "North West area", "A cultural visitor experience celebrating southern African traditions."],
  ["Table Mountain", "Cape Town, Western Cape", "Cape Town’s defining mountain landmark."],
  ["Victoria Falls", "Southern Africa — Zambia/Zimbabwe", "A regional Southern African destination that can be considered in a wider itinerary."],
  ["District Six", "Cape Town, Western Cape", "A historic Cape Town neighbourhood with a powerful community story."],
  ["And Many More", "South Africa", "Tell us what interests you and we’ll help shape your itinerary."],
] as const;
