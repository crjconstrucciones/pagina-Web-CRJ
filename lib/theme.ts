/**
 * CRJ Construcciones – Archivo central de tema
 * ──────────────────────────────────────────────
 * Todas las clases de color y variantes están definidas aquí.
 * Para cambiar colores globalmente, modifica los tokens en
 * `app/globals.css` (sección :root) y actualiza las clases
 * de Tailwind correspondientes en este archivo.
 *
 * Colores principales:
 *   Fondo:      bg-background  (#111214)
 *   Superficie: bg-[--surface] (#1e2024)
 *   Dorado:     bg-[--gold]    (~#C9921A)
 *   Texto:      text-foreground (#f5f5f5)
 */

export const theme = {
  // ── Fondos ──────────────────────────────────
  bg: {
    page: 'bg-background',
    surface: 'bg-[var(--surface)]',
    card: 'bg-card',
    dark: 'bg-[oklch(0.10_0.004_264)]',
  },

  // ── Textos ──────────────────────────────────
  text: {
    base: 'text-foreground',
    muted: 'text-muted-foreground',
    gold: 'text-[var(--gold)]',
    dark: 'text-[var(--gold-foreground)]',
    heading: 'font-[family-name:var(--font-heading)] tracking-wide uppercase',
  },

  // ── Botones ─────────────────────────────────
  button: {
    primary:
      'bg-[var(--gold)] text-[var(--gold-foreground)] hover:bg-[var(--gold-dark)] font-semibold tracking-wider uppercase transition-colors duration-200',
    outline:
      'border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)] font-semibold tracking-wider uppercase transition-colors duration-200',
    ghost:
      'text-foreground hover:text-[var(--gold)] transition-colors duration-200',
  },

  // ── Íconos ──────────────────────────────────
  icon: {
    gold: 'text-[var(--gold)]',
    size: {
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
    },
  },

  // ── Divisores ───────────────────────────────
  divider: {
    gold: 'h-1 w-16 bg-[var(--gold)]',
  },

  // ── Secciones ───────────────────────────────
  section: {
    dark: 'bg-background',
    surface: 'bg-[var(--surface)]',
    padding: 'py-20 px-4',
  },

  // ── Tarjetas ────────────────────────────────
  card: {
    base: 'bg-card border border-[var(--border)] rounded-sm p-6',
    hover: 'hover:border-[var(--gold)] transition-colors duration-300',
  },
} as const
