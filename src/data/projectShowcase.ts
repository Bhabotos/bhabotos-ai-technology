export const PROJECT_CATEGORIES = [
  'AI & Automation',
  'Network Automation',
  'DevOps & Infrastructure',
  'Telecom & Network Engineering',
] as const

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

export interface ProjectShowcaseItem {
  id: string
  category: ProjectCategory
  title: string
  description: string
  problem: string
  solution: string
  technology: string[]
  outcome: string
}

export const projectShowcase: ProjectShowcaseItem[] = [
  {
    id: 'ai-sales-agent',
    category: 'AI & Automation',
    title: 'AI Sales Agent',
    description:
      'AI-powered sales and customer interaction workflow designed to automate lead handling and repetitive customer communication.',
    problem: 'Repetitive lead handling and customer replies consume manual effort.',
    solution: 'An AI-driven workflow processes messages, qualifies leads and sends automated responses with follow-up.',
    technology: ['n8n', 'AI', 'APIs', 'WhatsApp/Facebook'],
    outcome: 'A working AI-assisted sales conversation and follow-up flow.',
  },
  {
    id: 'ai-knowledge-assistant-rag',
    category: 'AI & Automation',
    title: 'AI Knowledge Assistant / RAG',
    description:
      'AI-powered knowledge assistant that retrieves information from company documents and provides contextual answers.',
    problem: 'Finding answers inside internal documents and SOPs is slow and manual.',
    solution: 'Documents are ingested, embedded and retrieved with vector search to generate contextual AI answers.',
    technology: ['LLM', 'RAG', 'PostgreSQL', 'pgvector', 'Embeddings'],
    outcome: 'A working AI assistant for internal knowledge and document Q&A.',
  },
  {
    id: 'n8n-business-automation',
    category: 'AI & Automation',
    title: 'n8n Business Automation',
    description: 'Workflow automation connecting business applications, APIs, messaging platforms and data sources.',
    problem: 'Business data and notifications are scattered across disconnected tools.',
    solution: 'n8n workflows connect triggers, data processing, logic and messaging platforms into one automated process.',
    technology: ['n8n', 'APIs', 'Webhooks', 'Google Sheets', 'Telegram', 'WhatsApp'],
    outcome: 'An automated workflow linking business apps, data and notifications.',
  },
  {
    id: 'network-alarm-automation',
    category: 'Network Automation',
    title: 'Network Alarm Automation',
    description:
      'Real-time network alarm processing pipeline for collecting, processing and storing operational alarm information.',
    problem: 'Network alarms need real-time processing and structured storage for operational visibility.',
    solution: 'Alarms stream through Kafka, are processed in Python and stored in PostgreSQL for reporting.',
    technology: ['Nokia NSP', 'Kafka', 'Python', 'PostgreSQL', 'Docker'],
    outcome: 'A working alarm processing pipeline with structured operational data.',
  },
  {
    id: 'network-device-automation',
    category: 'Network Automation',
    title: 'Network Device Automation',
    description: 'Python and Ansible based automation workflows for repetitive network device operations.',
    problem: 'Routine device checks and configuration tasks are repetitive and manual.',
    solution: 'Python and Ansible scripts automate connectivity checks, configuration tasks and device reporting.',
    technology: ['Python', 'Netmiko', 'Ansible', 'SSH'],
    outcome: 'Repeatable automation for common network device operations.',
  },
  {
    id: 'network-monitoring-automation',
    category: 'Network Automation',
    title: 'Network Monitoring Automation',
    description: 'Automated network health monitoring workflow designed to collect connectivity and performance information.',
    problem: 'Tracking device availability and latency manually is slow and inconsistent.',
    solution: 'A scheduled Python workflow pings devices and logs availability and latency to CSV reports.',
    technology: ['Python', 'Linux', 'Bash', 'CSV', 'Cron'],
    outcome: 'Automated, scheduled network health reporting.',
  },
  {
    id: 'telecom-work-report-dashboard',
    category: 'Telecom & Network Engineering',
    title: 'Telecom Work Report Dashboard',
    description: 'Interactive dashboard for organizing telecom work data and generating operational reports.',
    problem: 'Telecom work data is difficult to organize into consistent operational reports.',
    solution: 'A dashboard organizes daily, monthly and yearly data with KPI tracking, Excel and PDF export.',
    technology: ['React', 'Vite', 'Node.js', 'Express', 'SQLite', 'ExcelJS', 'PDFKit'],
    outcome: 'A working reporting dashboard with Excel and PDF export.',
  },
  {
    id: 'devops-deployment-pipeline',
    category: 'DevOps & Infrastructure',
    title: 'DevOps Deployment Pipeline',
    description: 'Production-oriented deployment workflow using Git, GitHub Actions, Docker and Linux.',
    problem: 'Manual deployment steps are slow and error-prone.',
    solution: 'A Git-based CI/CD pipeline builds, tests and deploys the application through GitHub Actions, Docker and Nginx.',
    technology: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'Nginx'],
    outcome: 'A repeatable, automated deployment workflow.',
  },
]
