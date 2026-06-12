import type { Metadata } from 'next'
import './globals.css'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'LovePaíses',
  description: 'Crie presentes digitais personalizados com fotos, música e mensagens especiais',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'All',
}

export const metadata: Metadata = {
  title: 'LovePaíses — Presentes Digitais Personalizados',
  description: 'Transforme suas memórias em uma surpresa inesquecível. Crie presentes digitais com fotos, música e mensagens especiais para quem você ama.',
  keywords: 'presente digital, surpresa romântica, presente personalizado, cartão digital, declaração de amor, QR code presente',
  openGraph: {
    title: 'LovePaíses — Presentes Digitais Personalizados',
    description: 'Transforme suas memórias em uma surpresa inesquecível',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-body antialiased">
        <Stars />
        {children}
      </body>
    </html>
  )
}

function Stars() {
  return (
    <div className="stars-bg">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            '--duration': `${Math.random() * 3 + 2}s`,
            '--delay': `${Math.random() * 5}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
