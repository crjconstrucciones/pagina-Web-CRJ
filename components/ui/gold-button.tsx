import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  href?: string
}

/**
 * Botón atómico CRJ con estilo dorado.
 * variant="solid"   → fondo dorado
 * variant="outline" → borde dorado, fondo transparente
 */
export function GoldButton({
  variant = 'solid',
  size = 'md',
  className,
  children,
  href,
  ...props
}: GoldButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold tracking-[0.12em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer'

  const variants = {
    solid:
      'bg-[var(--gold)] text-[var(--gold-foreground)] hover:bg-[var(--gold-dark)] active:scale-[0.98]',
    outline:
      'border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)] active:scale-[0.98]',
  }

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
