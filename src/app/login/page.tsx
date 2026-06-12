'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false)
  const [isRegister, setIsRegister] = useState(false)

  return (
    <div className="min-h-screen flex">
      {/* Left - Brand */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-amor-noite via-amor-roxo to-amor-rosado items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-8xl mb-6"
          >
            💝
          </motion.div>
          <h1 className="text-5xl font-display font-bold mb-4">
            Love<span className="text-amor-dourado">Países</span>
          </h1>
          <p className="text-xl text-white/80 max-w-md mx-auto">
            O lugar onde memórias viram presentes inesquecíveis.
          </p>
        </motion.div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold text-amor-noite mb-2">
              {isRegister ? 'Criar conta' : 'Bem-vindo(a) de volta'}
            </h2>
            <p className="text-gray-500">
              {isRegister
                ? 'Comece a criar presentes emocionantes'
                : 'Entre para acessar seus presentes'}
            </p>
          </div>

          <div className="space-y-4">
            {isRegister && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amor-roxo focus:ring-2 focus:ring-amor-roxo/20 outline-none transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amor-roxo focus:ring-2 focus:ring-amor-roxo/20 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-200 focus:border-amor-roxo focus:ring-2 focus:ring-amor-roxo/20 outline-none transition-all"
                />
                <button
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-amor-roxo"
                >
                  {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isRegister && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-amor-roxo hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
            )}

            <button className="btn-primary w-full py-3 text-center">
              {isRegister ? 'Criar conta' : 'Entrar'}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-400">ou continue com</span>
              </div>
            </div>

            <button className="w-full py-3 rounded-xl border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Google
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            {isRegister ? 'Já tem conta?' : 'Não tem conta?'}{' '}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-amor-roxo font-semibold hover:underline"
            >
              {isRegister ? 'Entrar' : 'Criar conta'}
            </button>
          </p>

          <Link href="/" className="block text-center text-sm text-gray-400 hover:text-amor-roxo mt-4">
            ← Voltar para o site
          </Link>
        </motion.div>
      </div>
    </div>
  )
}