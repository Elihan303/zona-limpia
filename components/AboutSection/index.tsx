import { Shield, Users, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">¿Quiénes Somos?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Somos una empresa de higienización industrial, con más de ocho años de experiencia, contamos con
            profesionales capacitados en el área, para garantizar un servicio de calidad.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Calidad Garantizada</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Equipo Profesional</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">8+ Años de Experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}