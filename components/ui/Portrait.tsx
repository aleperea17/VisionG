import Image from "next/image";
import { site } from "@/content/site";

export function Portrait({
  alt,
  priority = false,
  ratio = "4/5",
  className = "",
}: {
  alt: string;
  priority?: boolean;
  ratio?: "4/5" | "3/4";
  className?: string;
}) {
  const aspect = ratio === "3/4" ? "aspect-[3/4]" : "aspect-[4/5]";

  return (
    <div className={`relative mx-auto w-full max-w-sm ${className}`}>
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(201,162,74,0.14),transparent_68%)]"
        aria-hidden="true"
      />
      <div className={`relative ${aspect} overflow-hidden rounded-2xl border border-gold-500/55 bg-black-900`}>
        <Image
          src={site.founder.image}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 90vw, 384px"
          className="object-cover"
          style={{ objectPosition: "50% 30%" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black-950/70 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
