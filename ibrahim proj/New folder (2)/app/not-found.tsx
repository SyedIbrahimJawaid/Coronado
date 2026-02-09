import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding bg-offwhite min-h-[60vh] flex items-center">
      <div className="container-max text-center">
        <div className="text-8xl font-bold text-primary/10 mb-4 font-serif">404</div>
        <h1 className="text-3xl md:text-4xl font-serif text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-body-secondary text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/get-started" className="btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

