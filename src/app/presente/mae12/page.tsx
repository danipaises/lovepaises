'use client'

import { motion } from 'framer-motion'
import { Heart, ChevronDown, Play, Music, Sparkles, Clock, Gift, MapPin } from 'lucide-react'
import { useState } from 'react'

const DATA = {
  title: 'Obrigado por tudo, Mãe',
  from: 'Dani',
  to: 'Márcia',
  songName: 'Galileu',
  artist: 'Fernandinho',
  songUrl: 'https://open.spotify.com/track/3BLj3BUTTlNjVkhdR45z9e',
  message: 'Mãe, você é a pessoa mais importante da minha vida. Obrigado por cada abraço, cada conselho, cada risada compartilhada. Obrigado por me ensinar o que é amor de verdade. Você é minha heroína, minha amiga, meu tudo. Te amo mais que tudo nessa vida!',
  photos: ['/fotos/mae12/1.jpg','/fotos/mae12/2.jpg','/fotos/mae12/3.jpg','/fotos/mae12/4.jpg','/fotos/mae12/5.jpg'],
  timeline: [
    { date: '2011-12-28', title: 'Dani nasceu', desc: 'O dia em que você se tornou mãe pela primeira vez' },
    { date: '2019-06-15', title: 'Nosso abraço mais forte', desc: 'Aquele dia que você me abraçou e eu senti o amor mais puro do mundo' },
    { date: '2024-01-01', title: 'Ano novo juntos', desc: 'Começamos mais um ano lado a lado, com fé e gratidão' },
  ],
  stats: [
    { label: 'Filhos', value: '2', icon: '👨‍👩‍👦' },
    { label: 'Idade', value: '56', icon: '🎂' },
    { label: 'Cidade natal', value: 'Além Paraíba', icon: '🏠' },
    { label: 'Mora em', value: 'Cabo Frio', icon: '🌴' },
    { label: 'Streams da música', value: '137M', icon: '🎵' },
    { label: 'Amor por você', value: 'Infinito', icon: '💚' },
  ],
}

export default function Mae12Page() {
  const [revealed, setRevealed] = useState(false)
  const [section, setSection] = useState(0)

  if (!revealed) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-center px-4 z-50">
        {[...Array(30)].map((_, i) => (
          <motion.div key={i} className="absolute bg-green-500 rounded-full"
            style={{ left: Math.random()*100+'%', top: Math.random()*100+'%', width: Math.random()*2+1+'px', height: Math.random()*2+1+'px' }}
            animate={{ opacity: [0,0.6,0] }} transition={{ repeat: Infinity, duration: 2+Math.random()*3, delay: Math.random()*2 }} />
        ))}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="text-7xl mb-6">🎁</motion.div>
        <p className="text-gray-400 mb-1">{DATA.from} preparou algo especial</p>
        <p className="text-3xl font-bold mb-8">Para você, {DATA.to}</p>
        <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
          onClick={() => setRevealed(true)}
          className="bg-green-500 text-black px-12 py-4 rounded-full text-xl font-bold hover:bg-green-400 transition-all flex items-center gap-2">
          <Gift className="w-5 h-5" /> Abrir presente
        </motion.button>
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-bold">Love<span className="text-green-500">Países</span></span>
        <div className="flex gap-1">
          {[0,1,2,3,4].map(i => (
            <div key={i} className={`h-2 rounded-full transition-all ${i <= section ? 'bg-green-500 w-6' : 'bg-gray-700 w-2'}`} />
          ))}
        </div>
        <span className="text-xs text-gray-600">Cód: mae12</span>
      </div>
      <div className="pt-14">
        {section === 0 && <SectionCapa next={() => setSection(1)} />}
        {section === 1 && <SectionTimeline next={() => setSection(2)} />}
        {section === 2 && <SectionStats next={() => setSection(3)} />}
        {section === 3 && <SectionCarta next={() => setSection(4)} />}
        {section === 4 && <SectionFinal />}
      </div>
    </div>
  )
}

function SectionCapa({ next }: { next: () => void }) {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 relative">
      <div className="w-64 h-64 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 shadow-2xl shadow-green-500/20 flex items-center justify-center">
        <Music className="w-32 h-32 text-white/80" />
      </div>
      <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-3">{DATA.from} apresenta</p>
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center">{DATA.title}</h1>
      <p className="text-gray-400 text-lg mb-8">{DATA.songName} • {DATA.artist}</p>
      <a href={DATA.songUrl} target="_blank" className="bg-green-500 text-black w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
        <Play className="w-6 h-6 ml-1" />
      </a>
      <button onClick={next} className="absolute bottom-10 text-gray-600 hover:text-green-400 transition-colors animate-bounce mt-10">
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}

function SectionTimeline({ next }: { next: () => void }) {
  return (
    <section className="min-h-[85vh] px-4 py-20">
      <div className="max-w-md mx-auto">
        <p className="text-green-500 text-xs font-semibold uppercase tracking-widest mb-8 text-center">Nossa história</p>
        <h2 className="text-3xl font-bold mb-10 text-center">Linha do Tempo</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-transparent" />
          {DATA.timeline.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}
              className="flex items-start gap-6 mb-10 pl-4">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-2 -ml-[22px] z-10 shrink-0" />
              <div>
                <p className="text-green-500 text-xs font-bold mb-1">{new Date(item.date+'T00:00:00').toLocaleDateString('pt-BR', { day:'numeric', month:'long', year:'numeric' })}</p>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <button onClick={next} className="text-green-500 hover:text-green-400 text-sm flex items-center gap-1 mx-auto">
          Continuar <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}

function SectionStats({ next }: { next: () => void }) {
  return (
    <section className="min-h-[85vh] px-4 py-20">
      <div className="max-w-md mx-auto">
        <p className="text-green-500 text-xs font-semibold uppercase tracking-widest mb-8 text-center">Em números</p>
        <h2 className="text-3xl font-bold mb-10 text-center">Sobre você, Márcia</h2>
        <div className="grid grid-cols-2 gap-3">
          {DATA.stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
              className="bg-gray-900 rounded-2xl p-5 text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-2xl font-bold text-green-500">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <button onClick={next} className="text-green-500 hover:text-green-400 text-sm flex items-center gap-1 mx-auto">
          Continuar <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}

function SectionCarta({ next }: { next: () => void }) {
  return (
    <section className="min-h-[85vh] px-4 py-20">
      <div className="max-w-md mx-auto">
        <div className="flex gap-2 mb-8">
          {DATA.photos.slice(0, 3).map((p, i) => (
            <img key={i} src={p} alt="" className={`rounded-2xl object-cover ${i===0?'h-48 w-2/3':'h-24 w-1/3'}`} />
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
          <Sparkles className="w-6 h-6 text-green-500 mb-4" />
          <p className="text-gray-300 leading-relaxed mb-4">&ldquo;{DATA.message}&rdquo;</p>
          <div className="flex items-center gap-2 pt-4 border-t border-gray-800">
            <Heart className="w-4 h-4 text-green-500 fill-green-500" />
            <p className="font-bold text-sm">{DATA.from}</p>
          </div>
        </motion.div>
      </div>
      <div className="text-center mt-8">
        <button onClick={next} className="bg-green-500 text-black px-8 py-3 rounded-full font-bold hover:bg-green-400 transition-all flex items-center gap-2 mx-auto">
          <Gift className="w-4 h-4" /> Revelar surpresa final
        </button>
      </div>
    </section>
  )
}

function SectionFinal() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="mb-8">
        <Heart className="w-24 h-24 text-green-500 fill-green-500" />
      </motion.div>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Te amo, mãe!</h1>
      <p className="text-gray-400 text-xl mb-2">Obrigado por tudo</p>
      <p className="text-gray-600 text-sm">Com amor, {DATA.from} 💚</p>
    </section>
  )
}