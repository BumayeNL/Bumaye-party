import React, { Suspense } from "react";
import type { Metadata } from "next";
import { MetaPixel } from "../components/MetaPixel";
import "./globals.css";

export const metadata: Metadata = {
  title: "BUMAYE! | HIPHOP • R&B • AFRO • DANCEHALL",
  description: "Bumaye is more than an event — it's a feeling. Join the movement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
      </body>
    </html>
  );
}
