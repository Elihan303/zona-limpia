import type { CSSProperties } from "react";

// Brand colors extracted from globals.css
const colors = {
  primary: "#2d7a4f", // oklch(0.48 0.14 152)
  primaryLight: "#a8d5bc", // light tint for header subtitle
  primaryBg: "#f0f7f3", // very light green for description bg
  white: "#ffffff",
  bgPage: "#f4f4f7",
  textDark: "#1a1a1a", // oklch(0.145 0 0)
  textMid: "#555555",
  textMuted: "#999999",
  border: "#e8e8e8", // oklch(0.922 0 0)
};

export const styles: Record<string, CSSProperties> = {
  page: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    backgroundColor: colors.bgPage,
    padding: "40px 20px",
    margin: 0,
  },
  card: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: colors.white,
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  header: {
    backgroundColor: colors.primary,
    padding: "32px 40px",
    textAlign: "center",
  },
  headerTitle: {
    color: colors.white,
    fontSize: "22px",
    fontWeight: 700,
    margin: 0,
    letterSpacing: "0.5px",
  },
  headerSubtitle: {
    color: colors.primaryLight,
    fontSize: "14px",
    margin: "8px 0 0",
  },
  body: {
    padding: "36px 40px",
  },
  bodyIntro: {
    color: colors.textMid,
    fontSize: "15px",
    marginTop: 0,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "24px",
  },
  rowLabel: {
    padding: "10px 0",
    fontSize: "13px",
    fontWeight: 600,
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: "0.6px",
    width: "130px",
    verticalAlign: "top",
    borderBottom: `1px solid ${colors.border}`,
  },
  rowValue: {
    padding: "10px 0 10px 16px",
    fontSize: "15px",
    color: colors.textDark,
    verticalAlign: "top",
    borderBottom: `1px solid ${colors.border}`,
  },
  descriptionWrapper: {
    marginTop: "28px",
  },
  descriptionLabel: {
    fontSize: "13px",
    fontWeight: 600,
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    marginBottom: "10px",
  },
  descriptionBlock: {
    backgroundColor: colors.primaryBg,
    borderLeft: `4px solid ${colors.primary}`,
    borderRadius: "4px",
    padding: "16px 20px",
    color: colors.textDark,
    fontSize: "15px",
    lineHeight: 1.7,
    whiteSpace: "pre-wrap",
  },
  ctaWrapper: {
    marginTop: "32px",
    textAlign: "center",
  },
  ctaButton: {
    display: "inline-block",
    backgroundColor: colors.primary,
    color: colors.white,
    padding: "12px 32px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "15px",
  },
  footer: {
    backgroundColor: colors.bgPage,
    padding: "20px 40px",
    textAlign: "center",
    borderTop: `1px solid ${colors.border}`,
  },
  footerText: {
    color: colors.textMuted,
    fontSize: "12px",
    margin: 0,
  },
  footerBrand: {
    color: colors.primary,
  },
};
