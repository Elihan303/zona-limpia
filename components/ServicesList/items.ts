import { CategoriesServices } from "@/constants/services";
import { Droplets, SprayCan, Wrench } from "lucide-react";

export const categories = [
  {
    id: CategoriesServices.water,
    title: "Agua",
    icon: Droplets,
    description:
      "Servicios profesionales de perforación, tratamiento y mantenimiento de sistemas de agua",
  },
  {
    id: CategoriesServices.sanitation,
    title: "Saneamiento",
    icon: SprayCan,
    description:
      "Limpieza industrial especializada para todo tipo de instalaciones y superficies",
  },
  {
    id: CategoriesServices.reforms,
    title: "Reformas",
    icon: Wrench,
    description: "Construcción y mejoras en sistemas de drenaje y agua potable",
  },
];

const WaterServices = [
  {
    title: "Perforación de Pozos",
    description:
      "Servicio profesional de perforación de pozos de agua y filtrantes, con equipos especializados para garantizar el acceso a agua subterránea de calidad.",
    image: "/assets/well-drilling-truck.jpg",
    category: CategoriesServices.water,
  },
  {
    title: "Tratamiento de Agua",
    description:
      "Venta e instalación de equipos de tratamiento de agua, incluyendo sistemas de filtración, purificación y potabilización para uso residencial e industrial.",
    image: "/assets/water-treatment-system.jpg",
    category: CategoriesServices.water,
  },
  {
    title: "Limpieza de Cisternas",
    description:
      "Limpieza y desinfección profesional de cisternas y aljibes, garantizando agua potable segura y libre de contaminantes para su consumo.",
    image: "/assets/water-tank-cleaning-service.jpg",
    category: CategoriesServices.water,
  },
  {
    title: "Limpieza de cisternas y aljibes",
    description:
      "Limpieza y desinfección profesional de cisternas y aljibes, garantizando agua potable segura y libre de contaminantes para su consumo.",
    image: "/assets/water-tank-cleaning-service.jpg",
    category: CategoriesServices.water,
  },
  {
    title: "Limpieza de pozo séptico y trampa de grasa",
    description:
      "Servicio de succión y mantenimiento preventivo para evitar obstrucciones, malos olores y fallas en el sistema sanitario.",
    image: "/assets/water-tank-cleaning-service.jpg",
    category: CategoriesServices.water,
  },
  {
    title: "Limpieza y destape de tuberías a presión",
    description:
      "Desobstrucción eficiente mediante equipos de alta presión, restaurando el flujo adecuado en redes sanitarias y pluviales.",
    image: "/assets/water-tank-cleaning-service.jpg",
    category: CategoriesServices.water,
  },
];
const SanitationServices = [
  {
    title: "Limpieza de Ductos y Campanas",
    description:
      "Servicio especializado de limpieza de ductos de ventilación y campanas de grasa para restaurantes, hoteles e industrias alimentarias.",
    image: "/assets/duct-cleaning-work.jpg",
    category: CategoriesServices.sanitation,
  },
  {
    title: "Limpieza de tapizados industriales",
    description:
      "Limpieza profunda de mobiliarios y superficies textiles, removiendo manchas, polvo y agentes contaminantes.",
    image: "/assets/duct-cleaning-work.jpg",
    category: CategoriesServices.sanitation,
  },
  {
    title: "Limpieza y pulido de pisos y revestimientos",
    description:
      "Restauración y mantenimiento de superficies, devolviendo brillo, uniformidad y prolongando su vida útil.",
    image: "/assets/floor-cleaning-machine.jpg",
    category: CategoriesServices.sanitation,
  },
  {
    title: "Limpieza de cristales en altura",
    description:
      "Servicio especializado en fachadas y superficies elevadas, con personal capacitado y equipos de seguridad certificados.",
    image: "/assets/pressure-washing-floor.jpg",
    category: CategoriesServices.sanitation,
  },
  {
    title: "Limpieza de Obras Civiles",
    description:
      "Limpieza gruesa y fina para entrega de obras civiles, preparando espacios nuevos para su inauguración con los más altos estándares.",
    image: "/assets/cleaning-crew-team.jpg",
    category: CategoriesServices.sanitation,
  },
];
const ReformsServices = [
  {
    title: "Drenajes Pluviales",
    description:
      "Construcción y mantenimiento de sistemas de drenajes pluviales, asegurando el correcto manejo de aguas lluvia en su propiedad.",
    image: "/assets/water-treatment-facility-professional.jpg",
    category: CategoriesServices.reforms,
  },
  {
    title: "Remodelación de sistema de agua potable",
    description:
      "Optimización y renovación de redes de agua potable, mejorando eficiencia, presión y calidad del suministro.",
    image: "/assets/boiler-maintenance.jpg",
    category: CategoriesServices.reforms,
  },
  {
    title: "Mejoras en sistemas sanitarios",
    description:
      "Adecuación y modernización de sistemas sanitarios para garantizar funcionalidad, cumplimiento normativo y durabilidad.",
    image: "/assets/boiler-maintenance.jpg",
    category: CategoriesServices.reforms,
  },
];
export const services = [
  ...WaterServices,
  ...SanitationServices,
  ...ReformsServices,
];
