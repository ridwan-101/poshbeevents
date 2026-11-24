// Single source of truth for business details. Edit here, not in components.

export const site = {
  name: "Poshbee Eventz n’ Bridals",
  shortName: "Poshbee",
  url: "https://poshbeevents.com.ng",
  tagline: "Celebrate Love. Create Memories.",
  description:
    "Poshbee Eventz n’ Bridals plans and styles luxury weddings, birthdays, corporate and private events in Ibadan and across Nigeria.",
  phone: "+234 803 376 8181",
  phoneHref: "tel:+2348033768181",
  whatsapp: "2348033768181",
  email: "info@poshbeevents.com.ng",
  address: {
    street: "Akinyemi Way, Ring Road",
    city: "Ibadan",
    region: "Oyo",
    country: "Nigeria",
  },
  // TODO: replace with the business profile URL (the old site linked to a single post).
  instagram: "https://www.instagram.com/p/CZ_bqdxNVjW/",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;
