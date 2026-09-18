import type { LucideIcon } from 'lucide-react'
import { Bot, Cog, Network, Sparkles, Workflow, LayoutDashboard } from 'lucide-react'

export interface Solution {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export const solutions: Solution[] = [
  {
    id: 'ai-chatbot',
    icon: Bot,
    title: 'AI Chatbot',
    description: 'Conversational AI assistants that handle support, sales and internal queries.',
  },
  {
    id: 'business-automation',
    icon: Cog,
    title: 'Business Automation',
    description: 'Automate repetitive operational tasks and connect the tools your business runs on.',
  },
  {
    id: 'ai-agents',
    icon: Sparkles,
    title: 'AI Agents',
    description: 'Task-oriented AI agents that plan, act and integrate with real systems and data.',
  },
  {
    id: 'n8n-automation',
    icon: Workflow,
    title: 'n8n Automation',
    description: 'Workflow automation built on n8n to connect apps, data and business processes.',
  },
  {
    id: 'network-automation',
    icon: Network,
    title: 'Network Automation',
    description: 'Automate network configuration, monitoring and reporting with Python and modern tooling.',
  },
  {
    id: 'dashboards-reporting',
    icon: LayoutDashboard,
    title: 'Dashboards & Reporting',
    description: 'Practical dashboards that turn operational data into clear, usable reporting.',
  },
]
