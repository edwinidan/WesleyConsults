import CTASection from '../components/CTASection';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { aboutPrinciples, processSteps } from '../content/siteContent';

export default function About() {
  return (
    <Layout>
      <section className="pb-14 pt-4 md:pt-6">
        <div className="shell-container">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <SectionHeading
              description="Wesley Consults designs and builds useful digital products for businesses, organisations, and founders."
              eyebrow="About"
              title="Clear thinking, careful design, and dependable delivery."
            />
            <div className="surface-card space-y-4">
              <p className="text-base leading-8 text-muted">
                The work includes public-facing websites, interactive web products, and mobile apps for iPhone and Android. Each project begins with the audience, the content, and the job the product needs to do.
              </p>
              <p className="text-base leading-8 text-muted">
                We are open to working across industries. What matters is having a real problem to solve, access to the right information, and a shared commitment to making the result useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="shell-container">
          <SectionHeading
            description="The principles used across websites, applications, and digital product work."
            eyebrow="Principles"
            title="Simple standards that keep the work useful."
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
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr]">
            <SectionHeading
              description="A straightforward process keeps decisions visible and gives each stage enough attention."
              eyebrow="How We Work"
              title="A practical path from the first conversation to launch."
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
          <div className="rounded-[1.25rem] border border-white/10 bg-[#1A2E5A] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
              <div className="space-y-3">
                <span className="eyebrow text-white/62">Approach</span>
                <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                  Build something clear, useful, and ready for real people.
                </h2>
              </div>
              <p className="text-base leading-8 text-[#B8C2D8]/70 md:text-lg">
                Wesley Consults brings product thinking, interface design, and development together. The current focus is websites, web applications, and mobile products—with AI included only where it provides a practical advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
