import { Building2, Factory, ClipboardCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const serviceTypes = [
  {
    icon: Building2,
    title: "Servicios Empresariales",
    description:
      "Soluciones de higienización diseñadas para oficinas, comercios y espacios corporativos.",
  },
  {
    icon: Factory,
    title: "Servicios Industriales",
    description:
      "Limpieza especializada para plantas de producción, almacenes y facilidades industriales.",
  },
  {
    icon: ClipboardCheck,
    title: "Servicios de Asesoría",
    description:
      "Consultoría profesional en protocolos de higiene y cumplimiento de normativas sanitarias.",
  },
];

export function ServiceTypes() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tipos de Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones adaptadas a cada sector y necesidad
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceTypes.map((service, index) => (
            <Card
              key={index}
              className="text-center border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <CardHeader>
                <div className="mx-auto p-4 bg-secondary rounded-full w-fit mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="/servicios">Ver más</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
