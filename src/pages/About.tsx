import CTASection from '../components/CTASection';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { aboutPrinciples, processSteps, sectors } from '../content/siteContent';

export default function About() {
  return (
    <Layout>
      <section className="pb-14 pt-4 md:pt-6">
        <div className="shell-container">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <SectionHeading
              description="Wesley Consults exists to help businesses present themselves with more clarity, more authority, and more commercial control online."
              eyebrow="About"
              title="A digital studio mindset with a practical, business-first delivery model."
            />
            <div className="surface-card space-y-4">
              <p className="text-base leading-8 text-muted">
                The work sits at the intersection of positioning, premium interface design, and front-end execution. The priority is not decoration. It is building a digital presence that helps good businesses feel as strong online as they are in the room.
              </p>
              <p className="text-base leading-8 text-muted">
                That means clearer hierarchy, more disciplined content structure, sharper user journeys, and a stronger relationship between the visual system and the offer itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="shell-container">
          <SectionHeading
            description="The principles shaping the work across strategy, design, build, and emerging AI advisory."
            eyebrow="Principles"
            title="A few rules that keep the output sharp."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {aboutPrinciples.map((principle) => (
              <div className="surface-card" key={principle.title}>
                <h3 className="text-2xl font-semibold text-ink">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas-alt/72 pt-10">
        <div className="shell-container">
          <SectionHeading
            description="Grouped sectors for the enhanced navigation and for the eventual case-study filtering layer."
            eyebrow="Sectors"
            title="Industries where credibility and digital clarity have direct commercial weight."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector) => (
              <div className="surface-card" id={sector.id} key={sector.id}>
                <p className="eyebrow mb-3">Sector</p>
                <h3 className="text-2xl font-semibold text-ink">{sector.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-10">
        <div className="shell-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr]">
            <SectionHeading
              description="The collaboration model is structured enough to keep momentum high, but flexible enough to work with busy internal teams."
              eyebrow="How We Work"
              title="A simple operating model that keeps the project moving."
            />
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div className="surface-card flex gap-5" key={step.title}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/5 bg-[#1A2E5A] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="shell-container">
          <div className="rounded-[2rem] border border-white/10 bg-[#1A2E5A] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
              <div className="space-y-3">
                <span className="eyebrow text-white/62">Leadership Note</span>
                <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                  The goal is simple: build digital experiences that make good businesses feel harder to ignore.
                </h2>
              </div>
              <p className="text-base leading-8 text-[#B8C2D8]/70 md:text-lg">
                Wesley Consults is positioning itself as a sharper digital partner for modern businesses, with an eventual AI advisory layer built around useful implementation rather than trend-chasing. The immediate focus remains premium websites, e-commerce, and showcase experiences that create measurable leverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
