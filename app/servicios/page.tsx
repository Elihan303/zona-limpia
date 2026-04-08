import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhyHireUs } from "@/components/WhyHireUs";
import { ServicesList } from "@/components/ServicesList";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata = {
  title: "Servicios - Zona Limpia",
  description:
    "Conoce todos nuestros servicios de higienización industrial, limpieza y tratamiento de agua.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero de servicios */}
        <section className="relative py-20 md:py-32 bg-foreground text-background">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url(/assets/services-hero-bg.jpg)" }}
          />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nuestros Servicios
              </h1>
              <p className="text-xl text-background/80">
                Soluciones integrales de higienización para empresas e
                industrias
              </p>
            </div>
          </div>
        </section>

        <WhyHireUs />
        <ServicesList />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
