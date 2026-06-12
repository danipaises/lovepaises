'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Plus, Edit, Trash2, Copy, QrCode, ExternalLink, Eye, Clock, Lock, Star, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

const presentesDemo = [
  {
    id: '1',
    title: 'Nossa História de Amor',
    to: 'Pedro',
    occasion: 'namoro',
    emoji: '💕',
    date: '2026-02-14',
    views: 42,
    status: 'publico',
  },
  {
    id: '2',
    title: 'Feliz Aniversário Mamãe',
    to: 'Maria',
    occasion: 'aniversario',
    emoji: '🎂',
    date: '2026-01-10',
    views: 18,
    status: 'publico',
  },
  {
    id: '3',
    title: 'Pedido Especial 💍',
    to: 'Amanda',
    occasion: 'pedido-casamento',
    emoji: '💍',
    date: '2026-06-01',
    views: 0,
    status: 'senha',
  },
]

export default function PainelPage() {
  const [presentes, setPresentes] = useState(presentesDemo)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-amor-rosado fill-amor-rosado" />
            <span className="text-xl font-display font-bold text-amor-noite">
              Love<span className="text-amor-roxo">Países</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/criar" className="btn-primary text-sm px-4 py-2 flex items-center gap-1">
              <Plus className="w-4 h-4" /> Novo presente
            </Link>
            <button className="w-9 h-9 rounded-full bg-amor-roxo text-white font-bold text-sm">A</button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-display font-bold text-amor-noite mb-2">Meus presentes</h1>
          <p className="text-gray-500">Gerencie todos os seus presentes digitais</p>
        </div>

        {presentes.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-6xl block mb-4">🎁</span>
            <h2 className="text-2xl font-display font-bold text-amor-noite mb-2">Nenhum presente ainda</h2>
            <p className="text-gray-500 mb-6">Crie seu primeiro presente em minutos</p>
            <Link href="/criar" className="btn-primary inline-flex items-center gap-2">
              <Plus className="w-5 h-5" /> Criar presente
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentes.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{p.emoji}</span>
                    <div className="flex items-center gap-2">
                      {p.status === 'senha' && <Lock className="w-4 h-4 text-amor-dourado" />}
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-amor-noite mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">Para: {p.to}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {p.views}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(p.date).toLocaleDateString('pt-BR')}</span>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/presente/${p.id}`}
                      className="flex-1 bg-amor-roxo/10 text-amor-roxo text-sm font-semibold py-2 rounded-xl text-center hover:bg-amor-roxo hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 inline mr-1" /> Abrir
                    </Link>
                    <button className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <Copy className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <QrCode className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            <Link href="/criar" className="border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-10 text-gray-400 hover:border-amor-roxo hover:text-amor-roxo transition-colors">
              <Plus className="w-10 h-10 mb-2" />
              <span className="font-semibold">Novo presente</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
