import CTASection from '../../components/CTASection'
import Button from '../../components/Button'

export default function ProjectsFinalCTA() {
  return (
    <div className="py-20 sm:py-24">
      <CTASection
        heading="Have a Problem Worth Automating?"
        description="Let's discuss your workflow, technical challenge or automation requirement."
      >
        <Button to="/#contact" variant="primary" size="lg" className="w-full sm:w-auto">
          Discuss Your Requirement
        </Button>
        <Button to="/solutions" variant="secondary" size="lg" className="w-full sm:w-auto">
          Explore Solutions
        </Button>
      </CTASection>
    </div>
  )
}
