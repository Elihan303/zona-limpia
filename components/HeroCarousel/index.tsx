"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link"

const slides = [
  {
    title: "Higienización Industrial Profesional",
    description: "Más de 8 años de experiencia garantizando espacios limpios y seguros",
    image: "/assets/industrial-cleaning-professional-team.jpg",
  },
  {
    title: "Tratamiento de Agua",
    description: "Soluciones integrales para el tratamiento y purificación de agua",
    image: "/assets/water-tank-cleaning-service.jpg",
  },
  {
    title: "Limpieza Especializada",
    description: "Servicios de limpieza profunda para industrias y empresas",
    image: "/assets/professional-cleaning-team-working-together.jpg",
  },
]


export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
            <Image 
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-[center_25%]"
            priority={index === 0}
            sizes="100vw"
            quality={90}
          />


          
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
          <div className="relative h-full container mx-auto px-4 md:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl text-background">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance leading-tight">{slide.title}</h1>
              <p className="text-base md:text-lg lg:text-xl mb-6 text-background/95 max-w-xl">{slide.description}</p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                  <Link href="/contacto">Solicitar Cotización</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-background text-background hover:bg-background hover:text-foreground bg-transparent"
                >
                  <Link href="/servicios">Ver Servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/20 hover:bg-background/40 rounded-full transition-colors z-10 backdrop-blur-sm"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6 text-background" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/20 hover:bg-background/40 rounded-full transition-colors z-10 backdrop-blur-sm"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-6 w-6 text-background" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-110" : "bg-background/50 hover:bg-background/70"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
