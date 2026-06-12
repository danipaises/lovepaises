'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, ChevronDown, Clock, Sparkles, QrCode, Share2, Play, Music } from 'lucide-react'

const demo = {
  title: 'Nossa História de Amor',
  from: 'Ana',
  to: 'Pedro',
  message: 'Desde o dia em que te conheci, minha vida ganhou cor. Cada momento ao seu lado é um presente que guardo no coração. Você é a melhor parte dos meus dias, o sorriso que ilumina minhas manhãs e o abraço que acalma minhas noites. Aprendi que o amor não está nos grandes gestos, mas nos pequenos detalhes do dia a dia. Te amo hoje, amanhã e sempre.',
  photos: [
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
    'https://images.unsplash.com/photo-1537633552985-d660f013a6e0?w=800',
  ],
  timeline: [
    { date: '2022-09-15', title: 'Dia que nos conhecemos', desc: 'Na festa de aniversário de um amigo em comum', icon: '🥂' },
    { date: '2022-11-20', title: 'Primeiro beijo', desc: 'No parque Ibirapuera, às 18h', icon: '💋' },
    { date: '2023-03-12', title: 'Primeira viagem juntos', desc: 'Praia de Maresias', icon: '🏖️' },
    { date: '2023-09-15', title: '1 ano de namoro', desc: 'Jantar especial no nosso restaurante', icon: '🥂' },
    { date: '2024-02-14', title: 'Dia dos Namorados', desc: 'Troca de cartas escritas à mão', icon: '💌' },
    { date: '2024-12-25', title: 'Primeiro Natal juntos', desc: 'Ceia em família, melhor Natal', icon: '🎄' },
  ],
  music: "Can't Help Falling in Love",
  songUrl: 'https://www.youtube.com/watch?v=vGJTaP6anOU',
}

const daysTogether = Math.floor((Date.now() - new Date('2022-09-15').getTime()) / (1000 * 60 * 60 * 24))

export default function DemoPage() {
  return (
    <div className="bg-gradient-to-b from-amor-soft via-white to-amor-soft pb-20">
      <Intro />
      <Hero />
      <Counter days={daysTogether} />
      <SpotifyTimeline />
      <Gallery />
      <MessageSection />
      <FinalSection days={daysTogether} />
      <Banner />
    </div>
  )
}

function Intro() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-amor-noite via-amor-roxo to-amor-rosado text-white text-center px-4">
      {[...Array(40)].map((_, i) => (
        <motion.div key={i} className="absolute bg-white rounded-full"
          style={{ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%', width: Math.random() * 3 + 1 + 'px', height: Math.random() * 3 + 1 + 'px' }}
          animate={{ opacity: [0.1, 0.8, 0.1], scale: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 2 + Math.random() * 3, delay: Math.random() * 3 }} />
      ))}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring' }} className="text-8xl mb-6">🎁</motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-xl mb-2">{demo.from} preparou uma surpresa</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-4xl font-display font-bold">Para você, {demo.to}</motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
        onClick={() => { const el = document.querySelector('.intro-overlay') as HTMLElement; if (el) el.style.display = 'none' }}
        className="mt-10 bg-white text-amor-roxo px-12 py-4 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2"
      >
        <Heart className="w-5 h-5 fill-amor-roxo" /> Abrir surpresa
      </motion.button>
    </div>
  )
}

function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amor-rosado/20 via-amor-soft to-amor-glow flex items-center justify-center">
      <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-20 left-1/2 -translate-x-1/2">
        <Heart className="w-20 h-20 text-amor-rosado/30 fill-amor-rosado/20" />
      </motion.div>
      <div className="text-center px-4">
        <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-6xl mb-6">💕</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-display font-bold text-amor-noite mb-4">{demo.title}</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg text-gray-500">De {demo.from} para {demo.to}</motion.p>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="mt-16">
          <ChevronDown className="w-8 h-8 text-amor-roxo mx-auto" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

function Counter({ days }: { days: number }) {
  return (
    <section className="py-20 text-center bg-white">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto">
        <Clock className="w-10 h-10 text-amor-rosado mx-auto mb-4" />
        <p className="text-gray-400 uppercase text-xs tracking-[0.3em] mb-3 font-semibold">Juntos há</p>
        <motion.p className="text-8xl md:text-9xl font-display font-bold bg-gradient-to-r from-amor-rosado to-amor-roxo bg-clip-text text-transparent"
          initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ type: 'spring', stiffness: 100 }}>{days}</motion.p>
        <p className="text-xl text-gray-400 mt-2">dias de amor</p>
      </motion.div>
    </section>
  )
}

function SpotifyTimeline() {
  return (
    <section className="py-20 bg-gradient-to-b from-amor-noite to-indigo-950 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
          <p className="text-amor-rosado uppercase text-xs tracking-[0.3em] font-semibold mb-3">Nossa retrospectiva</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Linha do Tempo</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amor-rosado via-amor-roxo to-amor-dourado" />
          {demo.timeline.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}
              className={`flex items-center mb-12 relative ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/15 transition-all">
                  <p className="text-amor-rosado text-xs font-bold mb-1">{new Date(item.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 z-10">{item.icon}</div>
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="py-20 px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
        <p className="text-amor-roxo uppercase text-xs tracking-[0.3em] font-semibold mb-3">Galeria</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-amor-noite">Nossos momentos</h2>
      </motion.div>
      <div className="max-w-5xl mx-auto columns-2 md:columns-3 gap-4">
        {[...demo.photos, ...demo.photos].slice(0, 12).map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="break-inside-avoid mb-4">
            <img src={p} alt={`Foto ${i + 1}`} className="w-full rounded-2xl shadow-md hover:shadow-xl transition-shadow" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function MessageSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amor-soft/50 to-white">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-center">
        <Sparkles className="w-10 h-10 text-amor-dourado mx-auto mb-6" />
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-amor-rosado/10">
          <h3 className="text-2xl font-display font-bold text-amor-noite mb-6">Minha carta para você</h3>
          <p className="text-lg text-gray-700 leading-relaxed italic">&ldquo;{demo.message}&rdquo;</p>
          <div className="mt-6 flex items-center justify-center gap-2 text-amor-rosado">
            <Heart className="w-5 h-5 fill-amor-rosado" />
            <span className="text-sm font-semibold">Com todo meu amor, {demo.from}</span>
          </div>
        </div>
        <div className="mt-8 p-6 bg-amor-roxo/5 rounded-2xl">
          <div className="flex items-center gap-3">
            <Music className="w-5 h-5 text-amor-roxo" />
            <div className="text-left">
              <p className="text-xs text-amor-roxo font-semibold">Trilha sonora</p>
              <p className="text-gray-700 font-medium">{demo.music}</p>
            </div>
            <a href={demo.songUrl} target="_blank" className="ml-auto bg-amor-roxo text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-amor-roxo/80 transition-colors flex items-center gap-1">
              <Play className="w-4 h-4" /> Ouvir
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function FinalSection({ days }: { days: number }) {
  return (
    <section className="py-24 text-center bg-gradient-to-b from-white to-amor-glow">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <Heart className="w-24 h-24 text-amor-rosado fill-amor-rosado mx-auto mb-8" />
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-display font-bold text-amor-noite mb-4">Eu te amo!</h2>
        <p className="text-gray-500 text-xl mb-8">Obrigado por cada um dos {days} dias ao seu lado</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-amor-roxo text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
            <Share2 className="w-5 h-5" /> Compartilhar
          </button>
          <button className="border-2 border-amor-roxo text-amor-roxo px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-amor-roxo/5 transition-colors">
            <QrCode className="w-5 h-5" /> QR Code
          </button>
        </div>
      </motion.div>
    </section>
  )
}

function Banner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-amor-noite/95 backdrop-blur-md text-white p-4 z-40">
      <div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-3">
        <p className="text-sm">✨ Este é um presente de demonstração</p>
        <Link href="/criar" className="bg-gradient-to-r from-amor-roxo to-amor-rosado text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center gap-1">
          Criar o meu presente <Sparkles className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}