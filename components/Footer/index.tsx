import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Zona Limpia</h3>
              <p className="text-sm text-background/70">Agua y saneamiento!</p>
            </div>
            <p className="text-sm text-background/70">
              Empresa de higienización industrial con más de 8 años de
              experiencia, garantizando servicios de calidad.
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:8296579315"
                  className="hover:text-background transition-colors"
                >
                  829-657-9315
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:ventas@zonalimpia.com.do"
                  className="hover:text-background transition-colors"
                >
                  ventas@zonalimpia.com.do
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Santo Domingo, República Dominicana</span>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div className="space-y-4">
            <h4 className="font-semibold">Horario</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Sáb: 8:00 AM - 1:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h4 className="font-semibold">Síguenos</h4>
            <div className="flex gap-4">
              <a
                target="_blank"
                href="https://www.instagram.com/zonalimpia.rd"
                className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/zona-limpia-srl"
                className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>
            &copy; {new Date().getFullYear()} Zona Limpia. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
