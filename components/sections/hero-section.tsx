import { GoldButton } from '@/components/ui/gold-button'
import { ValueBadge } from '@/components/ui/value-badge'
import { Award, Clock, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

const VALUES = [
  {
    Icon: ShieldCheck,
    title: 'Calidad Garantizada',
    description: 'Materiales de primera calidad.',
  },
  {
    Icon: Clock,
    title: 'Cumplimiento',
    description: 'Entregas en tiempos acordados.',
  },
  {
    Icon: Award,
    title: 'Experiencia',
    description: 'Profesionales altamente capacitados.',
  },
] as const

/**
 * Sección Hero de pantalla completa con imagen de fondo oscura,
 * titular en Oswald y franja de valores corporativos en la parte inferior.
 */
export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col"
      aria-label="Inicio – CRJ Construcciones"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-building.png"
          alt="Edificio moderno construido por CRJ Construcciones"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay oscuro progresivo */}
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.18_0.055_264/0.92)_40%,transparent_100%)]" />
      </div>

      {/* Contenido principal hero */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-32 md:px-8 md:py-40">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Neiva, Huila – Colombia
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold uppercase leading-[1.05] tracking-wide text-foreground md:text-6xl lg:text-7xl text-balance">
              Construimos{' '}
              <span className="text-[var(--gold)]">tus ideas,</span>
              <br />
              creamos{' '}
              <span className="text-[var(--gold)]">realidades</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/75 md:text-lg">
              Soluciones integrales en obras civiles, estructuras y acabados arquitectónicos en el Huila.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <GoldButton href="#servicios" size="lg">
                Conoce más
              </GoldButton>
              <GoldButton href="#contacto" variant="outline" size="lg">
                Cotizar obra
              </GoldButton>
            </div>
          </div>
        </div>
      </div>

      {/* Franja de valores */}
      <div className="relative z-10 w-full bg-[oklch(0.14_0.055_264/0.97)] border-t border-[var(--gold)]/20">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <ValueBadge key={value.title} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
