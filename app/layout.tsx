import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Objectif Japon - Vocabulaire",
  description:
    "Testez votre maitrise du vocabulaire japonais pour chaque leçon d'Objectif Japon",
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
