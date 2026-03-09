import FadeUp from '@/components/ui/FadeUp'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <FadeUp>
      <section
        className="mx-10 md:mx-16 my-16 p-12 md:p-16 grid md:grid-cols-[1fr_auto] gap-10 items-center"
        style={{ background: 'var(--acid)' }}
      >
        <div>
          <div
            className="font-head leading-none mb-4"
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(48px, 6vw, 88px)',
              color: '#050505',
              letterSpacing: '-1px',
            }}
          >
            STOP HIRING.<br />START AUTOMATING.
          </div>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
            Every month you delay is a month your competitors are building AI leverage. 
            Book a free discovery call — no pitch, just a clear picture of what AI can do for your business.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-head text-xl tracking-widest px-8 py-5"
            style={{
              fontFamily: 'var(--font-bebas)',
              background: '#050505',
              color: 'var(--acid)',
              letterSpacing: '2px',
              transition: 'background 0.2s',
            }}
          >
            BOOK FREE CALL →
          </Link>
          <span
            className="font-mono text-center"
            style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '9px',
              letterSpacing: '1.5px',
              color: 'rgba(0,0,0,0.4)',
              textTransform: 'uppercase',
            }}
          >
            No commitment required
          </span>
        </div>
      </section>
    </FadeUp>
  )
}
