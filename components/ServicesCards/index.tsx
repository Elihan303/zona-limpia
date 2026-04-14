import { Droplets, SprayCan, Wrench } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Droplets,
    title: "Agua",
    items: [
      "Limpieza y desinfección de cisternas",
      "Tratamiento de agua potable",
      "Mantenimiento de sistemas hidráulicos",
    ],
  },
  {
    icon: SprayCan,
    title: "Limpieza",
    items: [
      "Limpieza profunda industrial",
      "Desinfección de áreas comunes",
      "Sanitización de espacios comerciales",
    ],
  },
  {
    icon: Wrench,
    title: "Reformas",
    items: [
      "Remodelación de instalaciones",
      "Reparación de infraestructura",
      "Mejoras en sistemas sanitarios",
    ],
  },
];

export function ServicesCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de higienización para todo tipo de
            industrias
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-colors hover:shadow-lg"
            >
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
