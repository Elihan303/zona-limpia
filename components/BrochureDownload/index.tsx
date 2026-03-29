import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BrochureDownload() {
  return (
    <section className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-4 bg-primary rounded-full w-fit mx-auto mb-6">
            <FileText className="h-10 w-10 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Descarga Nuestro Brochure
          </h2>
          <p className="text-muted-foreground mb-8">
            Conoce todos nuestros servicios, precios y más información detallada
            sobre Zona Limpia
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-primary-foreground gap-2"
          >
            <Download className="h-5 w-5" />
            Descargar Brochure Informativo
          </Button>
        </div>
      </div>
    </section>
  );
}
