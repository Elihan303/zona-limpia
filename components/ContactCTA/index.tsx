import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para un espacio más limpio?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Contáctenos hoy mismo y reciba una cotización gratuita para sus
            necesidades de higienización
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2 bg-background text-foreground hover:bg-background/90"
            >
              <a href="tel:8296579315">
                <Phone className="h-5 w-5" />
                829-657-9315
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <a href="mailto:ventas@zonalimpia.com.do">
                <Mail className="h-5 w-5" />
                ventas@zonalimpia.com.do
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
