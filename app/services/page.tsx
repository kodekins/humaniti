import type { Metadata } from 'next'
import FadeUp from '@/components/ui/FadeUp'
import SectionHeader from '@/components/ui/SectionHeader'
import ToolLogo from '@/components/ui/ToolLogo'
import AutoChain from '@/components/ui/AutoChain'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Services — Humaniti AI',
  description: 'Full-stack AI automation services: AI agents, workflow automation, GTM intelligence, content engines and more.',
}

const services = [
  {
    id: 'S-01',
    title: 'AI AGENT SYSTEMS',
    tagline: 'Autonomous workers that never sleep.',
    desc: 'We build custom AI agents that handle research, outreach, data processing, scheduling, and complex decision trees — without human supervision. These aren\'t chatbots. They\'re digital team members.',
    deliverables: [
      'Custom agent architecture design',
      'Tool integrations (email, CRM, calendar, APIs)',
      'Training on your proprietary data',
      'Monitoring & fallback systems',
      'Full documentation and handoff',
    ],
    tools: ['LangChain', 'OpenAI API', 'Anthropic Claude', 'Make.com', 'n8n'],
    timeline: '2–4 weeks',
    roi: 'Replaces 1–3 FTE equivalent tasks',
  },
  {
    id: 'S-02',
    title: 'WORKFLOW AUTOMATION',
    tagline: 'Every repetitive process, eliminated.',
    desc: 'We map every manual, repetitive workflow in your business and rebuild them as automated pipelines. From data entry to report generation to approval chains — if a human does it the same way twice, we automate it.',
    deliverables: [
      'Full workflow audit and process mapping',
      'Multi-step automation build (Make/Zapier/n8n)',
      'Error handling and notification systems',
      'Integration with your existing stack',
      'Team training session',
    ],
    tools: ['Make.com', 'Zapier', 'n8n', 'Airtable', 'Notion'],
    timeline: '1–3 weeks per workflow',
    roi: '60–80% time savings on target processes',
  },
  {
    id: 'S-03',
    title: 'GTM INTELLIGENCE',
    tagline: 'Outreach that actually lands.',
    desc: 'We build AI-powered go-to-market systems: automated lead research, hyper-personalized outreach sequences, CRM enrichment, and follow-up pipelines. Your sales team focuses on closing — we build the machine that fills the pipeline.',
    deliverables: [
      'Target audience intelligence database build',
      'Clay enrichment & scoring setup',
      'Personalized email sequence automation',
      'LinkedIn warm-up workflows',
      'CRM integration and attribution tracking',
    ],
    tools: ['Clay', 'Instantly.ai', 'Apollo', 'PhantomBuster', 'LinkedIn API'],
    timeline: '2–3 weeks',
    roi: '3–10x outreach volume, same team',
  },
  {
    id: 'S-04',
    title: 'CONTENT ENGINES',
    tagline: 'One input. Ten outputs. Everywhere.',
    desc: 'We build AI content systems that take a single source — a podcast, video, or document — and automatically create, format, and distribute across every channel. Post once. Be everywhere.',
    deliverables: [
      'Content ingestion and transcript pipeline',
      'Multi-format output generation (clips, posts, articles)',
      'Platform-specific scheduling automation',
      'SEO optimization layer',
      'Performance tracking and iteration loop',
    ],
    tools: ['Descript', 'Repurpose.io', 'Buffer', 'GPT-4o', 'Claude API'],
    timeline: '2 weeks',
    roi: '10x content output, same effort',
  },
  {
    id: 'S-05',
    title: 'DATA & ANALYTICS STACK',
    tagline: 'Know what\'s working. Always.',
    desc: 'We build custom data pipelines, dashboards, and attribution systems so you have real-time visibility into what\'s driving revenue and what\'s bleeding cost. No more guessing.',
    deliverables: [
      'Data source integration and ETL pipeline',
      'Custom KPI dashboard build',
      'Attribution model setup',
      'Automated weekly reporting',
      'Anomaly detection alerts',
    ],
    tools: ['Airtable', 'Looker Studio', 'BigQuery', 'Segment', 'Supermetrics'],
    timeline: '2–3 weeks',
    roi: 'Eliminate bad spend, double down on winners',
  },
  {
    id: 'S-06',
    title: 'AI STRATEGY SPRINT',
    tagline: 'The roadmap before the build.',
    desc: 'A 5-day intensive audit that maps every AI opportunity in your business, prioritizes them by ROI, and delivers a complete implementation blueprint. Perfect if you want clarity before committing to a full build.',
    deliverables: [
      'Full business process audit',
      'AI opportunity identification (prioritized by ROI)',
      'Tool stack recommendation',
      'Implementation timeline',
      'Cost vs. benefit analysis',
    ],
    tools: ['Custom Framework', 'Notion', 'Process Mapping Tools'],
    timeline: '5 business days',
    roi: 'Clarity on exact ROI before spending a dollar on builds',
  },
]

const chainNodes = [
  { label: 'Discovery',   type: 'trigger' as const },
  { label: 'Blueprint',   type: 'action'  as const },
  { label: 'Build',       type: 'action'  as const },
  { label: 'Test & QA',   type: 'action'  as const },
  { label: 'Deploy',      type: 'action'  as const },
  { label: 'Train Team',  type: 'action'  as const },
  { label: 'ROI Proven',  type: 'trigger' as const },
]

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="pt-40 pb-20 px-10 md:px-16"
        style={{ borderBottom: '1px solid #2a2a2a' }}
      >
        <FadeUp>
          <div
            className="font-mono text-[10px] tracking-[3px] text-acid uppercase mb-6"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            WHAT WE BUILD
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
            <span style={{ color: 'var(--acid)' }}>SERVICES</span>
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-sm text-muted leading-relaxed max-w-xl">
            Every service we offer is built around one question: what's the highest-leverage AI play for your business right now? We build custom — not cookie-cutter.
          </p>
        </FadeUp>
      </section>

      {/* SERVICES LIST */}
      <section className="px-10 md:px-16 py-20">
        <div className="flex flex-col gap-px" style={{ background: '#2a2a2a' }}>
          {services.map((s, i) => (
            <FadeUp key={s.id} delay={i * 80}>
              <div
                className="p-10 md:p-12 card-hover"
                style={{ background: '#050505' }}
              >
                <div className="grid md:grid-cols-[1fr_280px] gap-10">
                  {/* LEFT */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="font-mono text-[10px] tracking-widest text-acid px-2 py-0.5"
                        style={{
                          fontFamily: 'var(--font-jetbrains)',
                          background: 'rgba(200,255,0,0.07)',
                          border: '1px solid rgba(200,255,0,0.18)',
                        }}
                      >
                        {s.id}
                      </span>
                    </div>
                    <h2
                      className="font-head text-5xl mb-2 leading-tight"
                      style={{ fontFamily: 'var(--font-bebas)' }}
                    >
                      {s.title}
                    </h2>
                    <div
                      className="font-mono text-[11px] tracking-widest text-acid uppercase mb-4"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      {s.tagline}
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-6 max-w-2xl">{s.desc}</p>

                    <div>
                      <div
                        className="font-mono text-[9px] tracking-[2px] text-muted uppercase mb-3"
                        style={{ fontFamily: 'var(--font-jetbrains)' }}
                      >
                        Deliverables
                      </div>
                      <ul className="flex flex-col gap-2">
                        {s.deliverables.map(d => (
                          <li key={d} className="flex items-start gap-2 text-xs" style={{ color: '#888' }}>
                            <span className="text-acid mt-0.5 flex-shrink-0">→</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT SIDEBAR */}
                  <div className="flex flex-col gap-6">
                    <div style={{ border: '1px solid #2a2a2a', padding: '20px' }}>
                      <div
                        className="font-mono text-[9px] tracking-[2px] text-muted uppercase mb-3"
                        style={{ fontFamily: 'var(--font-jetbrains)' }}
                      >
                        Timeline
                      </div>
                      <div
                        className="font-head text-3xl text-acid"
                        style={{ fontFamily: 'var(--font-bebas)' }}
                      >
                        {s.timeline}
                      </div>
                    </div>
                    <div style={{ border: '1px solid #2a2a2a', padding: '20px' }}>
                      <div
                        className="font-mono text-[9px] tracking-[2px] text-muted uppercase mb-3"
                        style={{ fontFamily: 'var(--font-jetbrains)' }}
                      >
                        Expected ROI
                      </div>
                      <div className="text-xs text-offwhite leading-relaxed">{s.roi}</div>
                    </div>
                    <div style={{ border: '1px solid #2a2a2a', padding: '20px' }}>
                      <div
                        className="font-mono text-[9px] tracking-[2px] text-muted uppercase mb-3"
                        style={{ fontFamily: 'var(--font-jetbrains)' }}
                      >
                        Tools Used
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {s.tools.map(t => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1.5 font-mono text-[8px] tracking-widest text-muted uppercase px-2 py-1"
                            style={{
                              fontFamily: 'var(--font-jetbrains)',
                              border: '1px solid #2a2a2a',
                            }}
                          >
                            <ToolLogo name={t} size={16} />
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="px-10 md:px-16 pb-16">
        <FadeUp>
          <AutoChain title="// Typical Engagement Flow" nodes={chainNodes} />
        </FadeUp>
      </section>

      <CTABanner />
    </>
  )
}
