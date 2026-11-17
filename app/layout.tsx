import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Mark Bodegas | Senior Software Engineer",
  description:
    "Senior Software Engineer with 5+ years of experience turning business and startup ideas into production applications through full-stack development, system architecture, API integrations, cloud deployment, and DevOps automation.",
  metadataBase: new URL("https://jmbodz.github.io/"),
  openGraph: {
    title: "John Mark Bodegas | Senior Software Engineer",
    description:
      "5+ years building production applications from scratch: full-stack engineering, system architecture, API integrations, cloud deployment, and DevOps automation.",
    url: "https://jmbodz.github.io/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
