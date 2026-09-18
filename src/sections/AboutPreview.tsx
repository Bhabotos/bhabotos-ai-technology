import SectionHeading from '../components/SectionHeading'

export default function AboutPreview() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 scroll-mt-16">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="flex flex-col items-start text-left">
          <SectionHeading align="left" title="Engineering Experience. Practical AI." />
          <p className="text-text-muted mt-5 leading-relaxed max-w-xl">
            BHABOTOS AI & TECHNOLOGY combines experience in network engineering, automation, DevOps and AI to provide
            practical technology training and solution development.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-7 sm:p-8 shadow-card">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-full bg-accent-soft border border-accent-border flex items-center justify-center text-accent font-semibold text-lg shrink-0">
              BK
            </div>
            <div>
              <p className="text-heading font-semibold">Bhabotos Kumar</p>
              <p className="text-sm text-text-muted mt-0.5">Founder, BHABOTOS AI & TECHNOLOGY</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border flex flex-col gap-2">
            <p className="text-sm text-text">AI & Automation Instructor</p>
            <p className="text-sm text-text">Network Automation & DevOps Professional</p>
          </div>
        </div>
      </div>
    </section>
  )
}
