import type { Project } from './projects'

export const solutionExamples: Project[] = [
  {
    id: 'ai-sales-agent',
    name: 'AI Sales Agent',
    description: 'An AI agent concept for handling sales conversations across chat and messaging channels.',
    stack: ['n8n', 'AI', 'CRM', 'Voice'],
    projectSlug: 'real-estate-ai-agent',
  },
  {
    id: 'network-alarm-automation',
    name: 'Network Alarm Automation',
    description: 'A concept for processing and correlating network alarms from telecom infrastructure.',
    stack: ['n8n', 'Claude', 'Google Sheets', 'Telegram'],
    projectSlug: 'ai-fiber-alarm-automation',
  },
  {
    id: 'network-device-automation',
    name: 'Network Device Automation',
    description: 'A concept for automating configuration and checks across network devices.',
    stack: ['Python', 'Netmiko', 'FastAPI', 'PostgreSQL'],
    projectSlug: 'netautoops',
  },
  {
    id: 'ai-knowledge-assistant',
    name: 'AI Knowledge Assistant',
    description: 'A concept for an AI assistant that answers questions from internal documents.',
    stack: ['LLM', 'RAG', 'ChromaDB', 'n8n'],
    projectSlug: 'rag-customer-email-support-agent',
  },
  {
    id: 'business-reporting-automation',
    name: 'Business Reporting Automation',
    description: 'A concept for automating recurring business reports from spreadsheets and APIs.',
    stack: ['n8n', 'Google Sheets', 'APIs', 'Email'],
  },
  {
    id: 'devops-deployment-pipeline',
    name: 'DevOps Deployment Pipeline',
    description: 'A concept for a CI/CD pipeline that builds, tests and deploys an application.',
    stack: ['Git', 'GitHub Actions', 'Docker', 'Linux'],
    projectSlug: 'production-docker-app',
  },
]
