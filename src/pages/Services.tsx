import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { processSteps, serviceFaqs, services } from '../content/siteContent';

export default function Services() {
  return (
    <Layout>
      <section className="section-space pb-12 pt-10 md:pt-14">
        <div className="shell-container">
          <SectionHeading
            description="The service mix stays focused: business websites, e-commerce platforms, portfolio experiences, and a coming-soon AI advisory layer for practical implementation planning."
            eyebrow="Services"
            title="A premium digital offer built around clarity, trust, and commercial intent."
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
          {services.map((service, index) => (
            <section
              className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:grid-cols-[1fr_0.9fr]"
              id={service.id}
              key={service.id}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="eyebrow">{`0${index + 1}`}</span>
                  <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-mist md:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="surface-card">
                    <p className="eyebrow mb-4">Commercial outcomes</p>
                    <ul className="space-y-3 text-sm leading-6 text-white/80">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="surface-card">
                    <p className="eyebrow mb-4">Included</p>
                    <ul className="space-y-3 text-sm leading-6 text-white/80">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div
                  className="min-h-64 rounded-[1.75rem] border border-white/10"
                  style={{
                    background: `linear-gradient(145deg, ${service.accent}22, rgba(9,19,28,0.96) 52%, rgba(255,255,255,0.04))`,
                  }}
                >
                  <div className="ambient-grid h-full rounded-[1.75rem] p-6">
                    <div className="flex h-full flex-col justify-between">
                      <div className="w-fit rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/75">
                        {service.shortTitle}
                      </div>
                      <p className="max-w-sm text-sm leading-7 text-white/85">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="surface-card">
                    <p className="eyebrow mb-2">Typical timeline</p>
                    <p className="text-lg font-medium text-white">{service.timeline}</p>
                  </div>
                  <div className="surface-card">
                    <p className="eyebrow mb-2">Best fit</p>
                    <p className="text-sm leading-6 text-white/80">{service.audience}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section-space pt-10">
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
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-mint/[0.25] bg-mint/[0.1] text-sm font-semibold text-mint">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-mist">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="shell-container">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr]">
            <SectionHeading
              description="Service-specific questions around content, future updates, and the AI advisory offer."
              eyebrow="Service FAQ"
              title="Practical questions before you commit to a scope."
            />
            <FAQAccordion items={serviceFaqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
