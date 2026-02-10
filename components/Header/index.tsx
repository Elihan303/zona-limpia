"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo y eslogan */}
          <Link href="/" className="md:flex items-center gap-2">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="Zona Limpia Logo"
            />
            <div className="flex justify-center ">
              <span className="text-xs text-muted-foreground hidden sm:block">
                Higienizando espacios!
              </span>
            </div>
          </Link>
          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Teléfono y CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:8296579315"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>829-657-9315</span>
            </a>
            <Button
              asChild
              className="bg-primary hover:bg-accent text-primary-foreground"
            >
              <Link href="/contacto">Cotización</Link>
            </Button>
          </div>

          {/* Menú móvil */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/contacto"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <a
                href="tel:8296579315"
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>829-657-9315</span>
              </a>
              <Button
                asChild
                className="w-fit bg-primary hover:bg-accent text-primary-foreground"
              >
                <Link href="/contacto">Cotización</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
