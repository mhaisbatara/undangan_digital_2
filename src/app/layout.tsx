import type { Metadata } from "next";
import { weddingConfig } from "@/data/weddingConfig";
import "./globals.css";

const siteUrl = "https://mhaisbatara.github.io/undangan_digital_2";
const ogImageUrl = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: weddingConfig.meta.title,
  description: weddingConfig.meta.description,
  openGraph: {
    title: weddingConfig.meta.title,
    description: weddingConfig.meta.description,
    url: siteUrl,
    siteName: weddingConfig.meta.title,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: weddingConfig.meta.title,
        type: "image/jpeg",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: weddingConfig.meta.title,
    description: weddingConfig.meta.description,
    images: [ogImageUrl],
  },
  icons: {
    icon: `${siteUrl}/favicon.ico`,
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
        <link rel="icon" href={`${siteUrl}/favicon.ico`} sizes="any" />
        <link rel="apple-touch-icon" href={ogImageUrl} />

        {/* WhatsApp & Social Media Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:title" content={weddingConfig.meta.title} />
        <meta property="og:description" content={weddingConfig.meta.description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={weddingConfig.meta.title} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${siteUrl}/`} />
        <meta name="twitter:title" content={weddingConfig.meta.title} />
        <meta name="twitter:description" content={weddingConfig.meta.description} />
        <meta name="twitter:image" content={ogImageUrl} />
      </head>
      <body className="bg-slate-900 text-slate-800 antialiased selection:bg-lavender-200 selection:text-lavender-900">
        {children}
      </body>
    </html>
  );
}
