import { ServiceItem } from "@/components/ServiceItem";
import { categories, services } from "./items";

export function ServicesList() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {categories.map((category) => {
          const categoryServices = services.filter(
            (s) => s.category === category.id,
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
