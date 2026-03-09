'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const stats = [
  { num: '150+', label: 'Automations Built' },
  { num: '3x',   label: 'Avg Revenue Lift'  },
  { num: '90',   label: 'Day ROI Guarantee' },
]

const flowCards = [
  {
    phase: 'Layer 01',
    name: 'INTELLIGENCE',
    sub: 'We map your business, workflows, and bottlenecks before writing a single line of code.',
  },
  {
    phase: 'Layer 02',
    name: 'ARCHITECTURE',
    sub: 'Custom AI agent stacks and automation blueprints engineered to your exact operations.',
  },
  {
    phase: 'Layer 03',
    name: 'DEPLOYMENT',
    sub: 'Ship, train, iterate. Your team runs faster. Your overhead drops. Results compound.',
  },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  return (
    <section
      className="min-h-screen grid md:grid-cols-2"
      style={{ borderBottom: '1px solid #2a2a2a' }}
    >
      {/* LEFT */}
      <div
        className="flex flex-col justify-center px-10 py-24 md:px-16"
        style={{ borderRight: '1px solid #2a2a2a', position: 'relative', zIndex: 2 }}
      >
        {/* BADGE */}
        <div
          className="inline-flex items-center gap-2 mb-10 px-3.5 py-1.5 w-fit"
          style={{
            border: '1px solid #2a2a2a',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '10px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#6b6b6b',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.6s ease 0.1s',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-acid"
            style={{ animation: 'pulseDot 2s infinite' }}
          />
          Now Accepting Clients — 2026
        </div>

        {/* HEADLINE */}
        <h1
          className="font-head leading-none mb-7"
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(72px, 9vw, 120px)',
            letterSpacing: '-1px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.2s',
          }}
        >
          <span>WE BUILD</span><br />
          <span style={{ color: 'var(--acid)' }}>AI THAT</span><br />
          <span
            style={{
              WebkitTextStroke: '1px #f5f0e8',
              color: 'transparent',
            }}
          >
            WORKS.
          </span>
        </h1>

        {/* DESC */}
        <p
          className="text-sm leading-7 max-w-md mb-12"
          style={{
            color: '#6b6b6b',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.7s ease 0.35s',
          }}
        >
          Humaniti AI builds custom automation systems, intelligent agents, and AI-powered growth
          infrastructure so ambitious businesses scale without bloating headcount.
        </p>

        {/* CTA ROW */}
        <div
          className="flex flex-wrap gap-3 mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.7s ease 0.5s',
          }}
        >
          <Link href="/contact" className="btn-acid">
            START YOUR BUILD →
          </Link>
          <Link href="/work" className="btn-outline">
            SEE OUR WORK
          </Link>
        </div>

        {/* STATS */}
        <div
          className="grid grid-cols-3 gap-px"
          style={{
            background: '#2a2a2a',
            border: '1px solid #2a2a2a',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.65s',
          }}
        >
          {stats.map(s => (
            <div key={s.label} style={{ background: '#050505', padding: '20px' }}>
              <div
                className="font-head text-4xl leading-none"
                style={{ fontFamily: 'var(--font-bebas)', color: 'var(--acid)' }}
              >
                {s.num}
              </div>
              <div
                className="font-mono uppercase mt-1"
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '9px',
                  letterSpacing: '1.5px',
                  color: '#6b6b6b',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — flow cards */}
      <div
        className="hidden md:flex flex-col justify-end p-16"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(200,255,0,0.05) 0%, transparent 60%), linear-gradient(135deg, rgba(200,255,0,0.02) 0%, transparent 60%)',
        }}
      >
        <div className="flex flex-col gap-0.5">
          {flowCards.map((c, i) => (
            <div
              key={c.name}
              className="relative p-6 card-hover"
              style={{
                background: '#050505',
                border: '1px solid #2a2a2a',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(30px)',
                transition: `opacity 0.5s ease ${0.2 + i * 0.15}s, transform 0.5s ease ${0.2 + i * 0.15}s`,
              }}
            >
              <div
                className="font-head absolute right-4 top-2 text-gray2"
                style={{ fontFamily: 'var(--font-bebas)', fontSize: '56px', lineHeight: 1 }}
              >
                0{i + 1}
              </div>
              <div
                className="font-mono uppercase mb-2 text-acid"
                style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', letterSpacing: '2px' }}
              >
                {c.phase}
              </div>
              <div
                className="font-head text-3xl mb-1.5"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                {c.name}
              </div>
              <div className="text-xs text-muted leading-relaxed">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
