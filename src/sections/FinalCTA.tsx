import CTASection from '../components/CTASection'
import Button from '../components/Button'

export default function FinalCTA() {
  return (
    <div className="py-20 sm:py-24">
      <CTASection
        id="contact"
        heading="Ready to Learn or Automate?"
        description="Whether you want to develop practical AI skills or automate a business or technical workflow, let's build something useful."
      >
        <Button to="/training" variant="primary" size="lg" className="w-full sm:w-auto">
          Join a Course
        </Button>
        <Button variant="secondary" size="lg" className="w-full sm:w-auto">
          Talk to Us
        </Button>
      </CTASection>
    </div>
  )
}
