export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden scroll-mt-16">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 flex flex-col items-center text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent animate-fade-up">
          AI • AUTOMATION • NETWORK • DEVOPS
        </span>

        <h1
          className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-heading leading-[1.08] tracking-tight animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          Real Projects. Practical Engineering.
          <br />
          <span className="text-gradient">Automation That Solves Problems.</span>
        </h1>

        <p
          className="mt-6 text-base sm:text-lg text-text max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: '140ms' }}
        >
          Explore practical projects across AI, automation, network engineering and DevOps, built around real
          operational and technology problems.
        </p>
      </div>
    </section>
  )
}
