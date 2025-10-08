import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hibban Faruq Wiratama | Fullstack Web Developer",
  description: "Hibban Faruq Wiratama - Passionate Fullstack Web Developer specializing in building fast, scalable, and user-friendly web applications using modern technologies like React, Next.js, and Node.js.",
  keywords: [
    "Hibban Faruq Wiratama",
    "Hibban",
    "Fullstack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer"
  ],
  authors: [{ name: "Hibban Faruq Wiratama" }],
  creator: "Hibban Faruq Wiratama",
  publisher: "Hibban Faruq Wiratama",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hibban-personal.vercel.app",
    title: "Hibban Faruq Wiratama | Fullstack Web Developer",
    description: "Passionate Fullstack Web Developer specializing in building fast, scalable, and user-friendly web applications.",
    siteName: "Hibban Faruq Wiratama Portfolio",
    // images: [
    //   {
    //     url: "/og-image.jpg", // Buat image ini (1200x630px)
    //     width: 1200,
    //     height: 630,
    //     alt: "Hibban Faruq Wiratama - Fullstack Web Developer",
    //   },
    // ],
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

  // Verification (opsional, untuk Google Search Console)
  verification: {
      google: "8dJCcfYQ_K_OKMO9C6oAjB3CBnKVkmP4USG0KEeGVBM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hibban Faruq Wiratama",
              jobTitle: "Fullstack Web Developer",
              description: "Passionate Fullstack Web Developer specializing in building fast, scalable, and user-friendly web applications.",
              url: "https://hibban-personal.vercel.app/", 
              sameAs: [
                "https://github.com/hikwoa-hfw", 
                "https://linkedin.com/in/hibbanfaruqwiratamaa", 
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}