import { cn } from '@/lib/utils'

interface SectionTitleProps {
  /** Subtítulo pequeño sobre el título principal */
  eyebrow?: string
  /** Título principal */
  title: string
  /** Descripción debajo del título */
  description?: string
  /** Alineación del texto */
  align?: 'left' | 'center'
  className?: string
  /** ID para aria-labelledby */
  id?: string
  /**
   * true  → texto blanco (secciones con fondo oscuro: Hero, Header, Footer)
   * false → texto azul oscuro (secciones con fondo claro) — valor por defecto
   */
  dark?: boolean
}

/**
 * Componente atómico reutilizable para encabezados de sección.
 * Utiliza Oswald (--font-heading) para el título.
 * Prop `dark` controla si el texto es blanco (oscuro) o azul oscuro (claro).
 */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  id,
  dark = false,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold tracking-[0.2em] uppercase text-[var(--gold)]">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'font-[family-name:var(--font-heading)] text-3xl font-bold uppercase tracking-wide md:text-4xl lg:text-5xl text-balance',
          dark ? 'text-foreground' : 'text-[var(--section-foreground)]',
        )}
      >
        {title}
      </h2>
      {/* Línea dorada decorativa */}
      <div
        className={cn(
          'mt-4 h-1 w-16 bg-[var(--gold)]',
          align === 'center' ? 'mx-auto' : 'ml-0',
        )}
      />
      {description && (
        <p
          className={cn(
            'mt-5 max-w-2xl leading-relaxed md:text-lg',
            dark ? 'text-muted-foreground' : 'text-[var(--section-muted)]',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
