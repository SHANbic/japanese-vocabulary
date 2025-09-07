import type { Metadata } from "next";
import "./globals.css";
import ogImage from "./og-image.png";

export const metadata: Metadata = {
  title: "Objectif Japon - Vocabulaire",
  description:
    "Testez votre maitrise du vocabulaire japonais pour chaque leçon d'Objectif Japon",
  metadataBase: new URL("https://vocabulaire-objectif-japon.netlify.app/"),
  openGraph: {
    title: "Objectif Japon - Vocabulaire",
    description:
      "Testez votre maitrise du vocabulaire japonais pour chaque leçon d'Objectif Japon",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Objectif Japon - Vocabulaire",
    description:
      "Testez votre maitrise du vocabulaire japonais pour chaque leçon d'Objectif Japon",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://da32ev14kd4yl.cloudfront.net/versioned/objectif-japon/icon-OJ.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
