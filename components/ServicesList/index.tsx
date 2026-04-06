import { ServiceItem } from "@/components/ServiceItem";

const services = [
  {
    title: "Limpieza de Cisternas",
    description:
      "Servicio profesional de limpieza y desinfección de cisternas y tanques de agua, garantizando agua potable segura para su consumo.",
    image: "/cistern-cleaning-service.jpg",
  },
  {
    title: "Fumigación Industrial",
    description:
      "Control de plagas profesional para industrias y empresas, utilizando productos seguros y aprobados por las autoridades sanitarias.",
    image: "/industrial-fumigation-service.jpg",
  },
  {
    title: "Limpieza de Oficinas",
    description:
      "Mantenimiento y limpieza integral de espacios de trabajo, creando ambientes saludables y productivos para su equipo.",
    image: "/office-cleaning-professional.jpg",
  },
  {
    title: "Tratamiento de Aguas",
    description:
      "Análisis, tratamiento y purificación de agua para uso industrial y comercial, cumpliendo con todas las normativas vigentes.",
    image: "/water-treatment-service.jpg",
  },
  {
    title: "Desinfección Especializada",
    description:
      "Protocolos de desinfección profunda para áreas de alto tráfico, hospitales, restaurantes y espacios públicos.",
    image: "/specialized-disinfection-service.jpg",
  },
  {
    title: "Mantenimiento de Sistemas",
    description:
      "Mantenimiento preventivo y correctivo de sistemas hidráulicos, aires acondicionados y ductos de ventilación.",
    image: "/maintenance-systems-service.jpg",
  },
];

export function ServicesList() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
