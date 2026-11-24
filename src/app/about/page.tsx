import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the CEO of Poshbee Eventz n’ Bridals and learn about our mission to deliver elegant, unforgettable events across Nigeria.",
};

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver elegant, creative, and unforgettable event experiences that bring our clients’ visions to life with professionalism, excellence, and attention to every detail. We are committed to creating memorable celebrations that leave lasting impressions and joyful moments for every client and guest.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become one of the leading event and bridal brands known for luxury, innovation, creativity, and exceptional event experiences across Nigeria and beyond. We aim to set the standard for excellence in event planning and bridal services while continuously turning dreams into reality.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Passion for elegance, creativity and unforgettable celebrations"
      />

      <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2.5rem] bg-blush" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
            <Image
              src="/images/ceo.jpg"
              alt="The CEO of Poshbee Eventz n’ Bridals in a magenta lace gown and gele"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow">Meet our CEO</p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">The heart behind Poshbee</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              At Poshbee Eventz n’ Bridals, our CEO is driven by a passion for elegance, creativity, and
              unforgettable celebrations. With years of experience in event planning and bridal coordination,
              she has built a brand known for delivering stylish, well-organized, and memorable events.
            </p>
            <p>
              Her vision is to create experiences that reflect love, joy, beauty, and excellence while ensuring
              every client enjoys a stress-free planning journey. From luxury weddings to corporate gatherings
              and private celebrations, she leads the team with professionalism, innovation, and attention to
              detail.
            </p>
            <p>
              Under her leadership, Poshbee Eventz n’ Bridals continues to bring dreams to life and turn special
              moments into lasting memories.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-3xl border border-ink/5 bg-cream p-10">
              <span className="grid size-14 place-items-center rounded-2xl bg-magenta text-white">
                <Icon className="size-7" aria-hidden />
              </span>
              <h2 className="mt-8 text-3xl font-semibold">{title}</h2>
              <p className="mt-4 leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
