'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Heart, ChevronDown, Play, Music, Sparkles, Clock, Gift } from 'lucide-react'
import { useState } from 'react'

const DEMO_DATA = {
  title: 'Nossa Sintonia',
  from: 'Dani',
  to: 'Você',
  songName: 'Perfect',
  artist: 'Ed Sheeran',
  songUrl: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
  message: 'Desde o momento em que nos conhecemos, soube que você era especial. Cada risada, cada conversa, cada momento compartilhado me fez perceber o quanto você é importante na minha vida. Obrigado por ser exatamente quem você é.',
  photos: Array(5).fill('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800'),
  timeline: [
    { date: '2022-09-15', title: 'Nos conhecemos', desc: 'Dia que mudou tudo' },
    { date: '2022-12-25', title: 'Primeiro Natal', desc: 'Inesquecível' },
    { date: '2023-06-12', title: 'Dia dos Namorados', desc: 'Jantar especial' },
  ],
  stats: [
    { label: 'Dias juntos', value: '1.374', icon: '📅' },
    { label: 'Mensagens', value: '12.847', icon: '💬' },
    { label: 'Fotos', value: '342', icon: '📸' },
    { label: 'Filmes', value: '87', icon: '🎬' },
    { label: 'Músicas', value: '53', icon: '🎵' },
    { label: 'Viagens', value: '8', icon: '✈️' },
  ],
}

export default function GiftPage() {
  const { code } = useParams()
  const [revealed, setRevealed] = useState(false)
  const [section, setSection] = useState(0)
  const d = DEMO_DATA

  if (!revealed) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-center px-4 z-50">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute bg-green-500 rounded-full animate-pulse"
            style={{ left: Math.random()*100+'%', top: Math.random()*100+'%', width: Math.random()*2+1+'px', height: Math.random()*2+1+'px', animationDelay: Math.random()*3+'s', opacity: Math.random()*0.5+0.1 }} />
        ))}
        <div className="text-7xl mb-6">🎁</div>
        <p className="text-gray-400 mb-1">{d.from} preparou algo especial</p>
        <p className="text-3xl font-bold mb-8">Para {d.to}</p>
        <button onClick={() => setRevealed(true)}
          className="bg-green-500 text-black px-12 py-4 rounded-full text-xl font-bold hover:bg-green-400 transition-all flex items-center gap-2">
          <Gift className="w-5 h-5" /> Abrir presente
        </button>
      </div>
    )
  }

  const sections = [
    <SectionCapa key="capa" />,
    <SectionTimeline key="tl" />,
    <SectionStats key="stats" />,
    <SectionCarta key="carta" />,
    <SectionFinal key="final" />,
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-bold">Love<span className="text-green-500">Países</span></span>
        <div className="flex gap-1">
          {[0,1,2,3,4].map(i => (
            <div key={i} className={`h-2 rounded-full transition-all ${i <= section ? 'bg-green-500 w-6' : 'bg-gray-700 w-2'}`} />
          ))}
        </div>
        <span className="text-xs text-gray-600">Cód: {code}</span>
      </div>
      <div className="pt-14">
        {sections[section]}
        {section < 4 && (
          <div className="text-center py-8">
            <button onClick={() => setSection(section + 1)} className="text-green-500 hover:text-green-400 text-sm flex items-center gap-1 mx-auto">
              Continuar <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function SectionCapa() {
  const d = DEMO_DATA
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-4">
      <div className="w-64 h-64 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 shadow-2xl shadow-green-500/20 flex items-center justify-center">
        <Music className="w-32 h-32 text-white/80" />
      </div>
      <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-3">{d.from} apresenta</p>
      <h1 className="text-4xl md:text-6xl font-bold mb-2">{d.title}</h1>
      <p className="text-gray-400 text-lg mb-8">{d.songName} • {d.artist}</p>
      <a href={d.songUrl} target="_blank" className="bg-green-500 text-black w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
        <Play className="w-6 h-6 ml-1" />
      </a>
    </section>
  )
}

function SectionTimeline() {
  const d = DEMO_DATA
  return (
    <section className="min-h-[85vh] px-4 py-20">
      <div className="max-w-md mx-auto">
        <p className="text-green-500 text-xs font-semibold uppercase tracking-widest mb-8 text-center">Nossa história</p>
        <h2 className="text-3xl font-bold mb-10 text-center">Linha do Tempo</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-transparent" />
          {d.timeline.map((item, i) => (
            <div key={i} className="flex items-start gap-6 mb-10 pl-4">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-2 -ml-[22px] z-10 shrink-0" />
              <div>
                <p className="text-green-500 text-xs font-bold mb-1">{new Date(item.date).toLocaleDateString('pt-BR', { day:'numeric', month:'long', year:'numeric' })}</p>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionStats() {
  const d = DEMO_DATA
  return (
    <section className="min-h-[85vh] px-4 py-20">
      <div className="max-w-md mx-auto">
        <p className="text-green-500 text-xs font-semibold uppercase tracking-widest mb-8 text-center">Em números</p>
        <h2 className="text-3xl font-bold mb-10 text-center">Nossa história em dados</h2>
        <div className="grid grid-cols-2 gap-3">
          {d.stats.map((s, i) => (
            <div key={i} className="bg-gray-900 rounded-2xl p-5 text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-2xl font-bold text-green-500">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionCarta() {
  const d = DEMO_DATA
  return (
    <section className="min-h-[85vh] px-4 py-20">
      <div className="max-w-md mx-auto">
        <div className="flex gap-2 mb-8">
          {d.photos.slice(0, 3).map((p, i) => (
            <img key={i} src={p} alt="" className={`rounded-2xl object-cover ${i===0?'h-48 w-2/3':'h-24 w-1/3'}`} />
          ))}
        </div>
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
          <Sparkles className="w-6 h-6 text-green-500 mb-4" />
          <p className="text-gray-300 leading-relaxed mb-4">&ldquo;{d.message}&rdquo;</p>
          <div className="flex items-center gap-2 pt-4 border-t border-gray-800">
            <Heart className="w-4 h-4 text-green-500 fill-green-500" />
            <p className="font-bold text-sm">{d.from}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionFinal() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 text-center">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute bg-green-500 rounded-full animate-pulse"
          style={{ left: Math.random()*100+'%', top: Math.random()*100+'%', width: Math.random()*3+1+'px', height: Math.random()*3+1+'px', animationDelay: Math.random()*2+'s' }} />
      ))}
      <div className="animate-bounce mb-8">
        <Heart className="w-24 h-24 text-green-500 fill-green-500" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Eu te amo!</h1>
      <p className="text-gray-400 text-xl">Obrigado por ser quem você é 💚</p>
    </section>
  )
}