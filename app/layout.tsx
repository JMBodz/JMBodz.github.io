import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const title = "John Mark Bodegas | Senior Full-Stack Engineer";
const description = "I help founders ship MVPs built to scale, backed by 5+ years in software engineering.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://jmbodz.github.io/"),
  openGraph: {
    title,
    description,
    url: "https://jmbodz.github.io/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://cloud.umami.is/script.js"
          strategy="afterInteractive"
          data-website-id="995debbe-1b8f-409b-b821-b2987a8fa36e"
          data-domains="jmbodz.github.io"
        />
      </body>
    </html>
  );
}
