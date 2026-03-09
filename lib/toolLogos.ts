/**
 * Map tool display names to Simple Icons slugs (official brand SVGs).
 * Icons loaded from: https://cdn.jsdelivr.net/npm/simple-icons@11/icons/{slug}.svg
 * @see https://simpleicons.org
 */
export const TOOL_LOGO_SLUGS: Record<string, string> = {
  'Anthropic Claude': 'anthropic',
  'Claude API': 'anthropic',
  'OpenAI GPT-4o': 'openai',
  'OpenAI API': 'openai',
  'GPT-4o': 'openai',
  'Make.com': 'make',
  'n8n': 'n8n',
  'Zapier': 'zapier',
  'Clay': 'clay',
  'Instantly.ai': 'instantly',
  'Apollo': 'apollo',
  'PhantomBuster': 'phantombuster',
  'LinkedIn API': 'linkedin',
  'LinkedIn': 'linkedin',
  'Airtable': 'airtable',
  'Notion': 'notion',
  'HeyGen': 'heygen',
  'Repurpose.io': 'repurpose',
  'Buffer': 'buffer',
  'Looker Studio': 'looker',
  'BigQuery': 'googlecloud',
  'Segment': 'segment',
  'Supermetrics': 'supermetrics',
  'LangChain': 'langchain',
  'Descript': 'descript',
}

const SIMPLE_ICONS_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons'

export function getToolLogoSlug(name: string): string | null {
  return TOOL_LOGO_SLUGS[name] ?? null
}

export function getToolLogoUrl(name: string): string | null {
  const slug = getToolLogoSlug(name)
  return slug ? `${SIMPLE_ICONS_CDN}/${slug}.svg` : null
}
