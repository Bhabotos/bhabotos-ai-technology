export interface Course {
  id: string
  title: string
  price: string
  duration: string
  classes: string
  level: string
  format: string
  description: string
  outcomes: string[]
}

export const featuredCourse: Course = {
  id: 'ai-productivity-automation-bootcamp',
  title: 'AI Productivity & Automation Bootcamp',
  price: '৳5,000',
  duration: '4 Weeks',
  classes: '8 Live Classes',
  level: 'Beginner to Intermediate',
  format: 'Online Live',
  description:
    'Learn how to use ChatGPT, Claude and AI automation tools to improve professional productivity and build practical automation workflows.',
  outcomes: [
    'ChatGPT for professional work',
    'Claude for research and project work',
    'Prompt Engineering',
    'AI productivity',
    'n8n automation',
    'AI-powered workflows',
    'Real-world automation project',
  ],
}
