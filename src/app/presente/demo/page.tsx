'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, ChevronDown, Clock, MapPin, Star, Sparkles, Play, Pause, Music, Calendar, Users, Gift } from 'lucide-react'
import { useState } from 'react'

const data = {
  title: 'Nossa Sintonia',
  from: 'Dani',
  to: 'Você',
  songName: 'Perfect',
  artist: 'Ed Sheeran',
  songUrl: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
  message: 'Desde o momento em que nos conhecemos, soube que você era especial. Cada risada, cada conversa, cada momento compartilhado me fez perceber o quanto você é importante na minha vida. Obrigado por ser exatamente quem você é. Este presente é um pouquinho do que sinto por você.',
  photos: [
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
    'https://images.unsplash.com/photo-1537633552985-d660f013a6e0?w=800',
  ],
  timeline: [
    { date: '2022-09-15', title: 'Nos conhecemos', desc: 'Naquele dia que mudou tudo' },
    { date: '2022-12-25', title: 'Primeiro Natal', desc: 'Troca de presentes inesquecível' },
    { date: '2023-06-12', title: 'Dia dos Namorados', desc: 'Jantar especial à luz de velas' },
    { date: '2024-01-01', title: 'Ano novo juntos', desc: 'Começamos o ano abraçados' },
  ],
  stats: [
    { label: 'Dias juntos', value: '1.374', icon: '📅' },
    { label: 'Mensagens trocadas', value: '12.847', icon: '💬' },
    { label: 'Fotos juntos', value: '342', icon: '📸' },
    { label: 'Filmes assistidos', value: '87', icon: '🎬' },
    { label: 'Músicas da nossa playlist', value: '53', icon: '🎵' },
    { label: 'Viagens juntos', value: '8', icon: '✈️' },
  ],
  qualities: ['Engraçado', 'Carinhoso', 'Leal', 'Inteligente', 'Paciente', 'Aventureiro'],
}

export default function DemoGift() {
  const [section, setSection] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const totalSections = 5

  const nextSection = () => { if (section < totalSections - 1) setSection(section + 1) }

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Fixed header bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-green-500 fill-green-500" />
          <span className="text-sm font-bold">Love<span className="text-green-500">Países</span></span>
        </div>
        <div className="flex gap-1">
          {[0,1,2,3,4].map(i => (
            <div key={i} className={`w-2 h-2 rounded-full transition-all ${i <= section ? 'bg-green-500 w-6' : 'bg-gray-700'}`} />
          ))}
        </div>
        <Link href="/" className="text-xs text-gray-500 hover:text-green-400">Sair</Link>
      </div>

      {/* Intro overlay */}
      {!revealed && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-center px-4">
          {[...Array(30)].map((_, i) => (
            <motion.div key={i} className="absolute bg-green-500 rounded-full"
              style={{ left: Math.random()*100+'%', top: Math.random()*100+'%', width: Math.random()*2+1+'px', height: Math.random()*2+1+'px' }}
              animate={{ opacity: [0,0.6,0] }} transition={{ repeat: Infinity, duration: 2+Math.random()*3, delay: Math.random()*2 }} />
          ))}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.3 }} className="text-7xl mb-6">🎁</motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-gray-400 mb-1">{data.from} preparou algo especial</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-3xl font-bold mb-8">Para {data.to}</motion.p>
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
            onClick={() => setRevealed(true)}
            className="bg-green-500 text-black px-12 py-4 rounded-full text-xl font-bold hover:bg-green-400 transition-all flex items-center gap-2">
            <Gift className="w-5 h-5" /> Abrir presente
          </motion.button>
        </div>
      )}

      {revealed && (
        <div className="pt-14">
          {/* SECTION 1: Capa Spotify */}
          {section === 0 && <SectionCapa nextSection={nextSection} />}
          {/* SECTION 2: Timeline */}
          {section === 1 && <SectionTimeline nextSection={nextSection} />}
          {/* SECTION 3: Stats */}
          {section === 2 && <SectionStats nextSection={nextSection} />}
          {/* SECTION 4: Carta */}
          {section === 3 && <SectionCarta nextSection={nextSection} />}
          {/* SECTION 5: Final */}
          {section === 4 && <SectionFinal />}
        </div>
      )}
    </div>
  )
}

function SectionCapa({ nextSection }: { nextSection: () => void }) {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-black to-black" />
      <div className="relative z-10 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <div className="w-64 h-64 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 shadow-2xl shadow-green-500/20 flex items-center justify-center">
            <Music className="w-32 h-32 text-white/80" />
          </div>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-3">
          {data.from} apresenta
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-2">{data.title}</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="text-gray-400 text-lg mb-8">{data.songName} • {data.artist}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-3">
          <a href={data.songUrl} target="_blank" className="bg-green-500 text-black w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-green-500/30">
            <Play className="w-6 h-6 ml-1" />
          </a>
          <span className="text-sm text-gray-500">Toque para ouvir a música</span>
        </motion.div>
      </div>
      <motion.button onClick={nextSection} animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-gray-600 hover:text-green-400 transition-colors">
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  )
}

function SectionTimeline({ nextSection }: { nextSection: () => void }) {
  return (
    <section className="min-h-[90vh] relative px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-12">
          <p className="text-green-500 text-xs font-semibold uppercase tracking-widest mb-2">Nossa história</p>
          <h2 className="text-4xl md:text-5xl font-bold">Linha do Tempo</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-600 to-transparent" />
          {data.timeline.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}
              className="flex items-start gap-6 mb-10 pl-4">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-2 -ml-[22px] z-10 shrink-0" />
              <div>
                <p className="text-green-500 text-xs font-bold mb-1">{new Date(item.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <button onClick={nextSection} className="text-green-500 hover:text-green-400 text-sm flex items-center gap-1 mx-auto">
          Continuar <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}

function SectionStats({ nextSection }: { nextSection: () => void }) {
  return (
    <section className="min-h-[90vh] relative px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-12">
          <p className="text-green-500 text-xs font-semibold uppercase tracking-widest mb-2">Em números</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa história em dados</h2>
          <p className="text-gray-500">Alguns números que mostram o quanto você é especial</p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {data.stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
              className="bg-gray-900 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-green-500 mb-1">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Qualities */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-8">
          <h3 className="text-lg font-bold mb-4">O que eu mais admiro em você</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {data.qualities.map((q, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-green-500/10 text-green-400 border border-green-500/30 px-4 py-2 rounded-full text-sm font-medium">
                {q}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="text-center">
          <button onClick={nextSection} className="text-green-500 hover:text-green-400 text-sm flex items-center gap-1 mx-auto">
            Continuar <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

function SectionCarta({ nextSection }: { nextSection: () => void }) {
  const photos = data.photos
  return (
    <section className="min-h-[90vh] relative px-4 py-20">
      <div className="max-w-2xl mx-auto">
        {/* Photo collage */}
        <div className="grid grid-cols-3 gap-2 mb-12">
          {photos.slice(0, 3).map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
              className={i === 0 ? 'col-span-2 row-span-2' : ''}>
              <img src={p} alt="" className={`w-full rounded-2xl object-cover ${i === 0 ? 'h-64' : 'h-32'}`} />
            </motion.div>
          ))}
        </div>

        {/* Letter */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
          <Sparkles className="w-6 h-6 text-green-500 mb-4" />
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            &ldquo;{data.message}&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
            <Heart className="w-5 h-5 text-green-500 fill-green-500" />
            <div>
              <p className="font-bold text-sm">{data.from}</p>
              <p className="text-xs text-gray-500">Com todo meu carinho</p>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-10">
          <button onClick={nextSection} className="bg-green-500 text-black px-8 py-3 rounded-full font-bold hover:bg-green-400 transition-all flex items-center gap-2 mx-auto">
            <Gift className="w-4 h-4" /> Revelar surpresa final
          </button>
        </div>
      </div>
    </section>
  )
}

function SectionFinal() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 text-center">
      {[...Array(20)].map((_, i) => (
        <motion.div key={i} className="absolute bg-green-500 rounded-full"
          style={{ left: Math.random()*100+'%', top: Math.random()*100+'%', width: Math.random()*3+1+'px', height: Math.random()*3+1+'px' }}
          animate={{ opacity: [0,1,0], scale: [0.5,1.5,0.5] }} transition={{ repeat: Infinity, duration: 2+Math.random()*3, delay: Math.random()*3 }} />
      ))}
      <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="mb-8">
        <Heart className="w-32 h-32 text-green-500 fill-green-500" />
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold mb-4">Eu te amo!</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-gray-400 text-xl mb-4">Obrigado por ser quem você é</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="text-gray-600 text-sm">Com amor, {data.from} 💚</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
        className="mt-12 flex gap-3">
        <Link href="/" className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors">
          Criar o seu presente
        </Link>
      </motion.div>
    </section>
  )
}