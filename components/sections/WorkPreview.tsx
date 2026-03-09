import FadeUp from '@/components/ui/FadeUp'
import SectionHeader from '@/components/ui/SectionHeader'
import Link from 'next/link'

const cases = [
  {
    num:     '01',
    client:  'E-COMMERCE BRAND',
    result:  '+$340K',
    period:  'in 60 days',
    service: 'AI Sales Automation',
    desc:    'Rebuilt their post-purchase flow and abandoned cart recovery using AI agents. Revenue lifted 34% without adding headcount.',
    tags:    ['Make.com', 'Klaviyo AI', 'GPT-4o'],
  },
  {
    num:     '02',
    client:  'SaaS COMPANY',
    result:  '80%',
    period:  'support ticket reduction',
    service: 'AI Support Agent',
    desc:    'Deployed a fully autonomous support agent trained on their docs. Resolved 4 in 5 tickets without human involvement.',
    tags:    ['Custom Agent', 'Zendesk', 'RAG Pipeline'],
  },
  {
    num:     '03',
    client:  'CONSULTING FIRM',
    result:  '12x',
    period:  'outreach volume',
    service: 'GTM Intelligence Stack',
    desc:    'Automated their entire outbound sequence: research → personalization → send → follow-up. 12x more touches, same team size.',
    tags:    ['Clay', 'Instantly.ai', 'Apollo'],
  },
]

export default function WorkPreview() {
  return (
    <section className="px-10 md:px-16 py-24" style={{ borderTop: '1px solid #2a2a2a' }}>
      <FadeUp>
        <SectionHeader num="04_WORK" title="PROVEN RESULTS" tag="Case Studies" />
      </FadeUp>

      <div className="flex flex-col gap-px" style={{ background: '#2a2a2a' }}>
        {cases.map((c, i) => (
          <FadeUp key={c.num} delay={i * 100}>
            <div
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-8 p-8 card-hover group"
              style={{ background: '#050505', alignItems: 'start' }}
            >
              {/* NUMBER */}
              <div
                className="font-head text-6xl leading-none"
                style={{ fontFamily: 'var(--font-bebas)', color: '#2a2a2a' }}
              >
                {c.num}
              </div>

              {/* CONTENT */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="font-mono text-[9px] tracking-widest text-acid uppercase"
                    style={{ fontFamily: 'var(--font-jetbrains)' }}
                  >
                    {c.client}
                  </span>
                  <span
                    className="font-mono text-[9px] tracking-widest text-muted uppercase px-2 py-0.5"
                    style={{ fontFamily: 'var(--font-jetbrains)', border: '1px solid #2a2a2a' }}
                  >
                    {c.service}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed max-w-xl mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map(t => (
                    <span
                      key={t}
                      className="font-mono text-[8px] tracking-widest text-muted uppercase px-2 py-0.5"
                      style={{ fontFamily: 'var(--font-jetbrains)', border: '1px solid #2a2a2a' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* RESULT */}
              <div className="text-right md:text-right">
                <div
                  className="font-head leading-none text-acid"
                  style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(48px, 5vw, 72px)' }}
                >
                  {c.result}
                </div>
                <div
                  className="font-mono text-[9px] tracking-widest text-muted uppercase mt-1"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
                >
                  {c.period}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={200} className="mt-8 flex justify-center">
        <Link href="/work" className="btn-outline">
          VIEW ALL CASE STUDIES →
        </Link>
      </FadeUp>
    </section>
  )
}
