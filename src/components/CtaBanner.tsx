import Link from "next/link";
import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./BrandIcons";

export function CtaBanner() {
  return (
    <section className="container-page py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-plum-900 via-plum-800 to-magenta-600 px-8 py-16 text-center text-white sm:px-16">
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-magenta/30 blur-3xl" />
        <p className="font-script text-4xl text-blush">Let’s plan something beautiful</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
          Tell us about your celebration
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Share your date, guest count and vision. We’ll get back to you with ideas and a tailored plan.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn bg-white text-plum-900 hover:bg-blush">
            Book a consultation
          </Link>
          <a
            href={whatsappLink("Hello Poshbee, I'd like to plan an event.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <WhatsAppIcon className="size-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
