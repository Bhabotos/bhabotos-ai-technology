import { usePageMeta } from '../hooks/usePageMeta'
import TrainingHero from '../sections/training/TrainingHero'
import TrainingCategories from '../sections/training/TrainingCategories'
import FeaturedCourseSection from '../sections/training/FeaturedCourseSection'
import AvailableTraining from '../sections/training/AvailableTraining'
import ProjectBasedLearning from '../sections/training/ProjectBasedLearning'
import LearningApproach from '../sections/training/LearningApproach'
import WhoShouldJoin from '../sections/training/WhoShouldJoin'
import WhatYouGet from '../sections/training/WhatYouGet'
import TrainingOutcomes from '../sections/training/TrainingOutcomes'
import TrainingFinalCTA from '../sections/training/TrainingFinalCTA'

export default function Training() {
  usePageMeta(
    'BHABOTOS AI & TECHNOLOGY | AI, Automation, Network & DevOps Training',
    'Practical AI, automation, network and DevOps training with hands-on projects for professionals, engineers and technology teams.',
  )

  return (
    <main>
      <TrainingHero />
      <TrainingCategories />
      <FeaturedCourseSection />
      <AvailableTraining />
      <ProjectBasedLearning />
      <LearningApproach />
      <WhoShouldJoin />
      <WhatYouGet />
      <TrainingOutcomes />
      <TrainingFinalCTA />
    </main>
  )
}
