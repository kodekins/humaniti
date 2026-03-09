import { NextResponse } from 'next/server'

const services = [
  {
    id: 'S-01',
    title: 'AI Agent Systems',
    tagline: 'Autonomous workers that never sleep.',
    timeline: '2–4 weeks',
    roi: 'Replaces 1–3 FTE equivalent tasks',
  },
  {
    id: 'S-02',
    title: 'Workflow Automation',
    tagline: 'Every repetitive process, eliminated.',
    timeline: '1–3 weeks per workflow',
    roi: '60–80% time savings on target processes',
  },
  {
    id: 'S-03',
    title: 'GTM Intelligence',
    tagline: 'Outreach that actually lands.',
    timeline: '2–3 weeks',
    roi: '3–10x outreach volume, same team',
  },
  {
    id: 'S-04',
    title: 'Content Engines',
    tagline: 'One input. Ten outputs. Everywhere.',
    timeline: '2 weeks',
    roi: '10x content output, same effort',
  },
  {
    id: 'S-05',
    title: 'Data & Analytics Stack',
    tagline: "Know what's working. Always.",
    timeline: '2–3 weeks',
    roi: 'Eliminate bad spend, double down on winners',
  },
  {
    id: 'S-06',
    title: 'AI Strategy Sprint',
    tagline: 'The roadmap before the build.',
    timeline: '5 business days',
    roi: 'Clarity on exact ROI before spending a dollar',
  },
]

export async function GET() {
  return NextResponse.json({ services }, { status: 200 })
}
