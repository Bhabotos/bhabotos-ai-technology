export interface TechGroup {
  id: string
  category: string
  items: string[]
}

export const techStack: TechGroup[] = [
  {
    id: 'ai-llm',
    category: 'AI / LLM',
    items: ['OpenAI', 'Gemini', 'Claude', 'OpenRouter'],
  },
  {
    id: 'automation',
    category: 'Automation',
    items: ['n8n', 'Python', 'APIs', 'Webhooks'],
  },
  {
    id: 'network-automation',
    category: 'Network Automation',
    items: ['Python', 'Netmiko', 'Ansible'],
  },
  {
    id: 'data',
    category: 'Data',
    items: ['PostgreSQL', 'Supabase', 'pgvector'],
  },
  {
    id: 'devops',
    category: 'DevOps',
    items: ['Docker', 'Git', 'GitHub Actions', 'Terraform', 'Linux'],
  },
]
