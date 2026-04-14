import { styles } from "./styles";

interface EmailTemplateProps {
  companyName: string;
  email: string;
  subject: string;
  description: string;
}

export function EmailTemplate({
  companyName,
  email,
  subject,
  description,
}: EmailTemplateProps) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Mensaje de Contacto</h1>
          <p style={styles.headerSubtitle}>
            Zona Limpia — Formulario de Contacto
          </p>
        </div>

        {/* Body */}
        <div style={styles.body}>
          <p style={styles.bodyIntro}>
            Has recibido una nueva consulta a través del sitio web. Aquí están
            los detalles:
          </p>

          <table style={styles.table}>
            <tbody>
              <InfoRow label="Empresa:" value={companyName} />
              <InfoRow label="Correo:" value={email} />
              <InfoRow label="Asunto:" value={subject} />
            </tbody>
          </table>

          {/* Description */}
          <div style={styles.descriptionWrapper}>
            <p style={styles.descriptionLabel}>Descripción</p>
            <div style={styles.descriptionBlock}>{description}</div>
          </div>

          {/* Reply CTA */}
          <div style={styles.ctaWrapper}>
            <a href={`mailto:${email}`} style={styles.ctaButton}>
              Responder a {companyName}
            </a>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Este correo fue generado automáticamente desde el formulario de
            contacto de{" "}
            <strong style={styles.footerBrand}>zonalimpia.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td style={styles.rowLabel}>{label}</td>
      <td style={styles.rowValue}>{value}</td>
    </tr>
  );
}
