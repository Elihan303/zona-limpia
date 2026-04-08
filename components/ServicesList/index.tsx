import { ServiceItem } from "@/components/ServiceItem";
import { Droplets, SprayCan, Wrench } from "lucide-react";

const categories = [
  {
    id: "agua",
    title: "Agua",
    icon: Droplets,
    description:
      "Servicios profesionales de perforación, tratamiento y mantenimiento de sistemas de agua",
  },
  {
    id: "saneamiento",
    title: "Saneamiento",
    icon: SprayCan,
    description:
      "Limpieza industrial especializada para todo tipo de instalaciones y superficies",
  },
  {
    id: "reformas",
    title: "Reformas",
    icon: Wrench,
    description: "Construcción y mejoras en sistemas de drenaje y agua potable",
  },
];

const services = [
  {
    title: "Perforación de Pozos",
    description:
      "Servicio profesional de perforación de pozos de agua y filtrantes, con equipos especializados para garantizar el acceso a agua subterránea de calidad.",
    image: "/assets/well-drilling-truck.jpg",
    category: "Agua",
  },
  {
    title: "Tratamiento de Agua",
    description:
      "Venta e instalación de equipos de tratamiento de agua, incluyendo sistemas de filtración, purificación y potabilización para uso residencial e industrial.",
    image: "/assets/water-treatment-system.jpg",
    category: "Agua",
  },
  {
    title: "Limpieza de Cisternas",
    description:
      "Limpieza y desinfección profesional de cisternas y aljibes, garantizando agua potable segura y libre de contaminantes para su consumo.",
    image: "/assets/water-tank-cleaning-service.jpg",
    category: "Agua",
  },
  {
    title: "Limpieza de Ductos y Campanas",
    description:
      "Servicio especializado de limpieza de ductos de ventilación y campanas de grasa para restaurantes, hoteles e industrias alimentarias.",
    image: "/assets/duct-cleaning-work.jpg",
    category: "Saneamiento",
  },
  {
    title: "Limpieza de Pisos",
    description:
      "Limpieza profesional y pulido de pisos y revestimientos con equipos industriales de última generación para todo tipo de superficies.",
    image: "/assets/floor-cleaning-machine.jpg",
    category: "Saneamiento",
  },
  {
    title: "Limpieza de Obras Civiles",
    description:
      "Limpieza gruesa y fina para entrega de obras civiles, preparando espacios nuevos para su inauguración con los más altos estándares.",
    image: "/assets/cleaning-crew-team.jpg",
    category: "Saneamiento",
  },
  {
    title: "Limpieza a Presión",
    description:
      "Limpieza y destape de tuberías a presión, así como lavado de superficies exteriores con hidrolavadoras profesionales.",
    image: "/assets/pressure-washing-floor.jpg",
    category: "Saneamiento",
  },
  {
    title: "Mantenimiento de Sistemas",
    description:
      "Mejoras en sistemas sanitarios, mantenimiento de equipos industriales y reparación de infraestructura hidráulica.",
    image: "/assets/boiler-maintenance.jpg",
    category: "Reformas",
  },
  {
    title: "Drenajes Pluviales",
    description:
      "Construcción y mantenimiento de sistemas de drenajes pluviales, asegurando el correcto manejo de aguas lluvia en su propiedad.",
    image: "/assets/water-treatment-facility-professional.jpg",
    category: "Reformas",
  },
];

export function ServicesList() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {categories.map((category) => {
          const categoryServices = services.filter(
            (s) => s.category === category.title,
          );
          return (
            <div key={category.id} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {categoryServices.map((service, index) => (
                  <ServiceItem
                    key={index}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
