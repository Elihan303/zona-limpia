import { Shield, Clock, Award, Users } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description:
      "Utilizamos productos y equipos de primera calidad para asegurar resultados óptimos.",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description:
      "Cumplimos con los tiempos acordados, respetando su agenda y necesidades.",
  },
  {
    icon: Award,
    title: "Experiencia",
    description:
      "Más de 8 años en el mercado nos respaldan como líderes en higienización.",
  },
  {
    icon: Users,
    title: "Equipo Profesional",
    description:
      "Personal capacitado y comprometido con la excelencia en el servicio.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/assets/professional-cleaning-team-working-together.jpg"
              alt="Equipo de Zona Limpia trabajando"
              fill
              className="object-cover  object-[center_25%] rounded-2xl shadow-xl"
            />

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10" />
          </div>
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-8 text-foreground">
              Razones para Elegirnos
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
