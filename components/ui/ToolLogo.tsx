'use client'

import { useState } from 'react'
import { getToolLogoUrl } from '@/lib/toolLogos'

interface ToolLogoProps {
  name: string
  size?: number
  className?: string
}

export default function ToolLogo({ name, size = 32, className = '' }: ToolLogoProps) {
  const logoSrc = getToolLogoUrl(name)
  const [failed, setFailed] = useState(false)

  if (!logoSrc || failed) {
    return (
      <span
        className={`flex items-center justify-center font-head flex-shrink-0 ${className}`}
        style={{
          width: size,
          height: size,
          fontSize: size * 0.45,
          fontFamily: 'var(--font-bebas)',
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          color: 'var(--acid)',
        }}
        title={name}
      >
        {name.charAt(0)}
      </span>
    )
  }

  return (
    <img
      src={logoSrc}
      alt={name}
      width={size}
      height={size}
      className={`object-contain flex-shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        // Simple Icons SVGs are single-color; make them light on dark background
        filter: 'brightness(0) invert(1)',
      }}
      onError={() => setFailed(true)}
    />
  )
}
