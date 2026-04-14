"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const body = {
      companyName: (form.elements.namedItem("company") as HTMLInputElement)
        .value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      description: (
        form.elements.namedItem("description") as HTMLTextAreaElement
      ).value,
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Error al enviar el mensaje");

      setIsSubmitted(true);
    } catch (e) {
      console.log("e:", e);
      setError("Hubo un problema al enviar tu mensaje. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
          <Send className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">¡Mensaje Enviado!</h3>
        <p className="text-muted-foreground">
          Nos pondremos en contacto contigo pronto.
        </p>
        <Button
          className="mt-4 bg-transparent"
          variant="outline"
          onClick={() => setIsSubmitted(false)}
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="company">Nombre de la Empresa</Label>
        <Input
          id="company"
          name="company"
          placeholder="Tu empresa"
          required
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Correo Electrónico</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="correo@empresa.com"
          required
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Asunto</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="¿En qué podemos ayudarte?"
          required
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Cuéntanos más sobre tu consulta o necesidad..."
          rows={5}
          required
          className="bg-background resize-none"
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-accent text-primary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
      </Button>
    </form>
  );
}
