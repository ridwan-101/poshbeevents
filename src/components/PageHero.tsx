import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
};

export function PageHero({ eyebrow, title, intro, image = "/images/hero-venue.jpg" }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-20 pt-40 text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
      <div className="container-page animate-fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold sm:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-white/75">{intro}</p>}
      </div>
    </section>
  );
}
