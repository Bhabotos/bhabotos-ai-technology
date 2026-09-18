import CTASection from '../../components/CTASection'
import Button from '../../components/Button'

export default function SolutionsFinalCTA() {
  return (
    <div className="py-20 sm:py-24">
      <CTASection
        heading="Have a Manual Process You Want to Automate?"
        description="Tell us what you are doing manually. We can help design a practical automation workflow."
      >
        <Button to="/#contact" variant="primary" size="lg" className="w-full sm:w-auto">
          Discuss Your Requirement
        </Button>
        <Button to="/#projects" variant="secondary" size="lg" className="w-full sm:w-auto">
          View Projects
        </Button>
      </CTASection>
    </div>
  )
}
