import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hibban Faruq Wiratama - Fullstack Web Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
          Hibban Faruq Wiratama
        </div>
        <div style={{ fontSize: 40, opacity: 0.9 }}>
          Fullstack Web Developer
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}