export interface TrainingProject {
  id: string
  name: string
  description: string
  technologies: string[]
  outcome: string
}

export const trainingProjects: TrainingProject[] = [
  {
    id: 'ai-sales-agent',
    name: 'AI Sales Agent',
    description: 'An AI agent that handles sales conversations and lead follow-up.',
    technologies: ['n8n', 'AI', 'Automation'],
    outcome: 'A working AI-driven sales conversation flow.',
  },
  {
    id: 'n8n-business-automation',
    name: 'n8n Business Automation',
    description: 'Automate a real business process end-to-end using n8n.',
    technologies: ['n8n', 'APIs', 'Automation'],
    outcome: 'A live business automation workflow.',
  },
  {
    id: 'network-monitoring-automation',
    name: 'Network Monitoring Automation',
    description: 'Automated monitoring and alerting for network infrastructure.',
    technologies: ['Python', 'Linux', 'Docker'],
    outcome: 'An automated network monitoring pipeline.',
  },
  {
    id: 'network-device-automation',
    name: 'Network Device Automation',
    description: 'Automate configuration changes across network devices.',
    technologies: ['Python', 'Ansible', 'Network APIs'],
    outcome: 'A repeatable device configuration workflow.',
  },
  {
    id: 'ai-knowledge-assistant',
    name: 'AI-powered Knowledge Assistant',
    description: 'An AI assistant that answers questions from a knowledge base.',
    technologies: ['AI', 'Vector Search', 'Automation'],
    outcome: 'A working AI knowledge assistant.',
  },
  {
    id: 'infrastructure-automation',
    name: 'Infrastructure Automation',
    description: 'Automate infrastructure setup and configuration tasks.',
    technologies: ['Ansible', 'Linux', 'Docker'],
    outcome: 'An automated infrastructure setup process.',
  },
  {
    id: 'rag-document-qa',
    name: 'RAG / Document Q&A System',
    description: 'A retrieval-augmented system for answering questions from documents.',
    technologies: ['PostgreSQL', 'Vector Search', 'AI'],
    outcome: 'A working document Q&A system.',
  },
  {
    id: 'devops-deployment-pipeline',
    name: 'DevOps Deployment Pipeline',
    description: 'Build a practical CI/CD pipeline for deploying an application.',
    technologies: ['Docker', 'CI/CD', 'Linux'],
    outcome: 'A working automated deployment pipeline.',
  },
]
