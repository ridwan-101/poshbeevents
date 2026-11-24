import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { formatDate, getPost, posts, type Block } from "@/content/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", publishedTime: post.date, images: [post.cover] },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-12 text-3xl font-semibold">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul key={i} className="mt-6 space-y-2 border-l-2 border-magenta pl-6 font-display text-2xl italic">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={i} className="mt-6">
          {block.text}
        </p>
      );
  }
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <header className="bg-ink pb-16 pt-36 text-white">
          <div className="container-page max-w-3xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
              <ArrowLeft className="size-4" aria-hidden /> Back to journal
            </Link>
            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-widest text-white/60">
              <span className="text-magenta">{post.category}</span>
              <span aria-hidden>•</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <h1 className="mt-3 text-5xl font-semibold sm:text-6xl">{post.title}</h1>
            <p className="mt-5 text-lg text-white/70">{post.excerpt}</p>
          </div>
        </header>

        <div className="container-page grid max-w-5xl gap-12 py-16 md:grid-cols-[1fr_1.4fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              width={541}
              height={815}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="w-full rounded-3xl shadow-xl"
              priority
            />
          </div>
          <div className="text-lg leading-relaxed text-ink/80 [&>*:first-child]:mt-0">
            {post.body.map(renderBlock)}
          </div>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
