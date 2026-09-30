"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const linkFor = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={
          scrolled || open ? "border-b border-white/5 bg-black-950/80 backdrop-blur-md" : "bg-transparent"
        }
      >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-4">
        <a href={linkFor("#inicio")} className="font-serif text-2xl font-semibold tracking-[0.14em] text-ivory" aria-label="VisionG, inicio">
          VISION<span className="text-gold-500">G</span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={linkFor(item.href)}
              className="whitespace-nowrap text-sm text-ivory/80 transition hover:text-gold-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href={linkFor("#contacto")}>Agendar una consulta</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ivory xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X strokeWidth={1.25} /> : <Menu strokeWidth={1.25} />}
        </button>
      </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="fixed inset-0 top-20 z-50 overflow-y-auto bg-black-950 xl:hidden">
          <nav className="flex min-h-full flex-col gap-6 px-6 py-10" aria-label="Móvil">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={linkFor(item.href)}
                className="font-serif text-3xl text-ivory"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button href={linkFor("#contacto")} className="mt-4 w-full" onClick={() => setOpen(false)}>
              Agendar una consulta
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
