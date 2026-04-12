// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import { ContactForm } from "@/components/contact-form";
// import { OfficeInfo } from "@/components/office-info";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OfficeInfo } from "@/components/OfficeInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Contacto - Zona Limpia",
  description:
    "Contáctanos para solicitar una cotización o más información sobre nuestros servicios de higienización.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Mapa */}
        <section className="w-full h-[400px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0527429313156!2d-68.40252971758231!3d18.616697321116018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea8933e6d5301c7%3A0x855fe5b4b105c071!2sZona%20Limpia!5e0!3m2!1ses!2sdo!4v1775865342751!5m2!1ses!2sdo"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Zona Limpia"
          />
        </section>

        {/* Sección de contacto */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Escríbenos
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                ¿Tienes alguna pregunta o necesitas una cotización? Completa el
                formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Información de oficina */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Nuestra Oficina</CardTitle>
                </CardHeader>
                <CardContent>
                  <OfficeInfo />
                </CardContent>
              </Card>

              {/* Formulario */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Envíanos un Mensaje</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
