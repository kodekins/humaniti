interface SectionHeaderProps {
  num: string
  title: string
  tag?: string
}

export default function SectionHeader({ num, title, tag }: SectionHeaderProps) {
  return (
    <div
      className="flex items-baseline gap-5 mb-12 pb-5"
      style={{ borderBottom: '1px solid #2a2a2a' }}
    >
      <span
        className="font-mono text-[11px] tracking-[2px] text-acid"
        style={{ fontFamily: 'var(--font-jetbrains)' }}
      >
        {num}
      </span>
      <h2
        className="font-head text-5xl md:text-6xl leading-none"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        {title}
      </h2>
      {tag && (
        <span
          className="ml-auto font-mono text-[9px] tracking-[2px] text-muted uppercase border border-gray2 px-2.5 py-1"
          style={{ fontFamily: 'var(--font-jetbrains)' }}
        >
          {tag}
        </span>
      )}
    </div>
  )
}
