"use client"

import { usePathname } from 'next/navigation'

export default function StructuredData() {
  const pathname = usePathname()
  
  if (
    pathname.includes('sitemap') || 
    pathname.includes('robots') ||
    pathname.includes('api')
  ) {
    return null
  }
  
  return (
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
  )
}