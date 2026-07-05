import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface ValueBadgeProps {
  Icon: LucideIcon
  title: string
  description: string
  className?: string
}

/**
 * Badge atómico para mostrar valores corporativos en la barra inferior del hero.
 * Icono dorado a la izquierda, título en bold, descripción en muted.
 */
export function ValueBadge({ Icon, title, description, className }: ValueBadgeProps) {
  return (
    <div className={cn('flex items-start gap-4', className)}>
      <div
        className="mt-1 flex-shrink-0 text-[var(--gold)]"
        aria-hidden="true"
      >
        <Icon className="h-7 w-7" />
      </div>
      <div>
        <p className="font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-widest text-foreground">
          {title}
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}
