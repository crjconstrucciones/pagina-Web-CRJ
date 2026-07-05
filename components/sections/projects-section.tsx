import { ProjectCard } from '@/components/ui/project-card'
import { SectionTitle } from '@/components/ui/section-title'

const PROJECTS = [
  {
    client: 'Banco Davivienda (Calle 10)',
    description:
      'Reingeniería estructural e impermeabilización completa de cubierta y restauración integral de fachada del edificio bancario.',
    services: ['Impermeabilización', 'Estructuras', 'Fachadas'],
    image: '/images/projects/davivienda-calle10.png',
  },
  {
    client: 'Condominio Davivienda',
    description:
      'Mantenimiento técnico de fachadas en altura y pulido especializado de mármol en áreas comunes del condominio.',
    services: ['Fachadas en Altura', 'Acabados', 'Pulido Mármol'],
    image: '/images/projects/condominio-davivienda.png',
  },
  {
    client: 'Peajes Neiva y El Pata',
    description:
      'Montaje de cubiertas estructurales metálicas para los puntos de peaje de la entrada a Neiva y el sector de El Pata.',
    services: ['Estructuras Metálicas', 'Cubiertas', 'Obra Civil'],
    image: '/images/projects/peajes-neiva.png',
  },
  {
    client: 'Banco Agrario de Colombia',
    description:
      'Renovación del sistema de impermeabilización en losa superior y adecuación de espacios de oficinas internas.',
    services: ['Impermeabilización', 'Adecuación Oficinas'],
    image: '/images/projects/banco-agrario.png',
  },
  {
    client: 'Coomotor (Punto de Servicios)',
    description:
      'Remodelación integral de fachada comercial, instalación de pisos industriales y aplicación de pintura técnica.',
    services: ['Fachada Comercial', 'Pisos Industriales', 'Pintura Técnica'],
    image: '/images/projects/coomotor.png',
  },
]

/**
 * Sección de Experiencia Destacada (Proyectos) con tarjetas en grid de 2 columnas.
 * Fondo de superficie elevada para alternar visualmente.
 */
export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="bg-[var(--section-light)] py-20 px-4"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl md:px-8">
        <SectionTitle
          eyebrow="Experiencia destacada"
          title="Proyectos"
          description="Obras realizadas para entidades bancarias, infraestructura vial y proyectos comerciales en la región."
          id="projects-heading"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.client} {...project} />
          ))}
        </div>

        {/* Contador de impacto */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-4 [--border:oklch(0.88_0.01_264)]">
          {[
            { value: '+50', label: 'Proyectos completados' },
            { value: '+10', label: 'Años de experiencia' },
            { value: '100%', label: 'Clientes satisfechos' },
            { value: 'SENA', label: 'Certificación técnica' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--gold)] md:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[var(--section-muted)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
