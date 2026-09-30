import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-start justify-center px-4 py-32">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">404</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-ivory">Esta página no existe.</h1>
      <p className="mt-6 text-base text-ivory/85">
        <Link href="/" className="text-gold-400 underline underline-offset-4">
          Volver al inicio
        </Link>
      </p>
    </section>
  );
}
