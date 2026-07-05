import { ServiceCard } from '@/components/ui/service-card'
import { SectionTitle } from '@/components/ui/section-title'
import { Droplets, HardHat, Layers, PaintBucket, Wrench, Zap } from 'lucide-react'

const SERVICES = [
  {
    Icon: PaintBucket,
    title: 'Obra Blanca y Acabados',
    description:
      'Estuco, pintura comercial y residencial, Drywall, cielorrasos y revestimientos de alta precisión.',
  },
  {
    Icon: Droplets,
    title: 'Impermeabilización',
    description:
      'Tratamiento técnico de filtraciones en losas, techos y fachadas con mantos asfálticos y polímeros.',
  },
  {
    Icon: Zap,
    title: 'Ingeniería Eléctrica',
    description:
      'Redes de baja tensión, tableros de distribución e iluminación eficiente bajo norma RETIE.',
  },
  {
    Icon: Wrench,
    title: 'Plomería',
    description:
      'Instalación, mantenimiento y reparación de redes hidráulicas y sanitarias residenciales y comerciales.',
  },
  {
    Icon: Layers,
    title: 'Estructuras y Fachadas',
    description:
      'Montaje y mantenimiento de cubiertas, techos, canales pluviales y restauración de fachadas en altura.',
  },
  {
    Icon: HardHat,
    title: 'Obras Civiles',
    description:
      'Construcción y desarrollo de proyectos civiles: vías, estructuras de concreto y obras de urbanismo.',
  },
] as const

/**
 * Sección Nuestros Servicios con grid de tarjetas en 3 columnas.
 * Fondo oscuro (página principal) para alternar con la sección Nosotros.
 */
export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="bg-[var(--section-alt)] py-20 px-4"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl md:px-8">
        <SectionTitle
          eyebrow="Lo que hacemos"
          title="Nuestros Servicios"
          description="Soluciones integrales de construcción y remodelación adaptadas a cada presupuesto y necesidad."
          id="services-heading"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
