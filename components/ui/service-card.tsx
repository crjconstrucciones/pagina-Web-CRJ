import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  Icon: LucideIcon
  title: string
  description: string
  className?: string
}

/**
 * Tarjeta atómica para mostrar un servicio.
 * Icono dorado centrado, título en Oswald, descripción en Inter.
 */
export function ServiceCard({ Icon, title, description, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'group flex flex-col items-center text-center p-8',
        'bg-white border border-[var(--border)] rounded-sm shadow-sm',
        'hover:border-[var(--gold)] hover:shadow-md transition-all duration-300',
        className,
      )}
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--gold-foreground)] transition-all duration-300">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="mb-3 font-[family-name:var(--font-heading)] text-base font-bold uppercase tracking-widest text-[var(--section-foreground)]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--section-muted)]">{description}</p>
    </article>
  )
}
