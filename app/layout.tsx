import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SITE_URL =
  process.env.VERCEL_URL !== undefined
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL ?? "https://opensverige.se";

const OG_IMAGE = `${SITE_URL}/1200x630_opensverige.png`;

const TITLE = "Open Claw Sverige – Svenskt OpenClaw Community för AI-utvecklare";
const DESCRIPTION =
  "Gå med i Open Claw Sverige – det svenska communityt för OpenClaw AI-agenter. Samarbeta med svenska utvecklare, dela kod och bygg AI-lösningar tillsammans. Discord + Facebook-grupp.";

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
        url: OG_IMAGE,
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
    images: [OG_IMAGE],
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
