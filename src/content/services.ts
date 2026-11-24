import type { LucideIcon } from "lucide-react";
import { Camera, Flower2, Mail, MapPin, Music, Sparkles } from "lucide-react";

export type Signature = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const signatureServices: Signature[] = [
  {
    title: "Weddings",
    description:
      "From intimate ceremonies to grand receptions, we create magical wedding experiences tailored to your love story.",
    image: "/images/wedding-cake.jpg",
    alt: "Multi-tier castle wedding cake lit in blue and white",
  },
  {
    title: "Birthday Celebrations",
    description:
      "Creative themes, luxury décor and entertainment that make every milestone birthday unforgettable, for every age.",
    image: "/images/birthday-50th.jpg",
    alt: "50th birthday stage with draped ceiling and purple lighting",
  },
  {
    title: "Corporate & Social Events",
    description:
      "Galas, launches, engagements, dinners and private parties, coordinated flawlessly and styled with elegance.",
    image: "/images/corporate-setup.jpg",
    alt: "Banquet hall with royal blue chairs and gold floral centrepieces",
  },
];

export type Service = { title: string; description: string; icon: LucideIcon };

export const services: Service[] = [
  {
    title: "Venue Selection",
    description:
      "We find the venue that fits your style, guest count and vision.",
    icon: MapPin,
  },
  {
    title: "Invitation Cards",
    description:
      "Custom printed and digital invites that reflect the theme of your celebration.",
    icon: Mail,
  },
  {
    title: "Flower Bouquets",
    description:
      "Floral arrangements and bridal bouquets that add charm to every detail.",
    icon: Flower2,
  },
  {
    title: "Entertainment",
    description:
      "DJs, live bands, MCs, dancers and performers to keep your guests engaged.",
    icon: Music,
  },
  {
    title: "Documentation",
    description:
      "Photography and videography that capture every moment worth remembering.",
    icon: Camera,
  },
  {
    title: "Decoration",
    description:
      "Luxury décor and creative styling that bring your dream celebration to life.",
    icon: Sparkles,
  },
];

export const eventTypes = [
  "Wedding",
  "Birthday",
  "Corporate event",
  "Engagement",
  "Private celebration",
  "Other",
] as const;

