import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { formatDate, sortedPosts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Journal",
  description: "News, celebrations and event inspiration from Poshbee Eventz n’ Bridals.",
};

export default function BlogPage() {
  const posts = sortedPosts();

  return (
    <>
      <PageHero eyebrow="Journal" title="News & inspiration" />
      <section className="container-page py-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="group">
              <Link href={`/blog/${p.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand">
                  <Image
                    src={p.cover}
                    alt={p.coverAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
                  <span className="text-magenta">{p.category}</span>
                  <span aria-hidden>•</span>
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                </div>
                <h2 className="mt-2 text-3xl font-semibold group-hover:text-magenta">{p.title}</h2>
                <p className="mt-3 text-muted">{p.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
