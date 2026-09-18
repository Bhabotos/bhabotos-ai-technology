import { usePageMeta } from '../hooks/usePageMeta'
import SolutionsHero from '../sections/solutions/SolutionsHero'
import SolutionCategories from '../sections/solutions/SolutionCategories'
import BusinessProblems from '../sections/solutions/BusinessProblems'
import ExampleSolutions from '../sections/solutions/ExampleSolutions'
import HowWeWork from '../sections/solutions/HowWeWork'
import WhoWeHelp from '../sections/solutions/WhoWeHelp'
import TechStack from '../sections/solutions/TechStack'
import SolutionsFinalCTA from '../sections/solutions/SolutionsFinalCTA'

export default function Solutions() {
  usePageMeta(
    'BHABOTOS AI & TECHNOLOGY | AI Automation & Technology Solutions',
    'Practical AI, automation, network and DevOps solutions for businesses and technical operations teams.',
  )

  return (
    <main>
      <SolutionsHero />
      <SolutionCategories />
      <BusinessProblems />
      <ExampleSolutions />
      <HowWeWork />
      <WhoWeHelp />
      <TechStack />
      <SolutionsFinalCTA />
    </main>
  )
}
