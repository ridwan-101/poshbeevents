import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-ink px-5 pt-20 text-center text-white">
      <div>
        <p className="font-script text-5xl text-blush">Oops</p>
        <h1 className="mt-2 text-5xl font-semibold">This page went to another party</h1>
        <p className="mt-4 text-white/70">The page you’re looking for doesn’t exist or has moved.</p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
