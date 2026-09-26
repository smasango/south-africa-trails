export const BUSINESS = {
  name: "BT NEW ADVENTURE TOURS",
  tagline: "Discover What South Africa Has To Offer As A Tourist Destination...",
  secondaryTagline: "We Tailor Your Tours...",
  phone: "060 484 2816",
  phoneHref: "+27604842816",
  whatsappNumber: "27604842816",
  email: "Brenda@btnatours.co.za",
  website: "https://www.btnatours.co.za",
  websiteLabel: "www.btnatours.co.za",
  location: "South Africa",
} as const;

export const whatsappUrl = (message = "Hello BT New Adventure Tours, I would like to plan a tour.") =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
