"use client";

import { GoldButton } from "@/components/ui/gold-button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
] as const;

/**
 * Header independiente con navegación interna (anclas).
 * Sticky con efecto de fondo sólido al hacer scroll.
 * Incluye menú hamburguesa para móvil.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--surface)] shadow-lg shadow-black/40"
          : "bg-background/80 backdrop-blur-md",
      )}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex flex-col items-start leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
          aria-label="CRJ Construcciones – Ir al inicio"
        >
          <img
            src="/logov.png"
            alt="Logo CRJ Construcciones y Remodelación"
            className="h-18 w-auto object-contain"
          />
        </a>

        {/* Navegación desktop */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)] focus-visible:outline-none"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <GoldButton href="#contacto" size="sm">
            Cotizar
          </GoldButton>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          className="flex items-center justify-center rounded-sm p-2 text-foreground transition-colors hover:text-[var(--gold)] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="flex flex-col gap-1 bg-[var(--surface)] px-4 pb-6 pt-2"
          aria-label="Menú de navegación móvil"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className="py-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-[var(--gold)] border-b border-[var(--border)] last:border-0"
            >
              {label}
            </a>
          ))}
          <div className="mt-4">
            <GoldButton
              href="#contacto"
              size="sm"
              className="w-full"
              onClick={handleNavClick}
            >
              Cotizar
            </GoldButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
