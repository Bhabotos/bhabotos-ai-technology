export interface Project {
  id: string
  name: string
  description: string
  stack: string[]
}

export const projects: Project[] = [
  {
    id: 'ai-sales-support-agent',
    name: 'AI Sales & Support Agent',
    description: 'An automated agent that handles sales and support conversations end to end.',
    stack: ['n8n', 'AI', 'Automation', 'Database'],
  },
  {
    id: 'ai-rag-knowledge-base',
    name: 'AI RAG Knowledge Base',
    description: 'A retrieval-augmented knowledge base for accurate, context-aware AI answers.',
    stack: ['Supabase', 'PostgreSQL', 'Vector Search', 'AI'],
  },
  {
    id: 'network-monitoring-automation',
    name: 'Network Monitoring Automation',
    description: 'Automated monitoring and alerting for network infrastructure and services.',
    stack: ['Python', 'Linux', 'Docker'],
  },
  {
    id: 'telecom-work-report-dashboard',
    name: 'Telecom Work Report Dashboard',
    description: 'A dashboard for tracking and reporting telecom operational work.',
    stack: ['React', 'Node.js', 'SQLite'],
  },
  {
    id: 'nokia-nsp-alarm-processing',
    name: 'Nokia NSP Alarm Processing',
    description: 'A pipeline for processing and correlating network alarms at scale.',
    stack: ['Nokia NSP', 'Kafka', 'Python', 'PostgreSQL'],
  },
]
