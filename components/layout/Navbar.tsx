'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/work',     label: 'Work'     },
  { href: '/about',    label: 'About'    },
  { href: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:   scrolled ? 'rgba(5,5,5,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #2a2a2a' : '1px solid transparent',
      }}
    >
      <nav className="flex items-center justify-between px-10 py-5">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className="font-head text-2xl tracking-wider text-offwhite group-hover:text-acid transition-colors duration-200"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '3px' }}
          >
            HUMANITI
          </span>
          <span
            className="font-mono text-[9px] tracking-[3px] text-acid uppercase border border-acid/30 px-2 py-0.5"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            AI
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" className="btn-acid text-sm py-2.5 px-6">
            GET STARTED →
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-offwhite transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-offwhite transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-offwhite transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}
        style={{ background: '#050505', borderTop: '1px solid #2a2a2a' }}
      >
        <div className="flex flex-col px-10 py-6 gap-6">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-acid text-sm w-fit py-2 px-5">
            GET STARTED →
          </Link>
        </div>
      </div>
    </header>
  )
}
