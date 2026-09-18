import type { TechGroup } from '../components/TechStackGrid'

export const projectTechStack: TechGroup[] = [
  {
    id: 'ai',
    category: 'AI',
    items: ['OpenAI', 'Gemini', 'Claude', 'OpenRouter'],
  },
  {
    id: 'automation',
    category: 'Automation',
    items: ['n8n', 'Python', 'APIs', 'Webhooks'],
  },
  {
    id: 'network',
    category: 'Network',
    items: ['Netmiko', 'Ansible', 'Nokia NSP'],
  },
  {
    id: 'data',
    category: 'Data',
    items: ['PostgreSQL', 'Supabase', 'pgvector', 'SQLite'],
  },
  {
    id: 'devops',
    category: 'DevOps',
    items: ['Docker', 'GitHub Actions', 'Linux', 'Nginx', 'Terraform'],
  },
]
