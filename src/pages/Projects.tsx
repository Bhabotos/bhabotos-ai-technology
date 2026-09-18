import { usePageMeta } from '../hooks/usePageMeta'
import ProjectsHero from '../sections/projects/ProjectsHero'
import FeaturedProject from '../sections/projects/FeaturedProject'
import ProjectsGrid from '../sections/projects/ProjectsGrid'
import ProjectTechStack from '../sections/projects/ProjectTechStack'
import HowProjectsAreBuilt from '../sections/projects/HowProjectsAreBuilt'
import ProjectsFinalCTA from '../sections/projects/ProjectsFinalCTA'

export default function Projects() {
  usePageMeta(
    'BHABOTOS AI & TECHNOLOGY | AI, Automation & DevOps Projects',
    'Explore practical AI, automation, network engineering and DevOps projects built with modern technology and automation workflows.',
  )

  return (
    <main>
      <ProjectsHero />
      <FeaturedProject />
      <ProjectsGrid />
      <ProjectTechStack />
      <HowProjectsAreBuilt />
      <ProjectsFinalCTA />
    </main>
  )
}
