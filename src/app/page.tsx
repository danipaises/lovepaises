import { motion } from 'framer-motion'
import { Heart, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      {/* Stars bg */}
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

      {/* Nav */}
      <nav className="relative z-10 px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-green-500 fill-green-500" />
          <span className="text-xl font-bold tracking-tight">Love<span className="text-green-500">Países</span></span>
        </div>
        <Link href="/presente/demo" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-400 transition-colors">
          Ver demo
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
            <Sparkles className="w-4 h-4 inline mr-1" /> O presente mais emocionante do Brasil
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-6">
          Sua história<br />
          <span className="text-green-500">em forma de música</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-lg text-gray-400 max-w-xl mb-10">
          Um presente digital no estilo Spotify. Com fotos, linha do tempo, estatísticas da amizade e uma carta emocionante.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4">
          <Link href="/presente/demo" className="bg-green-500 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-green-400 transition-all flex items-center gap-2 justify-center">
            Ver demonstração <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="#how" className="border border-gray-700 text-white px-10 py-4 rounded-full text-lg font-semibold hover:border-green-500 transition-all text-center">
            Como funciona
          </a>
        </motion.div>
      </section>

      {/* Como funciona */}
      <section id="how" className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Como funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: '1', icon: '💬', title: 'Conte sua história', desc: 'Responda perguntas simples sobre a pessoa' },
            { step: '2', icon: '📸', title: 'Envie suas fotos', desc: 'As melhores fotos com aquela pessoa' },
            { step: '3', icon: '🎵', title: 'Escolha a música', desc: 'A trilha sonora da história de vocês' },
            { step: '4', icon: '🎁', title: 'Surpreenda!', desc: 'Link pronto em minutos para compartilhar' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-gray-900 rounded-3xl p-6 text-center hover:bg-gray-800 transition-colors">
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-green-500 text-xs font-bold mb-2">PASSO {item.step}</div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* O que inclui */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">O que inclui?</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {[
            { icon: '🎵', title: 'Capa', desc: 'Estilo Spotify com título da música' },
            { icon: '📸', title: 'Timeline', desc: 'Linha do tempo com fotos e datas' },
            { icon: '📊', title: 'Stats', desc: 'Números e curiosidades sobre vocês' },
            { icon: '💌', title: 'Carta', desc: 'Mensagem emocionante no final' },
            { icon: '🎁', title: 'Revelação', desc: 'Clique para abrir o presente' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-gray-900 rounded-3xl p-6 text-center group hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 text-center py-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Pronto pra emocionar?</h2>
          <p className="text-gray-400 text-lg mb-8">Em 5 minutos você cria algo inesquecível</p>
          <Link href="/presente/demo" className="bg-green-500 text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-green-400 transition-all inline-flex items-center gap-2">
            Ver demonstração <Heart className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-8 text-center text-sm text-gray-600">
        LovePaíses © 2026 — Feito com ❤️
      </footer>
    </main>
  )
}
