import FadeUp from '@/components/ui/FadeUp'
import SectionHeader from '@/components/ui/SectionHeader'
import Link from 'next/link'

const services = [
  {
    index:  'S-01',
    title:  'AI AGENT SYSTEMS',
    desc:   'Custom-built autonomous agents that handle research, outreach, scheduling, and decision-making — without human intervention.',
    tags:   ['Research Agents', 'Sales Agents', 'Support Agents'],
  },
  {
    index:  'S-02',
    title:  'WORKFLOW AUTOMATION',
    desc:   'End-to-end process automation using Make.com, Zapier, n8n and custom code. Kill repetitive tasks. Free your team for leverage work.',
    tags:   ['Make.com', 'n8n', 'Zapier', 'APIs'],
  },
  {
    index:  'S-03',
    title:  'GTM INTELLIGENCE',
    desc:   'Automated lead intelligence, personalized outreach sequences, and CRM enrichment pipelines built for modern sales teams.',
    tags:   ['Clay', 'Instantly', 'Apollo', 'LinkedIn'],
  },
  {
    index:  'S-04',
    title:  'CONTENT ENGINES',
    desc:   'AI-powered content systems that repurpose, schedule, and distribute across every channel — from one piece of source content.',
    tags:   ['GPT-4o', 'Repurpose.io', 'Buffer', 'Descript'],
  },
  {
    index:  'S-05',
    title:  'DATA & ANALYTICS',
    desc:   'Custom dashboards, attribution models, and live reporting pipelines so you always know what\'s working and what\'s wasting budget.',
    tags:   ['Airtable', 'Looker Studio', 'BigQuery'],
  },
  {
    index:  'S-06',
    title:  'AI STRATEGY SPRINT',
    desc:   'A focused 5-day engagement to map your AI opportunities, prioritize automations by ROI, and deliver an implementation blueprint.',
    tags:   ['Audit', 'Roadmap', 'Implementation Plan'],
  },
]

export default function ServicesPreview() {
  return (
    <section className="px-10 md:px-16 py-24">
      <FadeUp>
        <SectionHeader num="02_SERVICES" title="WHAT WE BUILD" tag="Full Stack AI" />
      </FadeUp>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ background: '#2a2a2a' }}
      >
        {services.map((s, i) => (
          <FadeUp key={s.index} delay={i * 80}>
            <div
              className="h-full p-8 card-hover group"
              style={{ background: '#050505' }}

            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-mono text-[10px] tracking-widest text-acid px-2 py-0.5"
                  style={{
                    fontFamily: 'var(--font-jetbrains)',
                    background: 'rgba(200,255,0,0.07)',
                    border: '1px solid rgba(200,255,0,0.18)',
                  }}
                >
                  {s.index}
                </span>
              </div>
              <h3
                className="font-head text-2xl mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                {s.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(t => (
                  <span
                    key={t}
                    className="font-mono text-[8px] tracking-widest text-muted uppercase px-2 py-0.5"
                    style={{
                      fontFamily: 'var(--font-jetbrains)',
                      border: '1px solid #2a2a2a',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={200} className="mt-8 flex justify-center">
        <Link href="/services" className="btn-outline">
          VIEW ALL SERVICES →
        </Link>
      </FadeUp>
    </section>
  )
}
