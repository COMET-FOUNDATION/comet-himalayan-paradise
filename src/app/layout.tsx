import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.thehimalayancamp.com";
const OG_IMAGE = `${BASE_URL}/chp-social.jpg`;
const HOME_TITLE =
  "✨ CHP – Comet Himalayan Paradise! Ecosystem - One Destination. Endless Himalayan Experiences. ✨";
const HOME_DESCRIPTION =
  "Discover the CHP – Comet Himalayan Paradise ecosystem, bringing together Himalayan cottages, treks, holiday camps, adventure activities, wellness retreats, organic living, and cultural experiences. One destination. Endless Himalayan experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | CHP – Comet Himalayan Paradise",
  },
  description:
    "Experience the Himalayas through curated holiday camps, guided treks, adventure activities, wellness retreats, and cultural immersions. Book your Himalayan journey today.",
  keywords: [
    "Himalayan trek",
    "holiday camp Uttarakhand",
    "adventure travel India",
    "Kumaon trekking",
    "Munsiyari trek",
    "Panchachuli base camp",
    "Nanda Devi trek",
    "Adi Kailash Om Parvat",
    "Khaliya Top",
    "Himalayan camping",
    "wellness retreat Himalayas",
    "yoga Himalayas",
    "wildlife safari Uttarakhand",
    "cultural tour Kumaon",
    "CHP Himalayan Paradise",
  ],
  authors: [{ name: "CHP Himalayan Paradise", url: BASE_URL }],
  creator: "CHP Himalayan Paradise",
  publisher: "CHP Himalayan Paradise",
  alternates: { canonical: `${BASE_URL}/` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "CHP – Comet Himalayan Paradise",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Himalayan cottages beneath snow-capped peaks at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@chphimalayan",
    creator: "@chphimalayan",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "749905b32ffabfe7",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${BASE_URL}/#organization`,
      name: "CHP Himalayan Paradise",
      url: BASE_URL,
      logo: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/79abc1c0-afd2-4cfe-bfe3-c8ce0b20faf5-chatgpt-image-aug-31-2026-11-56-21-pm.png",
      description:
        "Immersive Himalayan travel experiences — holiday camps, guided treks, wellness retreats, and cultural adventures in the Indian Himalayas.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munsiyari",
        addressRegion: "Uttarakhand",
        postalCode: "262554",
        addressCountry: "IN",
      },
      telephone: "+91-99499-94989",
      email: "hello@chphimalayanparadise.com",
      sameAs: [],
      areaServed: {
        "@type": "Place",
        name: "Kumaon Himalayas, Uttarakhand, India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Himalayan Experiences",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "TouristTrip", name: "Holiday Camps" } },
          { "@type": "Offer", itemOffered: { "@type": "TouristTrip", name: "Himalayan Treks" } },
          { "@type": "Offer", itemOffered: { "@type": "TouristTrip", name: "Wellness Retreats" } },
          { "@type": "Offer", itemOffered: { "@type": "TouristTrip", name: "Wildlife Safaris" } },
          { "@type": "Offer", itemOffered: { "@type": "TouristTrip", name: "Cultural Experiences" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "CHP Himalayan Paradise",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/treks?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-stone-50 text-slate-800">
        <ScrollProgress />
        <Navbar />
        <main className="site-main flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
