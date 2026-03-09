import type { Metadata } from 'next'
import FadeUp from '@/components/ui/FadeUp'
import SectionHeader from '@/components/ui/SectionHeader'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Work — Humaniti AI',
  description: 'Real results from real clients. See what Humaniti AI has built and delivered.',
}

const cases = [
  {
    num:     '01',
    client:  'E-COMMERCE BRAND',
    industry:'DTC / Retail',
    result:  '+$340K',
    period:  'Revenue in 60 days',
    service: 'AI Sales Automation',
    problem: 'Their abandoned cart and post-purchase flows were manual, slow, and generic. Same email to every customer. The team was spending 12 hours/week managing it manually.',
    solution:'We built a fully automated AI recovery system. Claude analyzed each customer\'s purchase history, browsing behavior, and cart contents to generate hyper-personalized follow-up sequences — automatically, within minutes of abandonment.',
    results: [
      '34% revenue increase in 60 days',
      '28% cart recovery rate (up from 11%)',
      '12 hours/week of manual work eliminated',
      'Zero additional headcount required',
    ],
    tags: ['Make.com', 'Klaviyo', 'GPT-4o', 'Shopify API'],
  },
  {
    num:     '02',
    client:  'B2B SAAS COMPANY',
    industry:'Software / Tech',
    result:  '80%',
    period:  'Support ticket resolution rate',
    service: 'AI Support Agent',
    problem: 'Their 6-person support team was drowning in repetitive tickets — password resets, billing questions, how-to inquiries. Average response time: 4 hours. Customer satisfaction: declining.',
    solution:'We built a RAG-powered support agent trained on their entire documentation, product knowledge base, and historical ticket resolutions. The agent handles Tier 1 and Tier 2 tickets autonomously and escalates edge cases to humans.',
    results: [
      '80% of tickets resolved without human touch',
      'Average response time: 2 minutes (down from 4 hours)',
      'Support team refocused on complex, high-value cases',
      'CSAT score increased from 3.2 to 4.7 / 5',
    ],
    tags: ['Custom RAG Agent', 'Zendesk API', 'OpenAI', 'Notion Docs'],
  },
  {
    num:     '03',
    client:  'GROWTH CONSULTING FIRM',
    industry:'B2B Services',
    result:  '12x',
    period:  'Outreach volume same team',
    service: 'GTM Intelligence Stack',
    problem: 'Their 2-person BD team was manually researching prospects, writing personalized emails, and tracking follow-ups in spreadsheets. They could manage 30 prospects/week. Their pipeline was consistently empty.',
    solution:'Full GTM automation stack: Clay for intelligent enrichment, PhantomBuster for LinkedIn data, GPT-4o for personalized email generation based on prospect\'s recent content and company signals, Instantly for send automation.',
    results: [
      '360 prospects/week (up from 30)',
      '41% average email open rate',
      '9% reply rate (industry avg: 2–4%)',
      '4 new enterprise clients in 90 days',
    ],
    tags: ['Clay', 'Instantly.ai', 'PhantomBuster', 'Apollo', 'GPT-4o'],
  },
  {
    num:     '04',
    client:  'CREATOR / MEDIA COMPANY',
    industry:'Content / Media',
    result:  '10x',
    period:  'Content output, same effort',
    service: 'AI Content Engine',
    problem: 'A solo creator producing a weekly YouTube video had no bandwidth to repurpose content across LinkedIn, Twitter, email newsletter, and Instagram. They were leaving massive distribution on the table.',
    solution:'End-to-end content engine: Descript auto-transcribes videos, AI extracts key insights and quotes, generates 8 social posts per video, writes a newsletter edition, creates a LinkedIn long-form article, and Buffer schedules everything.',
    results: [
      '10x content output from same video production',
      'LinkedIn followers: 2K → 18K in 6 months',
      'Email list: 40% faster growth',
      'Creator reclaimed 8 hours/week',
    ],
    tags: ['Descript', 'Repurpose.io', 'Buffer', 'Make.com', 'Claude API'],
  },
]

const kpis = [
  { num: '150+', label: 'Automations Shipped' },
  { num: '$2M+', label: 'Client Revenue Generated' },
  { num: '40+',  label: 'Businesses Transformed' },
  { num: '94%',  label: 'Client Retention Rate' },
]

export default function WorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 px-10 md:px-16" style={{ borderBottom: '1px solid #2a2a2a' }}>
        <FadeUp>
          <div
            className="font-mono text-[10px] tracking-[3px] text-acid uppercase mb-6"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            CLIENT RESULTS
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <h1
            className="font-head leading-none mb-6"
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(64px, 9vw, 130px)',
              letterSpacing: '-1px',
            }}
          >
            OUR<br />
            <span style={{ color: 'var(--acid)' }}>WORK</span>
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-sm text-muted leading-relaxed max-w-xl">
            No vanity metrics. No fluff. Just real problems, real systems, and real results from real businesses that trusted us to automate their growth.
          </p>
        </FadeUp>
      </section>

      {/* KPI BAR */}
      <FadeUp>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: '#2a2a2a', borderBottom: '1px solid #2a2a2a', borderTop: '2px solid var(--acid)' }}
        >
          {kpis.map(k => (
            <div key={k.label} className="py-8 px-10" style={{ background: '#050505', textAlign: 'center' }}>
              <div
                className="font-head text-5xl text-acid leading-none"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                {k.num}
              </div>
              <div
                className="font-mono text-[9px] tracking-[1.5px] text-muted uppercase mt-2"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
              >
                {k.label}
              </div>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* CASE STUDIES */}
      <section className="px-10 md:px-16 py-20">
        <FadeUp>
          <SectionHeader num="01_CASES" title="CASE STUDIES" tag="Full Details" />
        </FadeUp>
        <div className="flex flex-col gap-px" style={{ background: '#2a2a2a' }}>
          {cases.map((c, i) => (
            <FadeUp key={c.num} delay={i * 60}>
              <div className="p-10 md:p-14 card-hover" style={{ background: '#050505' }}>
                {/* HEADER ROW */}
                <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-mono text-[9px] tracking-widest text-acid uppercase px-2 py-0.5"
                        style={{
                          fontFamily: 'var(--font-jetbrains)',
                          background: 'rgba(200,255,0,0.07)',
                          border: '1px solid rgba(200,255,0,0.18)',
                        }}
                      >
                        {c.client}
                      </span>
                      <span
                        className="font-mono text-[9px] tracking-widest text-muted uppercase px-2 py-0.5"
                        style={{ fontFamily: 'var(--font-jetbrains)', border: '1px solid #2a2a2a' }}
                      >
                        {c.industry}
                      </span>
                    </div>
                    <h2
                      className="font-head text-4xl md:text-5xl"
                      style={{ fontFamily: 'var(--font-bebas)' }}
                    >
                      {c.service}
                    </h2>
                  </div>
                  <div className="text-right">
                    <div
                      className="font-head text-acid leading-none"
                      style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(52px, 6vw, 80px)' }}
                    >
                      {c.result}
                    </div>
                    <div
                      className="font-mono text-[9px] tracking-widest text-muted uppercase"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      {c.period}
                    </div>
                  </div>
                </div>

                {/* BODY */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div
                      className="font-mono text-[9px] tracking-[2px] text-acid uppercase mb-3"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      The Problem
                    </div>
                    <p className="text-xs text-muted leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <div
                      className="font-mono text-[9px] tracking-[2px] text-acid uppercase mb-3"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      Our Solution
                    </div>
                    <p className="text-xs text-muted leading-relaxed">{c.solution}</p>
                  </div>
                  <div>
                    <div
                      className="font-mono text-[9px] tracking-[2px] text-acid uppercase mb-3"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      Results
                    </div>
                    <ul className="flex flex-col gap-2">
                      {c.results.map(r => (
                        <li key={r} className="flex items-start gap-2 text-xs" style={{ color: '#ccc' }}>
                          <span className="text-acid flex-shrink-0 mt-0.5">→</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {c.tags.map(t => (
                        <span
                          key={t}
                          className="font-mono text-[8px] tracking-widest text-muted uppercase px-1.5 py-0.5"
                          style={{ fontFamily: 'var(--font-jetbrains)', border: '1px solid #2a2a2a' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
