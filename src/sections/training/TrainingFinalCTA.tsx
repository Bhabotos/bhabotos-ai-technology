import CTASection from '../../components/CTASection'
import Button from '../../components/Button'

export default function TrainingFinalCTA() {
  return (
    <div className="py-20 sm:py-24">
      <CTASection
        heading="Ready to Build Practical Skills?"
        description="Choose a training program and start building real-world technology projects."
      >
        <Button href="#available-training" variant="primary" size="lg" className="w-full sm:w-auto">
          Explore Courses
        </Button>
        <Button to="/#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
          Talk to Us
        </Button>
      </CTASection>
    </div>
  )
}
