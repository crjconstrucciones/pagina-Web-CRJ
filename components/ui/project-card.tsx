'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ImageLightbox } from '@/components/ui/image-lightbox'

interface ProjectCardProps {
  client: string
  description: string
  services: string[]
  /** Ruta de imagen del proyecto dentro de /public */
  image: string
  className?: string
}

/**
 * Tarjeta atómica para mostrar un proyecto destacado.
 * Al hacer clic en la imagen se abre un lightbox con la vista ampliada.
 */
export function ProjectCard({ client, description, services, image, className }: ProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <article
        className={cn(
          'group overflow-hidden rounded-sm bg-white border border-[var(--border)] shadow-sm',
          'hover:border-[var(--gold)] hover:shadow-md transition-all duration-300',
          className,
        )}
      >
        {/* Imagen de referencia — clic abre el lightbox */}
        <button
          type="button"
          aria-label={`Ver imagen ampliada de ${client}`}
          onClick={() => setLightboxOpen(true)}
          className="relative block h-48 w-full overflow-hidden cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
        >
          <Image
            src={image}
            alt={`Proyecto ${client}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradiente inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--section-foreground)]/60 to-transparent" />
          {/* Icono de zoom visible en hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] shadow-lg">
              <ZoomIn size={20} />
            </span>
          </div>
        </button>

        {/* Contenido de texto */}
        <div className="relative p-6 pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[var(--gold)] before:rounded-bl-sm">
          <h3 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-wide text-[var(--gold)]">
            {client}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-[var(--section-muted)]">{description}</p>
          <ul className="flex flex-wrap gap-2" aria-label="Servicios realizados">
            {services.map((service) => (
              <li
                key={service}
                className="rounded-sm border border-[var(--gold)]/40 px-2 py-0.5 text-xs text-[var(--gold)] font-medium"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Lightbox atómico */}
      <ImageLightbox
        src={image}
        alt={`Proyecto ${client}`}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
