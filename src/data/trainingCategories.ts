import type { LucideIcon } from 'lucide-react'
import { Boxes, Bot, Cloud, Code2, Network, Router, Sparkles, Workflow } from 'lucide-react'

export interface TrainingCategory {
  id: string
  icon: LucideIcon
  title: string
  description: string
  skills: string[]
}

export const trainingCategories: TrainingCategory[] = [
  {
    id: 'ai-genai',
    icon: Sparkles,
    title: 'AI & Generative AI',
    description: 'Practical use of modern AI models for real professional and business tasks.',
    skills: ['ChatGPT', 'Claude', 'Prompt Engineering'],
  },
  {
    id: 'ai-automation',
    icon: Bot,
    title: 'AI Automation',
    description: 'Combine AI models with automation tools to handle real workflows.',
    skills: ['AI Agents', 'Workflow Design', 'API Integration'],
  },
  {
    id: 'n8n-automation',
    icon: Workflow,
    title: 'n8n Automation',
    description: 'Build automation workflows that connect apps, data and business processes.',
    skills: ['n8n', 'Triggers & Actions', 'Integrations'],
  },
  {
    id: 'network-automation',
    icon: Network,
    title: 'Network Automation',
    description: 'Automate network configuration, monitoring and reporting tasks.',
    skills: ['Python', 'APIs', 'Automation Scripts'],
  },
  {
    id: 'python-automation',
    icon: Code2,
    title: 'Python for Automation',
    description: 'Use Python to script and automate repetitive technical work.',
    skills: ['Python', 'Scripting', 'Data Handling'],
  },
  {
    id: 'ansible-infrastructure',
    icon: Boxes,
    title: 'Ansible & Infrastructure Automation',
    description: 'Automate infrastructure configuration and setup with Ansible playbooks.',
    skills: ['Ansible', 'Playbooks', 'Infrastructure as Code'],
  },
  {
    id: 'devops-cloud',
    icon: Cloud,
    title: 'DevOps & Cloud',
    description: 'Practical DevOps workflows and cloud fundamentals for real projects.',
    skills: ['CI/CD', 'Docker', 'Cloud Basics'],
  },
  {
    id: 'network-engineering',
    icon: Router,
    title: 'Network Engineering',
    description: 'Core network engineering concepts applied to real infrastructure.',
    skills: ['Routing & Switching', 'Network Design', 'Troubleshooting'],
  },
]
