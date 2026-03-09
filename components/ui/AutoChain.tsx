'use client'
import { useEffect, useState } from 'react'

interface ChainNode {
  label: string
  type: 'trigger' | 'action'
}

interface AutoChainProps {
  title: string
  nodes: ChainNode[]
}

export default function AutoChain({ title, nodes }: AutoChainProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % nodes.length)
    }, 700)
    return () => clearInterval(id)
  }, [nodes.length])

  return (
    <div
      className="p-10"
      style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
    >
      <div
        className="font-mono text-[10px] tracking-[2px] text-acid uppercase mb-6"
        style={{ fontFamily: 'var(--font-jetbrains)' }}
      >
        {title}
      </div>
      <div className="flex items-center flex-wrap gap-0">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-center">
            <div
              className="chain-node"
              style={{
                opacity:     i === active ? 1 : 0.4,
                borderColor: i === active
                  ? (node.type === 'trigger' ? 'var(--red)' : 'var(--acid)')
                  : '#2a2a2a',
                color: i === active
                  ? (node.type === 'trigger' ? 'var(--red)' : 'var(--acid)')
                  : '#6b6b6b',
                transform: i === active ? 'scale(1.04)' : 'scale(1)',
                transition: 'all 0.3s ease',
              }}
            >
              {node.label}
            </div>
            {i < nodes.length - 1 && (
              <div className="flex items-center" style={{ width: '30px', position: 'relative' }}>
                <div style={{ width: '100%', height: '1px', background: '#2a2a2a' }} />
                <span style={{
                  position: 'absolute', right: '-4px',
                  fontSize: '8px', color: '#6b6b6b', top: '-7px'
                }}>▶</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
