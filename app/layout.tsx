import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const title = "John Mark Bodegas | Senior Full-Stack Engineer";
const description = "Senior full-stack engineer helping founders and engineering teams build TypeScript SaaS products, integrate AI, and ship to production.";

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
