import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hibban-personal.vercel.app'
  
  return [
    {
      url: `${baseUrl}/`, // ← Tambahkan trailing slash
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}