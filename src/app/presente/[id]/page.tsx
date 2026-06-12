'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, Music, Camera, Calendar, MapPin, ChevronDown, Clock, Star, Lock, Sparkles, QrCode, Share2 } from 'lucide-react'
import { useState, useEffect } from 'react'

// Demo data
const demo = {
  title: 'Nossa História de Amor',
  from: 'Ana',
  to: 'Pedro',
  theme: 'romantico',
  occasion: 'namoro',
  startDate: '2023-03-15',
  message: 'Desde o dia em que te conheci, minha vida ganhou cor. Cada momento ao seu lado é um presente que guardo no coração. Você é a melhor parte dos meus dias, o sorriso que ilumina minhas manhãs e o abraço que acalma minhas noites. Obrigado por ser exatamente quem você é. Te amo hoje, amanhã e sempre.',
  photos: [
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600',
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600',
  ],
  specialDates: [
    { date: '2023-03-15', title: 'Dia que nos conhecemos', desc: 'Na festa da faculdade' },
    { date: '2023-06-24', title: 'Primeiro beijo', desc: 'No parque de noite' },
    { date: '2024-01-01', title: 'Primeira viagem juntos', desc: 'Praia de Maresias' },
  ],
}

export default function PresentePage() {
  const [show, setShow] = useState(false)
  const days = Math.floor((Date.now() - new Date(demo.startDate).getTime()) / (1000 * 60 * 60 * 24))
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])

  if (!show) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amor-noite via-amor-roxo to-amor-rosado flex items-center justify-center overflow-hidden">
        {/* Animated background stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{ repeat: Infinity, duration: 2 + Math.random() * 3, delay: Math.random() * 2 }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="text-center z-10"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-8xl mb-6"
          >
            🎁
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white text-xl mb-8 font-light"
          >
            {demo.from} preparou uma surpresa para você
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShow(true)}
            className="bg-white text-amor-roxo px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl flex items-center gap-2 mx-auto"
          >
            <Heart className="w-5 h-5 fill-amor-roxo" /> Abrir surpresa
          </motion.button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-amor-soft to-white">
      {/* HERO */}
      <motion.section style={{ opacity: headerOpacity }} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amor-rosado/20 via-amor-soft to-amor-glow flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-10 left-1/2 -translate-x-1/2"
        >
          <Heart className="w-16 h-16 text-amor-rosado fill-amor-rosado/30" />
        </motion.div>
        <div className="text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block text-6xl mb-6"
          >💕</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-display font-bold text-amor-noite mb-4"
          >
            {demo.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-500"
          >
            De {demo.from} para {demo.to}
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12"
          >
            <ChevronDown className="w-8 h-8 text-amor-roxo mx-auto" />
          </motion.div>
        </div>
      </motion.section>

      {/* DAYS COUNT */}
      <section className="py-16 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto"
        >
          <Clock className="w-10 h-10 text-amor-rosado mx-auto mb-4" />
          <p className="text-gray-400 uppercase text-sm tracking-wider mb-2">Estamos juntos há</p>
          <p className="text-6xl md:text-8xl font-display font-bold bg-gradient-to-r from-amor-rosado to-amor-roxo bg-clip-text text-transparent">
            {days}
          </p>
          <p className="text-xl text-gray-500 mt-2">dias</p>
        </motion.div>
      </section>

      {/* PHOTOS GALLERY */}
      <section className="py-16 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-display font-bold text-center text-amor-noite mb-12"
        >
          Nossos momentos
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {demo.photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <img
                src={p}
                alt={`Momento ${i + 1}`}
                className={`w-full rounded-3xl object-cover shadow-lg ${i === 0 ? 'h-80 md:h-full' : 'h-60'}`}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 bg-amor-soft/50">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-display font-bold text-center text-amor-noite mb-12"
        >
          Linha do tempo
        </motion.h2>
        <div className="max-w-2xl mx-auto px-4">
          {demo.specialDates.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-start gap-6 mb-8 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-amor-rosado border-4 border-white shadow" />
                {i < demo.specialDates.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-amor-rosado to-transparent mt-2" />
                )}
              </div>
              <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm">
                <p className="text-xs text-amor-rosado font-bold mb-1">
                  {new Date(d.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <h3 className="text-lg font-bold text-amor-noite">{d.title}</h3>
                <p className="text-gray-500 text-sm">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MESSAGE */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Sparkles className="w-10 h-10 text-amor-dourado mx-auto mb-6" />
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-amor-rosado/10">
            <p className="text-lg text-gray-700 leading-relaxed font-body italic">
              &ldquo;{demo.message}&rdquo;
            </p>
          </div>
        </motion.div>
      </section>

      {/* FINAL HEART */}
      <section className="py-20 text-center bg-gradient-to-b from-white to-amor-rosado/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart className="w-20 h-20 text-amor-rosado fill-amor-rosado mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl font-display font-bold text-amor-noite mb-4">
            Eu te amo!
          </h2>
          <p className="text-gray-500 text-lg">Obrigado por existir na minha vida 💕</p>
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-amor-roxo text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
            >
              <Share2 className="w-4 h-4" /> Compartilhar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-amor-roxo text-amor-roxo px-6 py-3 rounded-full flex items-center gap-2"
            >
              <QrCode className="w-4 h-4" /> QR Code
            </motion.button>
          </div>
        </motion.div>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm">
        Criado com ❤️ por <span className="text-amor-roxo font-bold">LovePaíses</span>
      </footer>
    </div>
  )
}