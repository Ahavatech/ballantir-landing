import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ballantir.ai"),
  title: "BALLANTIR Basketball | AI-Driven Sports Intelligence",
  description:
    "Premium investor landing page for BALLANTIR Basketball, an AI-driven intelligence platform built for players, teams, and decision-makers.",
  openGraph: {
    title: "BALLANTIR Basketball",
    description:
      "The future of AI-driven sports intelligence for basketball.",
    images: ["/opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${plexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
