import Link from 'next/link'

const services = ['AI Automation', 'AI Agents', 'GTM Systems', 'Workflow Design', 'Analytics Stack']
const company  = ['About', 'Work', 'Services', 'Contact']
const social   = [
  { label: 'X / Twitter',  href: '#' },
  { label: 'LinkedIn',     href: '#' },
  { label: 'YouTube',      href: '#' },
  { label: 'Instagram',    href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #2a2a2a', background: '#050505' }}>
      {/* TOP BAND */}
      <div className="px-10 pt-16 pb-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div className="md:col-span-1">
          <div
            className="font-head text-4xl text-offwhite mb-1"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '3px' }}
          >
            HUMANITI
          </div>
          <div
            className="font-mono text-[9px] tracking-[3px] text-acid uppercase mb-5"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            AI AGENCY
          </div>
          <p className="text-xs text-muted leading-relaxed max-w-48">
            We build AI automation systems that replace repetitive work and compound your business results.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <div
            className="font-mono text-[9px] tracking-[2px] text-acid uppercase mb-5"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            Services
          </div>
          <ul className="flex flex-col gap-3">
            {services.map(s => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-xs text-muted hover:text-offwhite transition-colors duration-200"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <div
            className="font-mono text-[9px] tracking-[2px] text-acid uppercase mb-5"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            Company
          </div>
          <ul className="flex flex-col gap-3">
            {company.map(c => (
              <li key={c}>
                <Link
                  href={`/${c.toLowerCase()}`}
                  className="text-xs text-muted hover:text-offwhite transition-colors duration-200"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <div
            className="font-mono text-[9px] tracking-[2px] text-acid uppercase mb-5"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            Connect
          </div>
          <ul className="flex flex-col gap-3">
            {social.map(s => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-xs text-muted hover:text-acid transition-colors duration-200"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <div className="text-xs text-muted mb-1">Email us</div>
            <a
              href="mailto:hello@humanitiiai.com"
              className="text-xs text-offwhite hover:text-acid transition-colors"
            >
              hello@humanitiai.com
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="flex flex-col md:flex-row justify-between items-center px-10 py-5 gap-3"
        style={{ borderTop: '1px solid #2a2a2a' }}
      >
        <span
          className="font-mono text-[10px] text-muted tracking-widest"
          style={{ fontFamily: 'var(--font-jetbrains)' }}
        >
          © {new Date().getFullYear()} HUMANITI AI — ALL RIGHTS RESERVED
        </span>
        <span
          className="font-mono text-[10px] text-muted tracking-widest"
          style={{ fontFamily: 'var(--font-jetbrains)' }}
        >
          BUILT ON INTELLIGENCE. POWERED BY AUTOMATION.
        </span>
      </div>
    </footer>
  )
}
