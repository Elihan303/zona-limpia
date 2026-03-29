import { Target, Eye, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Proporcionar servicios de higienización de alta calidad que superen las expectativas de nuestros clientes, contribuyendo a espacios más seguros y saludables.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Ser la empresa líder en higienización industrial en República Dominicana, reconocida por nuestra excelencia, innovación y compromiso con el medio ambiente.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Integridad, responsabilidad, calidad, compromiso con el cliente, trabajo en equipo y respeto por el medio ambiente son los pilares que guían nuestro trabajo.",
  },
];

export function MissionVisionValues() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra Filosofía
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Los principios que guían cada acción de nuestro equipo
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Card
              key={index}
              className="text-center border-border hover:border-primary/50 transition-colors"
            >
              <CardHeader>
                <div className="mx-auto p-4 bg-primary rounded-full w-fit mb-4">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
