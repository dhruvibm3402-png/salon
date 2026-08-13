import type { Metadata, Viewport } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Poppins,
  Inter,
} from "next/font/google";
import "./globals.css";

/* ─── Font setup ─────────────────────────────────────────────────────── */
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ─── SEO Metadata ───────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://salon.com"),
  title: {
    default: "Salon — Luxury Beauty & Spa Experience",
    template: "%s | Salon",
  },
  description:
    "Indulge in world-class beauty treatments at Salon. Expert hairstylists, bridal makeup, luxurious facials, spa therapy, nail art, and more. Book your appointment today.",
  keywords: [
    "luxury beauty salon",
    "spa treatments",
    "bridal makeup",
    "hair styling",
    "facial treatments",
    "nail art",
    "keratin treatment",
    "luxury spa",
    "beauty salon",
    "professional makeup artist",
  ],
  authors: [{ name: "Salon" }],
  creator: "Salon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://salon.com",
    siteName: "Salon",
    title: "Salon — Luxury Beauty & Spa Experience",
    description:
      "World-class beauty treatments, expert stylists, bridal makeup, spa therapy and more. Experience luxury like never before.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Luxury Salon & Spa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salon — Luxury Beauty & Spa Experience",
    description:
      "World-class beauty treatments, expert stylists, bridal makeup, spa therapy and more.",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#D4AF37",
};

/* ─── Root layout ────────────────────────────────────────────────────── */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${cormorant.variable} ${poppins.variable} ${inter.variable}`}
    >
      <body className="font-sans bg-[#0c0c0c] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
