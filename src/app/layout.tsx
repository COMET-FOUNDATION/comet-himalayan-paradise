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

export const metadata: Metadata = {
  metadataBase: new URL("https://chphimalayanparadise.com"),
  title: {
    default: "CHP Himalayan Paradise – Treks, Camps & Adventures",
    template: "%s | CHP Himalayan Paradise",
  },
  description:
    "Experience the Himalayas through curated holiday camps, guided treks, adventure activities, wellness retreats, and cultural immersions. Book your Himalayan journey today.",
  keywords: [
    "Himalayan trek",
    "holiday camp",
    "adventure travel",
    "Uttarakhand",
    "Kumaon",
    "camping",
    "wellness retreat",
    "Nanda Devi",
    "Panchachuli",
    "Adi Kailash",
  ],
  authors: [{ name: "CHP Himalayan Paradise" }],
  creator: "CHP Himalayan Paradise",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://chphimalayanparadise.com",
    siteName: "CHP Himalayan Paradise",
    title: "CHP Himalayan Paradise – Treks, Camps & Adventures",
    description:
      "Experience the Himalayas through curated holiday camps, guided treks, adventure activities, wellness retreats, and cultural immersions.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "CHP Himalayan Paradise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHP Himalayan Paradise – Treks, Camps & Adventures",
    description:
      "Experience the Himalayas through curated holiday camps, guided treks, and cultural adventures.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-stone-50 text-slate-800">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
