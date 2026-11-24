import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Book a consultation with ${site.name}. Call ${site.phone}, email ${site.email} or send us your event details.`,
};

const address = `${site.address.street}, ${site.address.city}, ${site.address.country}`;

const details = [
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    icon: MapPin,
    label: "Address",
    value: address,
    href: `https://maps.google.com/?q=${encodeURIComponent(address)}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Get in touch"
        intro="Have something on your mind? Share your event details and we’ll reply with ideas and a tailored plan."
      />

      <section className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.5fr]">
        <aside className="space-y-4">
          {details.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label === "Address" ? "_blank" : undefined}
              rel={label === "Address" ? "noopener noreferrer" : undefined}
              className="flex items-start gap-5 rounded-3xl border border-ink/5 bg-white p-6 transition-colors hover:border-magenta/40"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blush text-magenta">
                <Icon className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {label}
                </span>
                <span className="mt-1 block text-lg font-medium">{value}</span>
              </span>
            </a>
          ))}

          <div className="overflow-hidden rounded-3xl border border-ink/5">
            <iframe
              title="Map showing our location in Ibadan"
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">Plan your event with us</h2>
          <p className="mb-8 mt-3 text-muted">Fields marked * are required.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
