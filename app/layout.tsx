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

const TITLE = "opensverige — Det svenska AI agent-communityt";
const DESCRIPTION =
  "Öppen community för folk som bygger AI-agenter i Sverige. OpenClaw, MCP, multi-agent, CrewAI. Discord + IRL.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | opensverige",
  },
  description: DESCRIPTION,
  keywords: [
    "opensverige",
    "AI agenter Sverige",
    "AI-agenter Sverige",
    "multi-agent Sverige",
    "MCP community",
    "OpenClaw Sverige",
    "Svenska AI-utvecklare",
    "CrewAI Sverige",
    "AI automation Sverige",
  ],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: SITE_URL,
    siteName: "opensverige",
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
  name: "opensverige",
  url: SITE_URL,
  description: "Det svenska AI agent-communityt",
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
