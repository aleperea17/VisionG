import Link from "next/link";
import { legalLinks, site } from "@/content/site";
import { isPlaceholder } from "@/lib/site-url";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-500/60 bg-black-950">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl tracking-[0.12em] text-ivory">
            VISION<span className="text-gold-500">G</span> LLC
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/85">{site.description}</p>
          <p className="mt-3 text-xs text-muted">{site.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">Contacto</p>
          <ul className="mt-4 space-y-3 break-words text-sm text-ivory/85">
            <li>
              {isPlaceholder(site.email) ? (
                <span>{site.email}</span>
              ) : (
                <a href={`mailto:${site.email}`} className="hover:text-gold-400">
                  {site.email}
                </a>
              )}
            </li>
            <li>
              {isPlaceholder(site.instagramHandle) ? (
                <span>Instagram: {site.instagramHandle}</span>
              ) : (
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">
                  Instagram: {site.instagramHandle}
                </a>
              )}
            </li>
            {site.whatsapp ? (
              <li>
                {isPlaceholder(site.whatsapp) ? (
                  <span>WhatsApp: {site.whatsapp}</span>
                ) : (
                  <a
                    href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-400"
                  >
                    WhatsApp: {site.whatsapp}
                  </a>
                )}
              </li>
            ) : null}
            <li>
              <Link href="/#contacto" className="hover:text-gold-400">
                Formulario de contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">Legal</p>
          <ul className="mt-4 space-y-3 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ivory/85 hover:text-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto w-full max-w-6xl px-4 py-6 text-xs text-muted-dark">
          © {year} VisionG LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
