import { SectionTitle } from '@/components/ui/section-title'
import { CheckCircle2, HardHat, Layers, ShieldCheck } from 'lucide-react'

const PILLARS = [
  {
    Icon: Layers,
    title: 'Precisión y Economía',
    description:
      'Optimizamos costos y cálculo de materiales sin sacrificar calidad en cada proyecto.',
  },
  {
    Icon: ShieldCheck,
    title: 'Calidad Garantizada',
    description:
      'Especialistas en obra blanca, acabados de alta precisión e impermeabilización técnica.',
  },
  {
    Icon: HardHat,
    title: 'Seguridad y Respaldo',
    description:
      'Operamos bajo estricto cumplimiento de normativas RETIE y Trabajo Seguro en Alturas.',
  },
] as const

/**
 * Sección Nosotros con perfil corporativo y tres pilares diferenciadores.
 * Fondo de superficie elevada para alternar visualmente con las demás secciones.
 */
export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="bg-[var(--section-light)] py-20 px-4"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl md:px-8">
        <SectionTitle
          eyebrow="¿Quiénes somos?"
          title="Nosotros"
          id="about-heading"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Texto corporativo */}
          <div>
            <p className="text-base leading-relaxed text-[var(--section-muted)] md:text-lg">
              <strong className="font-semibold text-[var(--section-foreground)]">CRJ CONSTRUCCIONES</strong> es una
              firma contratista familiar especializada en la ejecución, mantenimiento y optimización
              de infraestructura civil, comercial y residencial. Respaldados por una sólida
              tradición técnica y certificación del SENA, ofrecemos soluciones versátiles que se
              adaptan a cada presupuesto.
            </p>
            <div className="mt-6 h-0.5 w-12 bg-[var(--gold)]" />
            <p className="mt-4 text-sm leading-relaxed text-[var(--section-muted)]">
              Más de una década construyendo confianza en el Huila, con proyectos que van desde
              vivienda residencial hasta grandes obras para entidades bancarias e infraestructura vial.
            </p>

            {/* Lista de atributos */}
            <ul className="mt-8 flex flex-col gap-3" aria-label="Atributos corporativos">
              {[
                'Certificación SENA en construcción y acabados',
                'Cumplimiento estricto de normas RETIE',
                'Trabajo seguro en alturas certificado',
                'Adaptación a todo tipo de presupuesto',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--gold)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[var(--section-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pilares */}
          <div className="grid gap-5 sm:grid-cols-1">
            {PILLARS.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-5 rounded-sm border border-[var(--border)] bg-white p-5 shadow-sm hover:border-[var(--gold)] transition-colors duration-300"
              >
                <div className="flex-shrink-0 text-[var(--gold)]">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-widest text-[var(--section-foreground)]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--section-muted)]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
