import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LovePaíses — Presentes que emocionam',
  description: 'Crie um presente digital no estilo Spotify com fotos, timeline e carta personalizada',
  openGraph: { title: 'LovePaíses', description: 'Presentes que emocionam', type: 'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}