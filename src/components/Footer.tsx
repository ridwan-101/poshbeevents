import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site, whatsappLink } from "@/content/site";
import { InstagramIcon, WhatsAppIcon } from "./BrandIcons";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await currentYear();
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.jpg" alt="" width={56} height={56} className="size-14 rounded-full" />
            <span className="font-display text-2xl font-semibold text-white">{site.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Luxury weddings, bridal styling and celebrations crafted with creativity, elegance and flawless
            execution.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full border border-white/15 hover:border-magenta hover:text-magenta"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-10 place-items-center rounded-full border border-white/15 hover:border-magenta hover:text-magenta"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 hover:text-white">
                <Phone className="size-4 text-magenta" aria-hidden /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="size-4 text-magenta" aria-hidden /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-magenta" aria-hidden />
              {site.address.street}, {site.address.city}, {site.address.country}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-6 text-xs text-white/50">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
