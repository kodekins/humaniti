'use client'
import { useState } from 'react'
import FadeUp from '@/components/ui/FadeUp'

const services = [
  'AI Agent Systems',
  'Workflow Automation',
  'GTM Intelligence',
  'Content Engine',
  'Data & Analytics',
  'AI Strategy Sprint',
  'Not sure yet',
]

const budgets = [
  'Under $3K',
  '$3K – $10K',
  '$10K – $25K',
  '$25K+',
]

export default function ContactPage() {
  const [form, setForm]       = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [status, setStatus]   = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errMsg, setErrMsg]   = useState('')

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setErrMsg('Please fill in your name, email, and message.')
      return
    }
    setStatus('sending')
    setErrMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' })
      } else {
        setStatus('error')
        setErrMsg('Something went wrong. Please email us directly at hello@humanitiai.com')
      }
    } catch {
      setStatus('error')
      setErrMsg('Network error. Please try again.')
    }
  }

  const inputStyle = {
    width: '100%',
    background: '#050505',
    border: '1px solid #2a2a2a',
    color: '#f5f0e8',
    padding: '14px 16px',
    fontSize: '13px',
    fontFamily: 'var(--font-dm)',
    outline: 'none',
    transition: 'border-color 0.2s',
  }
  const labelStyle = {
    fontFamily: 'var(--font-jetbrains)',
    fontSize: '9px',
    letterSpacing: '2px',
    textTransform: 'uppercase' as const,
    color: '#6b6b6b',
    display: 'block',
    marginBottom: '8px',
  }

  return (
    <>
      <section
        className="pt-40 pb-20 px-10 md:px-16 grid md:grid-cols-2 gap-16"
        style={{ borderBottom: '1px solid #2a2a2a' }}
      >
        {/* LEFT */}
        <div>
          <FadeUp>
            <div
              className="font-mono text-[10px] tracking-[3px] text-acid uppercase mb-6"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              LET'S BUILD
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h1
              className="font-head leading-none mb-6"
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(60px, 8vw, 110px)',
                letterSpacing: '-1px',
              }}
            >
              START<br />
              YOUR<br />
              <span style={{ color: 'var(--acid)' }}>PROJECT</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-sm text-muted leading-relaxed max-w-md mb-10">
              Tell us what you're trying to automate. We'll come back within 24 hours with an initial take on how we'd approach it — no obligation.
            </p>
          </FadeUp>

          <FadeUp delay={300}>
            <div className="flex flex-col gap-6">
              {[
                { icon: '📧', label: 'EMAIL', val: 'hello@humanitiai.com' },
                { icon: '🕐', label: 'RESPONSE TIME', val: 'Within 24 hours' },
                { icon: '📍', label: 'TIMEZONE', val: 'Available globally' },
              ].map(i => (
                <div key={i.label} className="flex items-center gap-4" style={{ borderLeft: '2px solid var(--acid)', paddingLeft: '16px' }}>
                  <div>
                    <div
                      className="font-mono text-[9px] tracking-widest text-acid uppercase"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      {i.label}
                    </div>
                    <div className="text-sm text-offwhite mt-0.5">{i.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* RIGHT — FORM */}
        <FadeUp delay={150}>
          {status === 'success' ? (
            <div
              className="flex flex-col items-center justify-center h-full p-16 text-center"
              style={{ border: '1px solid #2a2a2a', background: '#0a0a0a' }}
            >
              <div className="text-5xl mb-6">✓</div>
              <h2
                className="font-head text-4xl text-acid mb-3"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                MESSAGE SENT
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                We'll review your submission and respond within 24 hours. Talk soon.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5" style={{ border: '1px solid #2a2a2a', background: '#0a0a0a', padding: '40px' }}>
              <div
                className="font-mono text-[9px] tracking-[2px] text-acid uppercase mb-2"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
              >
                // Project Intake Form
              </div>

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Jane Smith"
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'var(--acid)')}
                    onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="jane@company.com"
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'var(--acid)')}
                    onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
                  />
                </div>
              </div>

              {/* COMPANY */}
              <div>
                <label style={labelStyle}>Company / Brand</label>
                <input
                  value={form.company}
                  onChange={set('company')}
                  placeholder="Acme Inc."
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--acid)')}
                  onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
                />
              </div>

              {/* SERVICE + BUDGET */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Service Interested In</label>
                  <select
                    value={form.service}
                    onChange={set('service')}
                    style={{ ...inputStyle, cursor: 'none' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--acid)')}
                    onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
                  >
                    <option value="">Select service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Budget Range</label>
                  <select
                    value={form.budget}
                    onChange={set('budget')}
                    style={{ ...inputStyle, cursor: 'none' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--acid)')}
                    onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
                  >
                    <option value="">Select budget...</option>
                    {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label style={labelStyle}>Tell us what you want to automate *</label>
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Describe your current process, what's taking too much time, or what you want AI to do for your business..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--acid)')}
                  onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
                />
              </div>

              {errMsg && (
                <div className="text-xs" style={{ color: 'var(--red)', fontFamily: 'var(--font-jetbrains)' }}>
                  {errMsg}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="btn-acid w-full justify-center text-lg"
                style={{ opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? 'SENDING...' : 'SUBMIT PROJECT BRIEF →'}
              </button>

              <p
                className="text-center font-mono text-[9px] text-muted tracking-widest"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
              >
                WE RESPOND WITHIN 24 HOURS — GUARANTEED
              </p>
            </div>
          )}
        </FadeUp>
      </section>
    </>
  )
}
