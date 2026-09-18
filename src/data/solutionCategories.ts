import type { LucideIcon } from 'lucide-react'
import { BrainCircuit, Cloud, Cog, Network, Workflow, Bot } from 'lucide-react'

export interface SolutionCategory {
  id: string
  icon: LucideIcon
  title: string
  description: string
  skills: string[]
}

export const solutionCategories: SolutionCategory[] = [
  {
    id: 'ai-automation',
    icon: Bot,
    title: 'AI Automation',
    description: 'AI-powered assistants and agents for customer interaction and internal work.',
    skills: ['AI assistants', 'AI customer support', 'AI sales agents', 'AI knowledge assistants', 'AI document processing'],
  },
  {
    id: 'business-automation',
    icon: Cog,
    title: 'Business Automation',
    description: 'Automate repetitive business processes and keep data moving between systems.',
    skills: ['Lead automation', 'Report automation', 'Email automation', 'Notification workflows', 'Data synchronization'],
  },
  {
    id: 'n8n-automation',
    icon: Workflow,
    title: 'n8n Automation',
    description: 'Workflow automation that connects apps, APIs and everyday business tools.',
    skills: ['API integrations', 'Webhooks', 'WhatsApp workflows', 'Telegram workflows', 'Google Sheets automation', 'Email workflows'],
  },
  {
    id: 'network-automation',
    icon: Network,
    title: 'Network Automation',
    description: 'Automate network monitoring, configuration and reporting tasks.',
    skills: ['Network monitoring', 'Device health checks', 'Configuration automation', 'Alarm processing', 'Network reporting', 'Python/Ansible automation'],
  },
  {
    id: 'ai-knowledge-rag',
    icon: BrainCircuit,
    title: 'AI Knowledge & RAG',
    description: 'Retrieval-augmented AI systems that answer questions from your own data.',
    skills: ['Document Q&A', 'Knowledge assistants', 'Vector search', 'RAG workflows', 'Internal knowledge systems'],
  },
  {
    id: 'devops-infrastructure',
    icon: Cloud,
    title: 'DevOps & Infrastructure',
    description: 'Practical DevOps tooling and infrastructure automation for real deployments.',
    skills: ['Docker', 'CI/CD', 'Linux automation', 'Ansible', 'Terraform', 'Cloud deployment'],
  },
]
