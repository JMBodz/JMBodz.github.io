import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Mark Bodegas | Senior Software Engineer",
  description:
    "John Mark Bodegas is a senior software engineer building full-stack products, integrations, and reliable delivery systems.",
  metadataBase: new URL("https://jmbodz.github.io/"),
  openGraph: {
    title: "John Mark Bodegas | Senior Software Engineer",
    description:
      "Full-stack engineering, systems thinking, and practical product delivery.",
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
