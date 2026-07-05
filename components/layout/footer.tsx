import { GoldButton } from '@/components/ui/gold-button'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'

/**
 * Footer independiente con información de contacto de CRJ Construcciones.
 * Sin formulario – solo datos de contacto y CTA de cotización.
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contacto"
      className="bg-[oklch(0.10_0.004_264)] border-t border-[var(--border)]"
      role="contentinfo"
      aria-label="Pie de página – Contacto"
    >
      {/* Franja CTA superior */}
      <div className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl text-balance">
                ¡Cotiza tu proyecto con nosotros!
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Estamos listos para hacer realidad tu obra con seriedad y respaldo técnico.
              </p>
            </div>
            <GoldButton href="tel:3182228500" size="lg" className="flex-shrink-0">
              Llamar ahora
            </GoldButton>
          </div>
        </div>
      </div>

      {/* Contenido principal del footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Columna 1 – Identidad */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-[var(--gold)]" aria-hidden="true" />
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold uppercase tracking-widest text-[var(--gold)]">
                CRJ Construcciones
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Firma contratista familiar especializada en obras civiles, comerciales y residenciales
              en el Huila. Respaldados por certificación SENA y más de una década de experiencia.
            </p>
            <div className="mt-4 h-0.5 w-12 bg-[var(--gold)]" />
            <p className="mt-3 text-xs text-muted-foreground">
              NIT: 1.075.274.448-5
            </p>
          </div>

          {/* Columna 2 – Navegación */}
          <nav aria-label="Navegación del footer">
            <h3 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-widest text-foreground">
              Secciones
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Proyectos', href: '#proyectos' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[var(--gold)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Columna 3 – Contacto */}
          <address className="not-italic">
            <h3 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-widest text-foreground">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--gold)]" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">
                  Corregimiento El Caguán, Neiva – Huila
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-[var(--gold)]" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href="tel:3182228500"
                    className="text-sm text-muted-foreground transition-colors hover:text-[var(--gold)]"
                  >
                    318 222 8500
                  </a>
                  <a
                    href="tel:3026009798"
                    className="text-sm text-muted-foreground transition-colors hover:text-[var(--gold)]"
                  >
                    302 600 9798
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--gold)]" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href="mailto:crj.construcciones@hotmail.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-[var(--gold)]"
                  >
                    crj.construcciones@hotmail.com
                  </a>
                  <a
                    href="mailto:javier-0931@hotmail.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-[var(--gold)]"
                  >
                    javier-0931@hotmail.com
                  </a>
                </div>
              </li>
            </ul>
          </address>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} CRJ Construcciones. Rep. Legal: Carlos Ralthy Javier Pérez Vargas.
          </p>
          <p className="text-xs text-muted-foreground">
            Neiva, Huila – Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
