import FadeUp from '@/components/ui/FadeUp'
import SectionHeader from '@/components/ui/SectionHeader'
import ClientJourneySection from '@/components/ui/ClientJourneySection'

const steps = [
  {
    index: '01',
    title: 'DISCOVERY CALL',
    desc:  'We spend 45 minutes inside your current operations, tools, and bottlenecks. No pitching — just learning.',
    detail: 'We leave with a full picture of your business mechanics, your team\'s time costs, and the highest-leverage AI entry points.',
  },
  {
    index: '02',
    title: 'AI BLUEPRINT',
    desc:  'We deliver a custom AI Architecture Map — prioritized automations, tools, timelines, and projected ROI.',
    detail: 'You&apos;ll see exactly what we&apos;ll build, in what order, and why — before any contract is signed.',
  },
  {
    index: '03',
    title: 'BUILD SPRINT',
    desc:  '2–4 week focused build cycles. We ship working systems, not slide decks. You see results in weeks, not months.',
    detail: 'Our team handles all technical implementation. You provide context; we build the machine.',
  },
  {
    index: '04',
    title: 'HANDOFF + TRAINING',
    desc:  'Full documentation, video walkthroughs, and live training so your team owns and can extend every system.',
    detail: 'We don&apos;t create dependency — we create capability. Your team runs the machine confidently.',
  },
]

const chainNodes = [
  { label: 'Intake Form',       type: 'trigger' as const },
  { label: 'Discovery Call',    type: 'action'  as const },
  { label: 'Audit & Blueprint', type: 'action'  as const },
  { label: 'Contract Signed',   type: 'trigger' as const },
  { label: 'Build Sprint',      type: 'action'  as const },
  { label: 'QA & Testing',      type: 'action'  as const },
  { label: 'Live Handoff',      type: 'action'  as const },
  { label: 'Client Wins',       type: 'trigger' as const },
]

export default function Process() {
  return (
    <section
      className="px-10 md:px-16 py-24"
      style={{ borderTop: '1px solid #2a2a2a', background: '#0a0a0a' }}
    >
      <FadeUp>
        <SectionHeader num="03_PROCESS" title="HOW IT WORKS" tag="4 Steps" />
      </FadeUp>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px mb-10"
        style={{ background: '#2a2a2a' }}
      >
        {steps.map((s, i) => (
          <FadeUp key={s.index} delay={i * 100}>
            <div
              className="h-full p-8"
              style={{ background: '#0a0a0a', borderTop: '2px solid var(--acid)' }}
            >
              <div
                className="font-head text-6xl mb-4 leading-none"
                style={{ fontFamily: 'var(--font-bebas)', color: '#2a2a2a' }}
              >
                {s.index}
              </div>
              <h3
                className="font-head text-2xl mb-3"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                {s.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-4">{s.desc}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#888' }}>{s.detail}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={200}>
        <ClientJourneySection title="// Client Journey Automation" nodes={chainNodes} />
      </FadeUp>
    </section>
  )
}
