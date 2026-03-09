const items = [
  'AI AGENTS', 'WORKFLOW AUTOMATION', 'LEAD GENERATION',
  'CRM INTELLIGENCE', 'CONTENT ENGINES', 'SALES AUTOMATION',
  'DATA PIPELINES', 'PERSONALIZATION AT SCALE', 'OUTREACH SYSTEMS',
  'ANALYTICS STACKS', 'CHATBOT INFRASTRUCTURE', 'PROCESS ELIMINATION',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden py-4"
      style={{ background: 'var(--acid)', borderBottom: '1px solid #2a2a2a' }}
    >
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: 'marqueeTicker 28s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-head text-black px-6"
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '22px',
              letterSpacing: '2px',
              borderRight: '1px solid rgba(0,0,0,0.15)',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
