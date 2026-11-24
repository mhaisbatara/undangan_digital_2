import type { Metadata } from "next";
import { weddingConfig } from "@/data/weddingConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://undangan-digital.local"),
  title: weddingConfig.meta.title,
  description: weddingConfig.meta.description,
  openGraph: {
    title: weddingConfig.meta.title,
    description: weddingConfig.meta.description,
    images: [{ url: weddingConfig.meta.ogImage }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-slate-900 text-slate-800 antialiased selection:bg-lavender-200 selection:text-lavender-900">
        {children}
      </body>
    </html>
  );
}
