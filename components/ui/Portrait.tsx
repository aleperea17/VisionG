import { site } from "@/content/site";

export function Portrait({ alt, className = "" }: { alt: string; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-sm ${className}`}>
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(201,162,74,0.14),transparent_68%)]"
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold-500/55 bg-black-900">
        {site.founder.hasPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={site.founder.image} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <GeometricMark label={alt} />
        )}
      </div>
    </div>
  );
}

function GeometricMark({ label }: { label: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center" role="img" aria-label={label}>
      {/* TODO: reemplazar este bloque por /nicolas-aliaga.jpg cuando exista la foto profesional */}
      <svg viewBox="0 0 320 400" className="h-full w-full" aria-hidden="true">
        <rect x="28" y="28" width="264" height="344" fill="none" stroke="#C9A24A" strokeOpacity="0.35" />
        <rect x="44" y="44" width="232" height="312" fill="none" stroke="#C9A24A" strokeOpacity="0.2" />
        <line x1="160" y1="70" x2="160" y2="330" stroke="#C9A24A" strokeOpacity="0.45" />
        <line x1="70" y1="200" x2="250" y2="200" stroke="#C9A24A" strokeOpacity="0.25" />
        <polygon points="160,150 184,200 160,250 136,200" fill="none" stroke="#E8D5A3" strokeWidth="1.2" />
        <circle cx="160" cy="200" r="3" fill="#C9A24A" />
      </svg>
      <span className="absolute font-serif text-5xl tracking-[0.18em] text-gold-400/80">VG</span>
    </div>
  );
}
