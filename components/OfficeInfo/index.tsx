import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function OfficeInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Información de la Oficina
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Dirección</p>
              <p className="text-muted-foreground">
                Av. Barceló km. 3, Plaza Roque, Punta Cana, República Dominicana
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Teléfono</p>
              <a
                href="tel:8296579315"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                829-657-9315
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Correo</p>
              <a
                href="mailto:ventas@zonalimpia.com.do"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ventas@zonalimpia.com.do
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Horario</p>
              <p className="text-muted-foreground">
                Lun - Vie: 8:00 AM - 6:00 PM
              </p>
              <p className="text-muted-foreground">Sáb: 8:00 AM - 1:00 PM</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
