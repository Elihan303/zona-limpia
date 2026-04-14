import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { companyName, email, subject, description } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Zona Limpia <noreplay@contacto.zonalimpia.com.do>",
      to: [process.env.CONTACT_EMAIL ?? "ventas@zonalimpia.com.do"],
      subject: `Nuevo contacto: ${subject}`,
      react: EmailTemplate({ companyName, email, subject, description }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
