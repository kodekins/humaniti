'use client'

import { useEffect, useState } from 'react'

interface JourneyNode {
  label: string
  type: 'trigger' | 'action'
}

interface ClientJourneySectionProps {
  title: string
  nodes: JourneyNode[]
}

export default function ClientJourneySection({ title, nodes }: ClientJourneySectionProps) {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(prev => (prev + 1) % (nodes.length + 1))
    }, 900)
    return () => clearInterval(id)
  }, [nodes.length])

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #0d0d0d 0%, #141414 100%)',
        border: '1px solid #252525',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      <div
        className="px-8 pt-8 pb-2"
        style={{ borderBottom: '1px solid #252525' }}
      >
        <span
          className="font-mono text-[10px] tracking-[3px] uppercase"
          style={{
            fontFamily: 'var(--font-jetbrains)',
            color: 'var(--acid)',
            opacity: 0.9,
          }}
        >
          {title}
        </span>
      </div>

      <div className="relative py-6 px-8">
        {/* Vertical line */}
        <div
          className="absolute left-[43px] top-6 bottom-6 w-px"
          style={{ background: 'linear-gradient(180deg, #252525 0%, var(--acid) 15%, var(--acid) 85%, #252525 100%)', opacity: 0.4 }}
          aria-hidden
        />

        <ul className="relative flex flex-col gap-0">
          {nodes.map((node, i) => {
            const isTrigger = node.type === 'trigger'
            const isActive = visible > i
            const accent = isTrigger ? 'var(--red)' : 'var(--acid)'

            return (
              <li
                key={i}
                className="flex items-center gap-6 py-3 first:pt-0 last:pb-0"
                style={{
                  opacity: isActive ? 1 : 0.45,
                  transition: 'opacity 0.35s ease',
                }}
              >
                {/* Step marker */}
                <div
                  className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-semibold"
                  style={{
                    fontFamily: 'var(--font-jetbrains)',
                    background: isActive ? accent : '#1a1a1a',
                    color: isActive ? 'var(--black)' : '#4a4a4a',
                    border: `2px solid ${isActive ? accent : '#252525'}`,
                    transition: 'all 0.35s ease',
                  }}
                >
                  {i + 1}
                </div>

                {/* Label */}
                <div
                  className="font-mono text-sm tracking-wide py-1 px-0"
                  style={{
                    fontFamily: 'var(--font-jetbrains)',
                    color: isActive ? (isTrigger ? 'var(--red)' : 'var(--acid)') : '#6b6b6b',
                    transition: 'color 0.35s ease',
                  }}
                >
                  {node.label}
                </div>

                {isTrigger && (
                  <span
                    className="ml-auto font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded"
                    style={{
                      fontFamily: 'var(--font-jetbrains)',
                      background: 'rgba(255,45,45,0.12)',
                      color: 'var(--red)',
                      border: '1px solid rgba(255,45,45,0.25)',
                    }}
                  >
                    Trigger
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
