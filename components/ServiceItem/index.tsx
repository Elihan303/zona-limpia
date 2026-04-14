import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export interface ServiceItemProps {
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  onViewMore?: () => void;
}

export function ServiceItem({
  title,
  description,
  image,
  imagePosition = "center",
  onViewMore,
}: ServiceItemProps) {
  return (
    <Card className="overflow-hidden border-border hover:border-primary/50 transition-all hover:shadow-lg group p-0">
      <div className="relative h-48 overflow-hidden">
        <Image
          fill
          src={image}
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          onClick={onViewMore}
        >
          Ver más
        </Button>
      </CardContent>
    </Card>
  );
}
