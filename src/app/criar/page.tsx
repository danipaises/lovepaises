'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Camera, Music, Sparkles, ArrowLeft, ArrowRight, Upload, Image, Type, Star, Lock, Clock, QrCode, Eye, Gift } from 'lucide-react'
import Link from 'next/link'

type Theme = 'romantico' | 'elegante' | 'fofo' | 'minimalista' | 'divertido' | 'luxo' | 'nostalgia' | 'estrelado'
type Occasion = 'namoro' | 'aniversario' | 'casamento' | 'pedido-namoro' | 'pedido-casamento' | 'homenagem' | 'amizade' | 'familia' | 'saudade'

const themes: { id: Theme; name: string; color: string; emoji: string }[] = [
  { id: 'romantico', name: 'Romântico', color: 'from-amor-rosado to-red-400', emoji: '🌹' },
  { id: 'elegante', name: 'Elegante', color: 'from-amor-noite to-indigo-800', emoji: '✨' },
  { id: 'fofo', name: 'Fofo', color: 'from-pink-300 to-amor-rosado', emoji: '🧸' },
  { id: 'minimalista', name: 'Minimalista', color: 'from-gray-200 to-gray-400', emoji: '🕊️' },
  { id: 'divertido', name: 'Divertido', color: 'from-yellow-300 to-amor-dourado', emoji: '🎉' },
  { id: 'luxo', name: 'Luxo', color: 'from-amor-dourado to-yellow-600', emoji: '👑' },
  { id: 'nostalgia', name: 'Nostalgia', color: 'from-amber-400 to-orange-600', emoji: '📷' },
  { id: 'estrelado', name: 'Céu Estrelado', color: 'from-indigo-900 to-amor-roxo', emoji: '🌌' },
]

const occasions: { id: Occasion; name: string; desc: string; emoji: string }[] = [
  { id: 'aniversario', name: 'Aniversário', desc: 'Homenagem de aniversário', emoji: '🎂' },
  { id: 'namoro', name: 'Namoro', desc: 'Celebração de namoro', emoji: '💕' },
  { id: 'pedido-namoro', name: 'Pedido de Namoro', desc: 'Uma surpresa romântica', emoji: '💌' },
  { id: 'pedido-casamento', name: 'Pedido de Casamento', desc: 'O momento mais especial', emoji: '💍' },
  { id: 'casamento', name: 'Casamento', desc: 'Celebre a união', emoji: '💒' },
  { id: 'homenagem', name: 'Homenagem', desc: 'Para alguém especial', emoji: '🏆' },
  { id: 'amizade', name: 'Amizade', desc: 'Para melhores amigos', emoji: '🤝' },
  { id: 'familia', name: 'Família', desc: 'Momentos em família', emoji: '👨‍👩‍👧' },
  { id: 'saudade', name: 'Saudade', desc: 'Para matar a saudade', emoji: '🥺' },
]

export default function CriarPage() {
  const [step, setStep] = useState(1)
  const [occasion, setOccasion] = useState<Occasion | null>(null)
  const [theme, setTheme] = useState<Theme>('romantico')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [photos, setPhotos] = useState<string[]>([])
  const [music, setMusic] = useState('')
  const [password, setPassword] = useState('')
  const [openDate, setOpenDate] = useState('')
  const [dateStart, setDateStart] = useState('')

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newPhotos = Array.from(files).map(f => URL.createObjectURL(f))
      setPhotos(prev => [...prev, ...newPhotos].slice(0, 20))
    }
  }

  return (
    <div className="min-h-screen bg-amor-soft/30">
      {/* Header */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-amor-noite hover:text-amor-roxo transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span className={step >= 1 ? 'text-amor-roxo font-bold' : ''}>1. Tipo</span>
              <span className="mx-1">→</span>
              <span className={step >= 2 ? 'text-amor-roxo font-bold' : ''}>2. Tema</span>
              <span className="mx-1">→</span>
              <span className={step >= 3 ? 'text-amor-roxo font-bold' : ''}>3. Conteúdo</span>
              <span className="mx-1">→</span>
              <span className={step >= 4 ? 'text-amor-roxo font-bold' : ''}>4. Revisão</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="btn-outline text-sm px-4 py-2">
                Anterior
              </button>
            )}
            <button onClick={() => setStep(step + 1)} className="btn-primary text-sm px-4 py-2 flex items-center gap-1">
              Próximo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <motion.div
            className="h-full bg-gradient-to-r from-amor-roxo to-amor-rosado"
            animate={{ width: `${(step / 4) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {step === 1 && <StepOccasion occasion={occasion} setOccasion={setOccasion} occasions={occasions} />}
        {step === 2 && <StepTheme theme={theme} setTheme={setTheme} themes={themes} />}
        {step === 3 && (
          <StepContent
            title={title} setTitle={setTitle}
            message={message} setMessage={setMessage}
            photos={photos} handlePhotoUpload={handlePhotoUpload}
            music={music} setMusic={setMusic}
            password={password} setPassword={setPassword}
            openDate={openDate} setOpenDate={setOpenDate}
            dateStart={dateStart} setDateStart={setDateStart}
          />
        )}
        {step === 4 && (
          <StepReview
            occasion={occasion} theme={theme}
            title={title} photos={photos}
            occasions={occasions} themes={themes}
          />
        )}
      </div>
    </div>
  )
}

function StepOccasion({ occasion, setOccasion, occasions }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="text-center mb-10">
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-5xl mb-4">🎁</motion.div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-amor-noite mb-2">
          Qual a ocasião?
        </h1>
        <p className="text-gray-500">Escolha o tipo de presente que deseja criar</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {occasions.map((o: any) => (
          <motion.button
            key={o.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOccasion(o.id)}
            className={`p-6 rounded-2xl border-2 text-left transition-all ${
              occasion === o.id
                ? 'border-amor-roxo bg-amor-roxo/5 shadow-lg'
                : 'border-gray-100 bg-white hover:border-amor-rosado/50'
            }`}
          >
            <span className="text-3xl mb-3 block">{o.emoji}</span>
            <h3 className="text-sm font-bold text-amor-noite">{o.name}</h3>
            <p className="text-xs text-gray-400 mt-1">{o.desc}</p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

function StepTheme({ theme, setTheme, themes }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="text-center mb-10">
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-5xl mb-4">🎨</motion.div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-amor-noite mb-2">
          Escolha o tema visual
        </h1>
        <p className="text-gray-500">Cada tema transforma a experiência do seu presente</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {themes.map((t: any) => (
          <motion.button
            key={t.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setTheme(t.id)}
            className={`p-5 rounded-2xl border-2 text-center transition-all ${
              theme === t.id
                ? 'border-amor-roxo shadow-lg'
                : 'border-gray-100 bg-white hover:border-amor-rosado/50'
            }`}
          >
            <div className={`w-full h-20 rounded-xl bg-gradient-to-br ${t.color} mb-3 flex items-center justify-center text-3xl`}>
              {t.emoji}
            </div>
            <h3 className="text-sm font-bold text-amor-noite">{t.name}</h3>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

function StepContent({ title, setTitle, message, setMessage, photos, handlePhotoUpload, music, setMusic, password, setPassword, openDate, setOpenDate, dateStart, setDateStart }: any) {
  const [useIA, setUseIA] = useState(false)
  
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="text-center">
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-5xl mb-4">✍️</motion.div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-amor-noite mb-2">
          Conte a sua história
        </h1>
        <p className="text-gray-500">Adicione fotos, escreva sua mensagem e personalize</p>
      </div>

      {/* Title */}
      <div className="card">
        <label className="flex items-center gap-2 text-sm font-bold text-amor-noite mb-3">
          <Type className="w-4 h-4 text-amor-roxo" /> Título do presente
        </label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Ex: "Nossa história de amor" ou "Feliz aniversário, amor!"'
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amor-roxo focus:ring-2 focus:ring-amor-roxo/20 outline-none text-lg"
        />
      </div>

      {/* Photos */}
      <div className="card">
        <label className="flex items-center gap-2 text-sm font-bold text-amor-noite mb-3">
          <Camera className="w-4 h-4 text-amor-roxo" /> Fotos ({photos.length}/20)
        </label>
        <div className="flex flex-wrap gap-3 mb-4">
          {photos.map((p: string, i: number) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="relative w-24 h-24 rounded-xl overflow-hidden"
            >
              <img src={p} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
              <button
                onClick={() => photos.splice(i, 1)}
                className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center"
              >
                ×
              </button>
            </motion.div>
          ))}
          <label className="w-24 h-24 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-amor-roxo transition-colors">
            <Upload className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400 mt-1">Adicionar</span>
            <input type="file" accept="image/*" multiple onChange={handlePhotoUpload} className="hidden" />
          </label>
        </div>
      </div>

      {/* Message */}
      <div className="card">
        <label className="flex items-center gap-2 text-sm font-bold text-amor-noite mb-3">
          <Sparkles className="w-4 h-4 text-amor-roxo" /> Sua mensagem
        </label>
        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={() => setUseIA(!useIA)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              useIA
                ? 'bg-amor-roxo text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-amor-roxo/10'
            }`}
          >
            🤖 Usar IA para escrever
          </button>
        </div>
        {useIA && (
          <div className="bg-amor-roxo/5 rounded-xl p-4 mb-3 text-sm">
            <p className="text-amor-roxo font-semibold mb-2">Conte um pouco da história de vocês:</p>
            <textarea
              placeholder="Ex: Conheci ela na faculdade, nosso primeiro beijo foi no parque... ela adora gatos e sorvete de morango."
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-amor-roxo"
              rows={3}
            />
            <button className="mt-2 bg-amor-roxo text-white px-4 py-2 rounded-full text-xs font-semibold">
              Gerar carta romântica ✨
            </button>
          </div>
        )}
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Escreva sua carta, mensagem ou o que seu coração mandar..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amor-roxo focus:ring-2 focus:ring-amor-roxo/20 outline-none resize-none"
          rows={6}
        />
      </div>

      {/* Music */}
      <div className="card">
        <label className="flex items-center gap-2 text-sm font-bold text-amor-noite mb-3">
          <Music className="w-4 h-4 text-amor-roxo" /> Música de fundo (opcional)
        </label>
        <input
          type="text"
          value={music}
          onChange={e => setMusic(e.target.value)}
          placeholder="Cole o link do YouTube ou Spotify..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amor-roxo focus:ring-2 focus:ring-amor-roxo/20 outline-none"
        />
      </div>

      {/* Advanced options */}
      <details className="card">
        <summary className="cursor-pointer text-sm font-bold text-amor-noite flex items-center gap-2">
          <Lock className="w-4 h-4 text-amor-dourado" /> Opções avançadas (Premium)
        </summary>
        <div className="mt-4 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Proteger com senha (opcional)
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Deixe em branco para não usar"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amor-roxo outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              <Clock className="w-4 h-4 inline mr-1" /> Abrir apenas em data específica
            </label>
            <input
              type="date"
              value={openDate}
              onChange={e => setOpenDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amor-roxo outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Data do início da relação (para contador de dias)
            </label>
            <input
              type="date"
              value={dateStart}
              onChange={e => setDateStart(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amor-roxo outline-none"
            />
          </div>
        </div>
      </details>
    </motion.div>
  )
}

function StepReview({ occasion, theme, title, photos, occasions, themes }: any) {
  const occ = occasions.find((o: any) => o.id === occasion)
  const thm = themes.find((t: any) => t.id === theme)

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
      <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-5xl mb-4">👀</motion.div>
      <h1 className="text-3xl md:text-4xl font-display font-bold text-amor-noite mb-2">
        Quase pronto!
      </h1>
      <p className="text-gray-500 mb-10">Revise seu presente antes de publicar</p>

      {/* Preview mock */}
      <div className={`max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${thm?.color}`}>
        <div className="p-8 text-center text-white min-h-[300px] flex flex-col items-center justify-center">
          <span className="text-5xl mb-4">{occ?.emoji || '💝'}</span>
          <h2 className="text-xl font-display font-bold mb-2">{title || 'Seu presente incrível'}</h2>
          <div className="flex gap-1 mt-3">
            {photos.slice(0, 3).map((p: string, i: number) => (
              <div key={i} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/30">
                <img src={p} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-sm text-white/70 mt-4">{photos.length} fotos • {occ?.name} • {thm?.name}</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <Link href="/presente/demo" className="btn-outline flex items-center gap-2">
          <Eye className="w-4 h-4" /> Ver prévia
        </Link>
        <Link href="/presente/demo" className="btn-primary flex items-center gap-2">
          <Gift className="w-4 h-4" /> Publicar presente ✨
        </Link>
      </div>
    </motion.div>
  )
}