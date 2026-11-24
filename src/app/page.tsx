import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { services, signatureServices } from "@/content/services";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { formatDate, sortedPosts } from "@/content/posts";

export default function HomePage() {
  const latest = sortedPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-20 pt-32 text-white sm:items-center">
        <Image
          src="/images/hero-venue.jpg"
          alt="Reception hall with crystal chandeliers and white table settings styled by Poshbee"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30 sm:bg-gradient-to-r sm:from-ink sm:via-ink/75 sm:to-ink/10" />
        <div className="container-page">
          <div className="max-w-2xl animate-fade-up">
            <p className="font-script text-3xl text-blush sm:text-5xl">{site.tagline}</p>
            <h1 className="mt-4 text-[2.75rem] font-semibold leading-[1.05] sm:text-7xl">
              Elegant events &amp; dream weddings, crafted to perfection
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              We turn your special moments into unforgettable experiences: luxury weddings, bridal styling,
              birthdays, corporate events and private celebrations.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book a consultation <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a href="#services" className="btn-ghost">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature services */}
      <section id="services" className="container-page scroll-mt-24 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Unforgettable celebrations, made just for you
            </h2>
          </div>
          <p className="max-w-md text-muted">
            Every event is designed around your story, from the first idea to the final dance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {signatureServices.map((s) => (
            <article key={s.title} className="group relative overflow-hidden rounded-3xl bg-ink">
              <div className="relative aspect-[4/5]">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <h3 className="text-3xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Complete event solutions</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Everything your day needs, in one place</h2>
            <p className="mt-5 text-muted">
              We handle every detail so your celebration is elegant, stress-free and unforgettable from start
              to finish.
            </p>
            <div className="relative mt-10 hidden aspect-[2/1] overflow-hidden rounded-3xl lg:block">
              <Image
                src="/images/traditional-setup.jpg"
                alt="Traditional table setting with kente-draped wooden chairs"
                fill
                sizes="35vw"
                className="object-cover"
              />
            </div>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-3xl border border-ink/5 bg-ink/5 sm:grid-cols-2">
            {services.map(({ title, description, icon: Icon }) => (
              <li key={title} className="bg-white p-8 transition-colors hover:bg-blush/40">
                <span className="grid size-12 place-items-center rounded-2xl bg-blush text-magenta">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="overflow-hidden bg-plum-950 py-24 text-white">
        <div className="container-page">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Kind words from our clients</h2>
        </div>
        <ul className="container-page mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:w-[420px]"
            >
              <Quote className="size-8 text-magenta" aria-hidden />
              <blockquote className="mt-5 flex-1 font-display text-xl leading-relaxed text-white/90">
                “{t.quote}”
              </blockquote>
              <footer className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-white/50">{t.occasion}</p>
              </footer>
            </li>
          ))}
        </ul>
      </section>

      {/* Journal */}
      {latest.length > 0 && (
        <section className="container-page pt-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">From the journal</p>
              <h2 className="mt-3 text-4xl font-semibold">News &amp; inspiration</h2>
            </div>
            <Link href="/blog" className="btn-outline hidden sm:inline-flex">
              All posts <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {latest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand">
                  <Image
                    src={p.cover}
                    alt={p.coverAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xs uppercase tracking-widest text-muted">{formatDate(p.date)}</p>
                <h3 className="mt-2 text-2xl font-semibold group-hover:text-magenta">{p.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
