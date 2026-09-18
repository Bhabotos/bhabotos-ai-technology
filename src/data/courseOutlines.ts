export interface CourseClassOutline {
  title: string
  topics: string[]
}

export interface CourseWeekOutline {
  title: string
  classes: CourseClassOutline[]
}

export interface CourseOutlineContent {
  weeks: CourseWeekOutline[]
  whatYoullLearn: string[]
  whoThisIsFor: string[]
  courseFormat: string[]
}

export const courseOutlines: Record<string, CourseOutlineContent> = {
  'ai-productivity-automation-bootcamp': {
    weeks: [
      {
        title: 'Week 1: AI Fundamentals & ChatGPT',
        classes: [
          {
            title: 'Class 1: Introduction to AI for Professional Work',
            topics: [
              'Understanding modern AI tools',
              'ChatGPT fundamentals',
              'Using ChatGPT for professional tasks',
              'Writing, summarizing and analysis workflows',
            ],
          },
          {
            title: 'Class 2: Prompt Engineering',
            topics: [
              'Prompt structure and best practices',
              'Role, context and constraints',
              'Advanced prompting techniques',
              'Creating reusable professional prompts',
            ],
          },
        ],
      },
      {
        title: 'Week 2: Claude & AI Research',
        classes: [
          {
            title: 'Class 3: Claude for Research & Project Work',
            topics: [
              'Claude overview',
              'Research workflows',
              'Working with long documents',
              'Project and knowledge management',
            ],
          },
          {
            title: 'Class 4: AI Productivity Workflows',
            topics: [
              'AI-assisted daily work',
              'Email and document workflows',
              'Report generation',
              'Meeting and task productivity',
              'Creating reusable AI workflows',
            ],
          },
        ],
      },
      {
        title: 'Week 3: n8n Automation',
        classes: [
          {
            title: 'Class 5: Introduction to n8n',
            topics: [
              'n8n fundamentals',
              'Triggers and actions',
              'Nodes and workflows',
              'Webhooks',
              'Connecting external services',
            ],
          },
          {
            title: 'Class 6: Building AI Automation',
            topics: [
              'AI agents and automation',
              'API integration',
              'Google Sheets / Telegram / Email automation',
              'Workflow logic',
              'Error handling and testing',
            ],
          },
        ],
      },
      {
        title: 'Week 4: Real-World AI Automation Project',
        classes: [
          {
            title: 'Class 7: Build a Real Automation Project',
            topics: [
              'Project planning',
              'Workflow architecture',
              'AI integration',
              'Connecting multiple services',
              'Testing and debugging',
            ],
          },
          {
            title: 'Class 8: Deployment & Final Project',
            topics: [
              'Production workflow',
              'Deployment concepts',
              'Monitoring and maintenance',
              'Project presentation',
              'Final Q&A',
            ],
          },
        ],
      },
    ],
    whatYoullLearn: [
      'ChatGPT for professional work',
      'Prompt Engineering',
      'Claude for research and project work',
      'AI productivity workflows',
      'n8n automation',
      'AI-powered workflows',
      'API and tool integration',
      'Real-world automation project',
    ],
    whoThisIsFor: [
      'Beginners who want to use AI professionally',
      'Professionals who want to improve productivity',
      'Freelancers and entrepreneurs',
      'Students and job seekers',
      'People interested in AI automation',
    ],
    courseFormat: [
      '4 Weeks',
      '8 Live Classes',
      'Online Live',
      'Beginner to Intermediate',
      'Practical hands-on learning',
      'Real-world project',
    ],
  },
}
