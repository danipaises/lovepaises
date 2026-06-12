'use client'

import { motion } from 'framer-motion'
import { Heart, Check, Star, Sparkles, ArrowRight, CreditCard, Smartphone, Barcode } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function PlanosPage() {
  const [selected, setSelected] = useState<'gratis' | 'premium'>('premium')
  const [payment, setPayment] = useState<'pix' | 'card' | 'boleto'>('pix')

  return (
    <div>
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-amor-rosado fill-amor-rosado" />
            <span className="text-xl font-display font-bold text-amor-noite">Love<span className="text-amor-roxo">Países</span></span>
          </Link>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Sparkles className="w-10 h-10 text-amor-dourado mx-auto mb-4" />
        <h1 className="text-4xl font-display font-bold text-amor-noite mb-16">Escolha seu plano</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl p-8 border-2 border-gray-100 bg-white shadow-sm">
            <span className="text-5xl">🎁</span>
            <h3 className="text-2xl font-bold mt-4">Grátis</h3>
            <div className="my-4"><span className="text-5xl font-bold text-amor-roxo">R$0</span></div>
            <ul className="space-y-2 text-left">{['Até 10 fotos','1 tema','Link compartilhável','QR Code básico','Marca d\'água'].map(f=><li key={f} className="flex gap-2 text-sm"><Check className="w-4 h-4 text-green-500"/>{f}</li>)}</ul>
            <Link href="/criar" className="mt-6 block w-full py-3 border-2 border-amor-roxo text-amor-roxo rounded-full font-bold">Começar grátis</Link>
          </div>
          <div className="rounded-3xl p-8 border-2 border-amor-roxo shadow-xl ring-2 ring-amor-roxo/10 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amor-roxo to-amor-rosado text-white px-6 py-1 rounded-full text-sm font-bold"><Star className="w-3 h-3 inline"/> Mais escolhido</div>
            <span className="text-5xl">💎</span>
            <h3 className="text-2xl font-bold mt-4">Premium</h3>
            <div className="my-4"><span className="text-5xl font-bold text-amor-roxo">R$19,90</span></div>
            <ul className="space-y-2 text-left">{['Fotos ilimitadas','8 temas exclusivos','Música de fundo','QR Code HD','Sem marca d\'água','IA para cartas','Proteção por senha','Cápsula do tempo'].map(f=><li key={f} className="flex gap-2 text-sm"><Check className="w-4 h-4 text-amor-roxo"/>{f}</li>)}</ul>
            <button className="mt-6 w-full py-3 bg-amor-roxo text-white rounded-full font-bold flex items-center justify-center gap-2">Pagar R$19,90 <ArrowRight className="w-4 h-4"/></button>
          </div>
        </div>
      </div>
    </div>
  )
}