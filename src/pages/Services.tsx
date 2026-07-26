import CTASection from '../components/CTASection';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { processSteps, services } from '../content/siteContent';
import { serviceToneStyles } from '../content/visualVariants';

export default function Services() {
  return (
    <Layout>
      <section className="pb-12 pt-4 md:pt-6">
        <div className="shell-container">
          <SectionHeading
            description="Three focused service areas, each supported by work already designed, built, and released."
            eyebrow="Services"
            title="Websites, applications, and digital products built around real needs."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((service) => (
              <a
                className="button-secondary"
                href={`#${service.id}`}
                key={service.id}
              >
                {service.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="shell-container space-y-6">
          {services.map((service, index) => {
            const toneStyle = serviceToneStyles[service.tone];

            return (
              <section
                className="grid gap-6 rounded-[1.25rem] border border-black/5 bg-[#FFFFFF]/85 p-6 shadow-[0_16px_48px_rgba(26,46,90,0.06)] md:p-8 lg:grid-cols-[1fr_0.9fr]"
                id={service.id}
                key={service.id}
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className="eyebrow">{`0${index + 1}`}</span>
                    <h2 className="text-4xl font-semibold tracking-[-0.05em] text-ink md:text-5xl">
                      {service.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="surface-card">
                      <p className="eyebrow mb-4">Commercial outcomes</p>
                      <ul className="space-y-3 text-sm leading-6 text-ink/78">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="surface-card">
                      <p className="eyebrow mb-4">Included</p>
                      <ul className="space-y-3 text-sm leading-6 text-ink/78">
                        {service.deliverables.map((deliverable) => (
                          <li key={deliverable}>{deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className={`min-h-64 rounded-[1.15rem] border p-6 ${toneStyle.panel}`}>
                    <div className="flex h-full flex-col justify-between">
                      <div className={`w-fit rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] ${toneStyle.badge}`}>
                        {service.shortTitle}
                      </div>
                      <p className={`max-w-sm text-sm leading-7 ${toneStyle.body}`}>
                        {service.summary}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="surface-card">
                      <p className="eyebrow mb-2">Typical timeline</p>
                      <p className="text-lg font-medium text-ink">{service.timeline}</p>
                    </div>
                    <div className="surface-card">
                      <p className="eyebrow mb-2">Best fit</p>
                      <p className="text-sm leading-6 text-ink/78">{service.audience}</p>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="section-space bg-canvas-alt/72 pt-10">
        <div className="shell-container">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr]">
            <SectionHeading
              description="The delivery model is intentionally simple so the process feels decisive rather than chaotic."
              eyebrow="Process"
              title="A three-stage structure that keeps the work moving."
            />
            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <div className="surface-card flex gap-5" key={step.title}>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/5 bg-[#1A2E5A] text-sm font-semibold text-white">
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

      <CTASection />
    </Layout>
  );
}
