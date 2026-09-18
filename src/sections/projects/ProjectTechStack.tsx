import SectionHeading from '../../components/SectionHeading'
import TechStackGrid from '../../components/TechStackGrid'
import { projectTechStack } from '../../data/projectTechStack'

export default function ProjectTechStack() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="Technology Across Projects" />
      <TechStackGrid groups={projectTechStack} />
    </section>
  )
}
