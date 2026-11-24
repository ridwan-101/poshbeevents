"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation (adjust state during render, no effect needed).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "bg-ink/95 shadow-lg shadow-black/10 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Image
            src="/images/logo.jpg"
            alt=""
            width={48}
            height={48}
            className="size-12 rounded-full ring-1 ring-white/15"
            priority
          />
          <span className="hidden leading-tight text-white sm:block">
            <span className="block font-display text-xl font-semibold">Poshbee</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-white/60">
              Eventz n’ Bridals
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative text-sm font-medium transition-colors hover:text-white ${
                isActive(item.href)
                  ? "text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-magenta"
                  : "text-white/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={site.phoneHref} className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>
          <Link href="/contact" className="btn-primary !py-2.5">
            Book consultation
          </Link>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-5rem)] bg-ink md:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 pt-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`border-b border-white/10 py-4 font-display text-3xl ${
                  isActive(item.href) ? "text-magenta" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-8">
              Book consultation
            </Link>
            <a href={site.phoneHref} className="btn-ghost mt-3">
              <Phone className="size-4" aria-hidden /> {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
