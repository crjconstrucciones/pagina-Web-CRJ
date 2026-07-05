'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ImageLightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

/**
 * Componente atómico de lightbox: muestra una imagen expandida sobre un
 * backdrop oscuro con animación de entrada. Se cierra con el botón X,
 * clic fuera de la imagen o tecla Escape.
 */
export function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Imagen ampliada: ${alt}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        aria-label="Cerrar imagen"
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] hover:bg-[var(--gold-dark)] transition-colors duration-200"
      >
        <X size={20} />
      </button>

      {/* Contenedor de la imagen — detiene la propagación para no cerrar al hacer clic en ella */}
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-sm shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="h-auto w-full object-contain"
          priority
        />
        {/* Pie de imagen */}
        <div className="bg-[var(--background)] px-4 py-3">
          <p className="font-[family-name:var(--font-heading)] text-sm uppercase tracking-widest text-[var(--gold)]">
            {alt}
          </p>
        </div>
      </div>
    </div>
  )
}
