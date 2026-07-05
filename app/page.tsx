import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { AboutSection } from '@/components/sections/about-section'
import { HeroSection } from '@/components/sections/hero-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ServicesSection } from '@/components/sections/services-section'

/**
 * Página principal de CRJ Construcciones.
 * Ensambla Header, todas las secciones y Footer de forma declarativa.
 * Cada sección es un componente independiente con su propio id para la navegación.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}
