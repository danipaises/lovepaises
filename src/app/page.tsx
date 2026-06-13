'use client'

import { motion } from 'framer-motion'
import { Heart, Sparkles, MessageCircle, ArrowRight, Gift } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [code, setCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (code.length === 5) router.push(`/presente/${code}`)
  }

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      <Stars />

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
            <Sparkles className="w-4 h-4 inline mr-1" /> Presentes que emocionam
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-4">
          Love<span className="text-green-500">Países</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-lg text-gray-400 max-w-lg mb-6">
          Um presente digital no estilo Spotify. Com fotos, linha do tempo, estatísticas e uma carta emocionante.
        </motion.p>

        {/* Code input */}
        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-gray-900 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-green-500/10">
          <label className="text-sm text-gray-400 mb-3 block">
            <Gift className="w-4 h-4 inline mr-1 text-green-500" />
            Digite o código do seu presente
          </label>
          <input
            type="text"
            maxLength={5}
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="Ex: 12345 ou abcde"
            className="w-full bg-black border border-gray-800 text-white text-center text-2xl font-bold tracking-[0.5em] py-4 rounded-2xl focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all uppercase"
          />
          <button type="submit"
            className="w-full bg-green-500 text-black py-4 rounded-full font-bold mt-4 hover:bg-green-400 transition-all flex items-center justify-center gap-2">
            Abrir presente <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>

        {/* WhatsApp */}
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          href="https://wa.me/SEUNUMERO" target="_blank"
          className="mt-8 inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-6 py-3 rounded-full hover:bg-green-600/30 transition-all">
          <MessageCircle className="w-5 h-5" />
          Quer um presente? Fale comigo no WhatsApp
        </motion.a>
      </section>

      <footer className="relative z-10 text-center py-8 text-sm text-gray-800">
        LovePaíses © 2026
      </footer>
    </main>
  )
}

function Stars() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: Math.random() * 100 + '%', top: Math.random() * 100 + '%',
            width: Math.random() * 2 + 1 + 'px', height: Math.random() * 2 + 1 + 'px',
            animationDelay: Math.random() * 5 + 's', opacity: Math.random() * 0.5 + 0.2
          }} />
      ))}
    </div>
  )
}