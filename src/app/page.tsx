'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, Sparkles, Camera, Music, QrCode, ArrowRight, Star, Clock, Shield, Users } from 'lucide-react'
import { useState, useRef } from 'react'
import Link from 'next/link'

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection ref={heroRef} opacity={heroOpacity} scale={heroScale} />
      <HowItWorks />
      <Templates />
      <Features />
      <Testimonials />
      <Plans />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-amor-glue"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
            <Heart className="w-7 h-7 text-amor-rosado fill-amor-rosado" />
          </motion.div>
          <span className="text-xl font-display font-bold text-amor-noite">
            Love<span className="text-amor-roxo">Países</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#como-funciona" className="hover:text-amor-roxo transition-colors">Como funciona</a>
          <a href="#modelos" className="hover:text-amor-roxo transition-colors">Modelos</a>
          <a href="#planos" className="hover:text-amor-roxo transition-colors">Planos</a>
          <a href="#faq" className="hover:text-amor-roxo transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-amor-noite hover:text-amor-roxo transition-colors font-medium">
            Entrar
          </Link>
          <Link href="/criar" className="btn-primary text-sm px-6 py-2.5">
            Criar surpresa ✨
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

function HeroSection({ ref, opacity, scale }: any) {
  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amor-glow via-amor-soft to-white" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.5 }}
        className="absolute top-20 left-10 text-8xl"
      >💫</motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-32 right-10 text-7xl"
      >💕</motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-1/3 right-1/4 text-5xl"
      >✨</motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-amor-roxo/10 text-amor-roxo px-4 py-2 rounded-full text-sm mb-8"
        >
          <Sparkles className="w-4 h-4" />
          O presente digital mais emocionante do Brasil
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-amor-noite leading-tight mb-6"
        >
          Transforme memórias
          <br />
          em{' '}
          <span className="bg-gradient-to-r from-amor-roxo via-amor-rosado to-amor-dourado bg-clip-text text-transparent">
            surpresas inesquecíveis
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Crie um presente digital personalizado com fotos, música e mensagens especiais. 
          Compartilhe por link ou QR Code. Em minutos, sem saber programar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/criar" className="btn-primary text-lg px-10 py-4 flex items-center gap-2">
            Criar minha surpresa <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="#como-funciona" className="btn-outline text-lg px-10 py-4">
            Ver como funciona
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center gap-1"><Shield className="w-4 h-4" /> Seguro e privado</div>
          <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> Em 5 minutos</div>
          <div className="flex items-center gap-1"><Users className="w-4 h-4" /> +10 mil presentes criados</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400 text-sm"
        >
          Role para descobrir ↓
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

function HowItWorks() {
  const steps = [
    {
      icon: Camera,
      title: 'Escolha suas fotos',
      desc: 'Faça upload das melhores fotos com aquela pessoa especial',
      color: 'text-amor-rosado bg-amor-rosado/10',
    },
    {
      icon: Music,
      title: 'Conte sua história',
      desc: 'Escreva uma carta ou mensagem especial. Adicione música se quiser',
      color: 'text-amor-roxo bg-amor-roxo/10',
    },
    {
      icon: Sparkles,
      title: 'Escolha o tema',
      desc: 'Personalize com temas românticos, elegantes ou divertidos',
      color: 'text-amor-dourado bg-amor-dourado/10',
    },
    {
      icon: QrCode,
      title: 'Compartilhe',
      desc: 'Envie por link ou QR Code. A pessoa abre e se emociona',
      color: 'text-green-500 bg-green-50',
    },
  ]

  return (
    <section id="como-funciona" className="section text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-display font-bold text-amor-noite mb-16"
      >
        Como funciona?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="card text-center group cursor-default"
          >
            <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
              <step.icon className="w-7 h-7" />
            </div>
            <div className="text-amor-roxo text-xs font-bold uppercase mb-2">Passo {i + 1}</div>
            <h3 className="text-lg font-bold text-amor-noite mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Templates() {
  const templates = [
    { title: '🌹 Pedido de Namoro', desc: 'Surpresa romântica com tela final "Aceita namorar comigo?"', tag: 'Mais popular' },
    { title: '💍 Pedido de Casamento', desc: 'Linha do tempo da relação com pedido no final', tag: 'Premium' },
    { title: '🎂 Aniversário', desc: 'Retrospectiva com fotos, músicas e mensagens de carinho', tag: 'Grátis' },
    { title: '💌 Carta de Amor', desc: 'Carta digital animada com fotos e trilha sonora', tag: 'Grátis' },
    { title: '⏳ Cápsula do Tempo', desc: 'Presente que só abre em uma data futura', tag: 'Premium' },
    { title: '👨‍👩‍👧 Homenagem Família', desc: 'Galeria de momentos especiais em família', tag: 'Grátis' },
  ]

  return (
    <section id="modelos" className="section bg-amor-soft/50">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-display font-bold text-amor-noite text-center mb-16"
      >
        Modelos prontos
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass p-6 cursor-pointer group"
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
              t.tag === 'Premium' ? 'bg-amor-dourado/20 text-amor-dourado' :
              t.tag === 'Mais popular' ? 'bg-amor-rosado/20 text-amor-rosado' :
              'bg-green-100 text-green-600'
            }`}>{t.tag}</span>
            <h3 className="text-xl font-bold text-amor-noite mb-2">{t.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{t.desc}</p>
            <span className="text-amor-roxo text-sm font-semibold group-hover:underline">
              Usar este modelo →
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { icon: '📸', title: 'Linha do Tempo', desc: 'Crie uma retrospectiva emocionante com datas e momentos marcantes' },
    { icon: '💬', title: 'IA Romântica', desc: 'Nossa IA ajuda a escrever cartas e frases baseadas na sua história' },
    { icon: '🔒', title: 'Proteção por Senha', desc: 'Presentes privados só abrem com senha ou em data específica' },
    { icon: '📱', title: 'QR Code', desc: 'Gere um QR Code para entregar pessoalmente junto com um cartão' },
    { icon: '🎨', title: '8 Temas Únicos', desc: 'Romântico, elegante, fofo, minimalista, divertido, luxo e mais' },
    { icon: '⭐', title: 'Mensagens Surpresa', desc: 'Frases escondidas que aparecem ao rolar a página' },
  ]

  return (
    <section className="section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-display font-bold text-amor-noite text-center mb-16"
      >
        Recursos especiais
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card group"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-lg font-bold text-amor-noite mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    { name: 'Ana & Pedro', text: 'Chorei quando abri! Ele fez uma linha do tempo do nosso namoro com fotos desde o começo. Foi o melhor presente da vida.', avatar: '💑' },
    { name: 'Marina', text: 'Fiz um pedido de namoro digital e mandei o QR Code dentro de uma caixinha. Ele disse SIM na hora!', avatar: '💍' },
    { name: 'Carla', text: 'Usei a IA para escrever uma carta de aniversário pra minha mãe. Ela mostrou pra família inteira no grupo.', avatar: '👩‍👧' },
  ]

  return (
    <section className="section bg-gradient-to-b from-white to-amor-soft">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-display font-bold text-amor-noite text-center mb-16"
      >
        Quem já se emocionou 💕
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className="card text-center"
          >
            <div className="text-5xl mb-4">{r.avatar}</div>
            <div className="flex gap-1 justify-center mb-3">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amor-dourado text-amor-dourado" />)}
            </div>
            <p className="text-gray-600 italic mb-4">&ldquo;{r.text}&rdquo;</p>
            <p className="text-amor-noite font-bold">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Plans() {
  const plans = [
    {
      name: 'Grátis',
      price: '0',
      period: 'para sempre',
      features: ['Até 10 fotos', '1 tema', 'Link compartilhável', 'QR Code básico', 'Marca d\'água'],
      cta: 'Começar grátis',
      highlight: false,
    },
    {
      name: 'Premium',
      price: '19,90',
      period: 'por presente',
      features: ['Fotos ilimitadas', '8 temas exclusivos', 'Música de fundo', 'QR Code alta qualidade', 'Sem marca d\'água', 'IA para cartas', 'Proteção por senha', 'Modo cápsula do tempo'],
      cta: 'Escolher Premium',
      highlight: true,
    },
  ]

  return (
    <section id="planos" className="section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-display font-bold text-amor-noite text-center mb-6"
      >
        Planos
      </motion.h2>
      <p className="text-gray-500 text-center mb-16">Comece grátis. Evolua quando quiser.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className={`card relative ${p.highlight ? 'border-2 border-amor-roxo ring-4 ring-amor-roxo/10' : ''}`}
          >
            {p.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amor-roxo to-amor-rosado text-white px-6 py-1 rounded-full text-sm font-bold">
                Mais escolhido ⭐
              </div>
            )}
            <h3 className="text-2xl font-display font-bold text-amor-noite mb-2">{p.name}</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-amor-roxo">R${p.price}</span>
              <span className="text-gray-400"> /{p.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className={`w-4 h-4 ${p.highlight ? 'text-amor-dourado fill-amor-dourado' : 'text-amor-roxo'}`} />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={p.highlight ? '/planos' : '/criar'}
              className={`block text-center py-3 rounded-full font-semibold transition-all ${
                p.highlight
                  ? 'bg-amor-roxo text-white hover:bg-amor-roxo/90'
                  : 'border-2 border-amor-roxo text-amor-roxo hover:bg-amor-roxo hover:text-white'
              }`}
            >
              {p.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const faqs = [
    { q: 'Preciso saber programar?', a: 'Não! Nossa plataforma é tão fácil que qualquer pessoa cria um presente lindo em 5 minutos.' },
    { q: 'Como a pessoa recebe o presente?', a: 'Você recebe um link exclusivo e um QR Code. Pode enviar por WhatsApp, imprimir num cartão ou entregar pessoalmente.' },
    { q: 'Quanto tempo o presente fica no ar?', a: 'Seus presentes ficam disponíveis enquanto sua conta estiver ativa. No plano gratuito, 30 dias.' },
    { q: 'Posso colocar senha?', a: 'Sim! No plano Premium você protege com senha ou programa para abrir só em uma data específica.' },
    { q: 'A IA realmente escreve cartas?', a: 'Sim! Conte um pouco da sua história e nossa IA cria uma carta personalizada e emocionante.' },
  ]

  return (
    <section id="faq" className="section bg-amor-noite text-white">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
        Perguntas frequentes
      </h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-center justify-between p-5">
              <span className="font-semibold">{f.q}</span>
              <span className="text-xl">{open === i ? '−' : '+'}</span>
            </div>
            {open === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="px-5 pb-5 text-gray-300"
              >
                {f.a}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="section text-center bg-gradient-to-br from-amor-glow via-amor-soft to-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-6xl mb-6 inline-block"
        >
          💝
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-amor-noite mb-6">
          Pronto para emocionar alguém?
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
          Em 5 minutos você cria um presente único que vai ficar na memória para sempre.
        </p>
        <Link href="/criar" className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-2">
          Criar presente grátis <Heart className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-amor-noite text-gray-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-amor-rosado fill-amor-rosado" />
            <span className="text-xl font-display font-bold text-white">
              Love<span className="text-amor-roxo">Países</span>
            </span>
          </div>
          <p className="text-sm">Presentes digitais que emocionam.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Produto</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/criar" className="hover:text-white">Criar presente</a></li>
            <li><a href="/planos" className="hover:text-white">Planos</a></li>
            <li><a href="#modelos" className="hover:text-white">Modelos</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Suporte</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/ajuda" className="hover:text-white">Central de ajuda</a></li>
            <li><a href="/termos" className="hover:text-white">Termos de uso</a></li>
            <li><a href="/privacidade" className="hover:text-white">Privacidade</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li>contato@lovepaises.com</li>
            <li>São Paulo, Brasil</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm">
        © 2026 LovePaíses. Todos os direitos reservados. Feito com ❤️
      </div>
    </footer>
  )
}
