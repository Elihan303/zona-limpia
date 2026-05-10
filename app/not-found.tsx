import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Droplets, Home, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-lg mx-auto">
          {/* Icono */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-6 bg-primary/10 rounded-full">
                <Droplets className="h-16 w-16 text-primary" />
              </div>
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                404
              </span>
            </div>
          </div>

          {/* Texto */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Página no encontrada
          </h1>
          <p className="text-muted-foreground text-lg mb-2">
            La página que buscas no existe o fue movida.
          </p>
          <p className="text-muted-foreground mb-10">
            Pero podemos ayudarte a encontrar lo que necesitas.
          </p>

          {/* Acciones */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              className="bg-primary hover:bg-accent text-primary-foreground gap-2"
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                Ir al inicio
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/servicios">
                <ArrowLeft className="h-4 w-4" />
                Ver servicios
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/contacto">
                <Phone className="h-4 w-4" />
                Contacto
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
