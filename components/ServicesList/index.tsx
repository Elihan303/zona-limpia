"use client";
import { useState } from "react";
import { ServiceItem } from "@/components/ServiceItem";
import { categories, services } from "./items";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { CategoriesServicesLabels } from "@/constants/services";

type Service = (typeof services)[number];

export function ServicesList() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
                    imagePosition={service.imagePosition}
                    onViewMore={() => setSelectedService(service)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {/* Modal de detalles del servicio */}
      <Dialog
        open={!!selectedService}
        onOpenChange={(open) => !open && setSelectedService(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedService.title}
                </DialogTitle>
              </DialogHeader>

              <div className="relative h-56 rounded-lg overflow-hidden my-4">
                <Image
                  fill
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {CategoriesServicesLabels[selectedService.category]}
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <Button asChild className="flex-1">
                    <Link href="/contacto">Solicitar Cotización</Link>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedService(null)}
                    className="flex-1"
                  >
                    Cerrar
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
