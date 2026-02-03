import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const DEFAULT_SITE_URL = "https://opensverige.se";
const VERCEL_ENV = process.env.VERCEL_ENV;
const VERCEL_HOST = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (VERCEL_ENV === "production" ? DEFAULT_SITE_URL : VERCEL_HOST ?? DEFAULT_SITE_URL);

const OG_IMAGE_PATH = "/1200x630_opensverige.png";
const OG_IMAGE_URL = new URL(OG_IMAGE_PATH, SITE_URL).toString();

const TITLE = "Open Claw Sverige – Svenskt OpenClaw Community för AI-utvecklare";
const DESCRIPTION =
  "Sveriges community för OpenClaw-agenter: bygg, dela och testa AI-workflows med andra utvecklare. Discord + Facebook, gratis och öppet.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Open Claw Sverige",
  },
  description: DESCRIPTION,
  keywords: [
    "OpenClaw Sverige",
    "OpenClaw svenska",
    "AI-agenter Sverige",
    "Svenska AI-utvecklare",
    "OpenClaw community",
    "AI automation Sverige",
    "Svensk tech community",
    "FOSS Sverige",
    "AI-utveckling svenska",
  ],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: SITE_URL,
    siteName: "Open Claw Sverige",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: TITLE,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_URL,
        alt: TITLE,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Open Claw Sverige",
  url: SITE_URL,
  description: "Svenskt community för OpenClaw AI-agenter",
  sameAs: [
    "https://discord.gg/ZE8CtUkaWD",
    "https://www.facebook.com/groups/2097332881024571",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
