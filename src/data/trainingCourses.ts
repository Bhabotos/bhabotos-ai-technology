export type TrainingCourseStatus = 'available' | 'coming-soon'

export interface TrainingCourseSummary {
  id: string
  title: string
  description: string
  status: TrainingCourseStatus
  level?: string
  duration?: string
  format?: string
  price?: string
  topics: string[]
  projectOutcome: string
}

export const trainingCourses: TrainingCourseSummary[] = [
  {
    id: 'ai-productivity-automation-bootcamp',
    title: 'AI Productivity & Automation Bootcamp',
    description:
      'Learn ChatGPT, Claude and AI automation tools to improve productivity and build real automation workflows.',
    status: 'available',
    level: 'Beginner to Intermediate',
    duration: '4 Weeks',
    format: 'Online Live',
    price: '৳5,000',
    topics: ['ChatGPT', 'Claude', 'Prompt Engineering', 'n8n'],
    projectOutcome: 'A working AI-powered automation workflow.',
  },
  {
    id: 'n8n-automation-for-business',
    title: 'n8n Automation for Business',
    description: 'Design and build practical business automation workflows using n8n.',
    status: 'coming-soon',
    topics: ['n8n', 'Workflow Design', 'API Integration'],
    projectOutcome: 'An automated business workflow connecting real tools.',
  },
  {
    id: 'network-automation-python-ansible',
    title: 'Network Automation with Python & Ansible',
    description: 'Automate network configuration and operations using Python and Ansible.',
    status: 'coming-soon',
    topics: ['Python', 'Ansible', 'Network Automation'],
    projectOutcome: 'An automated network configuration workflow.',
  },
  {
    id: 'practical-devops-network-engineers',
    title: 'Practical DevOps for Network Engineers',
    description: 'Learn DevOps fundamentals and tooling built for network and infrastructure teams.',
    status: 'coming-soon',
    topics: ['DevOps', 'CI/CD', 'Infrastructure'],
    projectOutcome: 'A deployable DevOps workflow for infrastructure tasks.',
  },
  {
    id: 'ai-tools-it-network-professionals',
    title: 'AI Tools for IT & Network Professionals',
    description: 'Apply practical AI tools to everyday IT and network engineering work.',
    status: 'coming-soon',
    topics: ['AI Tools', 'IT Operations', 'Network Engineering'],
    projectOutcome: 'AI-assisted workflows for IT and network tasks.',
  },
]
