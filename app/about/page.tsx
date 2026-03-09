import type { Metadata } from 'next'
import FadeUp from '@/components/ui/FadeUp'
import SectionHeader from '@/components/ui/SectionHeader'
import ToolLogo from '@/components/ui/ToolLogo'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'About — Humaniti AI',
  description: 'We\'re Humaniti AI — an AI agency that builds real automation systems for real businesses.',
}

const values = [
  {
    num:   '01',
    title: 'BUILD, DON\'T CONSULT',
    desc:  'We don\'t sell slide decks or strategy reports. We build systems that ship. Every engagement ends with working software in your hands.',
  },
  {
    num:   '02',
    title: 'ROI FIRST',
    desc:  'We prioritize every automation by one metric: return on investment. No vanity builds. Every system we touch needs to save time, generate revenue, or both.',
  },
  {
    num:   '03',
    title: 'HUMAN-CENTERED AI',
    desc:  'The name says it. We believe AI should amplify human capability — not replace human judgment. Our systems keep humans in the decisions that matter.',
  },
  {
    num:   '04',
    title: 'RADICAL TRANSPARENCY',
    desc:  'You see every tool, every integration, every decision we make. No black boxes. When we\'re done, you own and understand everything we built.',
  },
]

const team = [
  {
    name:  'FOUNDER & CEO',
    role:  'AI Strategy & Architecture',
    bio:   'Built automation systems for 40+ businesses across e-commerce, SaaS, and consulting. Obsessed with the intersection of AI capability and business leverage.',
  },
  {
    name:  'HEAD OF BUILD',
    role:  'Automation Engineering',
    bio:   'Former software engineer turned AI automation specialist. Leads all technical implementation — Make.com, n8n, custom agents, and API integrations.',
  },
  {
    name:  'GTM LEAD',
    role:  'Growth & Client Strategy',
    bio:   'Sales automation expert who\'s built outreach systems generating $5M+ in pipeline. Leads all GTM and client acquisition systems.',
  },
]

const tools = [
  { name: 'Claude API' },
  { name: 'OpenAI GPT-4o' },
  { name: 'Make.com' },
  { name: 'n8n' },
  { name: 'Clay' },
  { name: 'Instantly.ai' },
  { name: 'PhantomBuster' },
  { name: 'Airtable' },
  { name: 'HeyGen' },
  { name: 'Repurpose.io' },
  { name: 'Looker Studio' },
  { name: 'LangChain' },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-40 pb-20 px-10 md:px-16 grid md:grid-cols-2 gap-16"
        style={{ borderBottom: '1px solid #2a2a2a' }}
      >
        <div>
          <FadeUp>
            <div
              className="font-mono text-[10px] tracking-[3px] text-acid uppercase mb-6"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              WHO WE ARE
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h1
              className="font-head leading-none mb-6"
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(64px, 8vw, 120px)',
                letterSpacing: '-1px',
              }}
            >
              HUMANITI<br />
              <span style={{ color: 'var(--acid)' }}>AI</span>
            </h1>
          </FadeUp>
        </div>
        <FadeUp delay={150} className="flex flex-col justify-center">
          <p className="text-sm text-muted leading-loose mb-6">
            We're a specialist AI automation agency. Not a consultancy. Not a software company. An agency that gets its hands dirty building the exact systems your business needs to operate at a higher level.
          </p>
          <p className="text-sm text-muted leading-loose mb-6">
            Humaniti AI was founded on a simple belief: AI should feel human. The systems we build don't make your business feel robotic — they free your humans to do what only humans can do, while AI handles everything else.
          </p>
          <p className="text-sm leading-loose" style={{ color: '#888' }}>
            We work with e-commerce brands, SaaS companies, consulting firms, agencies, and creator businesses who are ready to stop doing things manually.
          </p>
        </FadeUp>
      </section>

      {/* VALUES */}
      <section className="px-10 md:px-16 py-24">
        <FadeUp>
          <SectionHeader num="01_VALUES" title="HOW WE WORK" tag="Our Principles" />
        </FadeUp>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: '#2a2a2a' }}
        >
          {values.map((v, i) => (
            <FadeUp key={v.num} delay={i * 100}>
              <div className="p-10 card-hover h-full" style={{ background: '#050505' }}>
                <div
                  className="font-head text-7xl leading-none mb-5"
                  style={{ fontFamily: 'var(--font-bebas)', color: '#1a1a1a' }}
                >
                  {v.num}
                </div>
                <h3
                  className="font-head text-3xl mb-3"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section
        className="px-10 md:px-16 py-24"
        style={{ borderTop: '1px solid #2a2a2a', background: '#0a0a0a' }}
      >
        <FadeUp>
          <SectionHeader num="02_TEAM" title="THE BUILDERS" tag="Core Team" />
        </FadeUp>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: '#2a2a2a' }}
        >
          {team.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div className="p-10 card-hover h-full" style={{ background: '#0a0a0a' }}>
                {/* AVATAR PLACEHOLDER */}
                <div
                  className="w-16 h-16 mb-6 flex items-center justify-center"
                  style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
                >
                  <span className="font-head text-2xl text-acid" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {t.role.charAt(0)}
                  </span>
                </div>
                <div
                  className="font-mono text-[9px] tracking-[2px] text-acid uppercase mb-2"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
                >
                  {t.role}
                </div>
                <h3
                  className="font-head text-2xl mb-4"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  {t.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed">{t.bio}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* TOOL STACK */}
      <section className="px-10 md:px-16 py-24" style={{ borderTop: '1px solid #2a2a2a' }}>
        <FadeUp>
          <SectionHeader num="03_STACK" title="TOOLS WE MASTER" tag="Tech Stack" />
        </FadeUp>
        <FadeUp delay={100}>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px"
            style={{ background: '#2a2a2a' }}
          >
            {tools.map(t => (
              <div
                key={t.name}
                className="flex flex-col items-center justify-center gap-3 py-8 px-4 card-hover"
                style={{ background: '#050505' }}
              >
                <ToolLogo name={t.name} size={40} />
                <span
                  className="font-mono text-[9px] tracking-widest text-muted uppercase text-center"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
                >
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <CTABanner />
    </>
  )
}
