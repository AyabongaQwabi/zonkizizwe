import type { Metadata, Viewport } from "next";
import { Anton, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getNonProfitSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zonkizizwe.org.za"),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Zonkizizwe empowers Eastern Cape communities through traditional leadership, food security, agricultural development, and social support programmes. Registered NPO 311-529.",
  keywords: [
    "Zonkizizwe",
    "NPO",
    "Eastern Cape",
    "Queenstown",
    "Chris Hani District",
    "soup kitchen",
    "community development",
    "traditional leadership",
    "food security",
    "agriculture",
    "ubuntu",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: SITE.name,
    title: `${SITE.name} – ${SITE.tagline}`,
    description:
      "Empowering communities through traditional leadership, food security, and agricultural development across the Eastern Cape.",
    images: [
      {
        url: "/images/hero-village.jpg",
        width: 1200,
        height: 630,
        alt: "Zonkizizwe community empowerment in the Eastern Cape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} – ${SITE.tagline}`,
    description:
      "Empowering Eastern Cape communities through traditional leadership and community development.",
    images: ["/images/hero-village.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e86a17" },
    { media: "(prefers-color-scheme: dark)", color: "#17100a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getNonProfitSchema();

  return (
    <html lang="en" suppressHydrationWarning className={`${anton.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
