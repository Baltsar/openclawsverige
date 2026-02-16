import type { Metadata } from "next";
import {
  Playfair_Display,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const DEFAULT_SITE_URL = "https://opensverige.se";
const VERCEL_ENV = process.env.VERCEL_ENV;
const VERCEL_HOST = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (VERCEL_ENV === "production" ? DEFAULT_SITE_URL : VERCEL_HOST ?? DEFAULT_SITE_URL);

const OG_IMAGE_PATH = "/assets/1200x_hand.png";
const OG_IMAGE_URL = new URL(OG_IMAGE_PATH, SITE_URL).toString();

const TITLE = "opensverige — Det svenska AI agent-communityt";
const DESCRIPTION =
  "Öppen community för folk som bygger AI-agenter i Sverige. OpenClaw, CrewAI, MCP, multi-agent. Discord + IRL meetups. Gratis, öppen källkod, verktygsagnostiskt.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | opensverige",
  },
  description: DESCRIPTION,
  keywords: [
    "AI agenter Sverige",
    "OpenClaw",
    "CrewAI",
    "MCP",
    "multi-agent system",
    "AI community Sverige",
    "AI meetup Stockholm",
    "AI agents Swedish",
    "öppen källkod AI",
    "Fortnox AI integration",
    "svenska AI-builders",
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
    "https://discord.gg/CSphbTk8En",
    "https://www.facebook.com/groups/2097332881024571/",
    "https://www.linkedin.com/groups/9544657/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
      style={{ backgroundColor: "#0a0a0a", color: "#e8e0d4" }}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased" style={{ backgroundColor: "#0a0a0a", color: "#e8e0d4" }}>
        <div style={{ backgroundColor: "#0a0a0a", color: "#e8e0d4", minHeight: "100vh" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
