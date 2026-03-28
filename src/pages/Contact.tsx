import { ArrowUpRight } from 'lucide-react';
import ContactPanel from '../components/ContactPanel';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { contactMethods } from '../content/siteContent';

export default function Contact() {
  return (
    <Layout>
      <section className="section-space pb-12 pt-10 md:pt-14">
        <div className="shell-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <SectionHeading
              description="Use the form if you want a structured starting point, but direct contact options stay visible so the page never feels like a dead-end form wall."
              eyebrow="Contact"
              title="Tell us what needs to change, what is not working, and what the site should do better."
            />
            <div className="surface-card space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">Typical response</p>
              <p className="text-3xl font-semibold tracking-[-0.04em] text-ink">Within 24 hours</p>
              <p className="text-sm leading-7 text-muted">
                The most useful first message includes your business type, what the current site is failing to do, your target timeline, and whether the work is repositioning, redesign, or both.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="shell-container">
          <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-6">
              <ContactPanel methods={contactMethods} />

              <div className="surface-card">
                <p className="eyebrow mb-3">What to expect</p>
                <div className="space-y-4 text-sm leading-7 text-muted">
                  <p>We review fit, clarify scope, and recommend the smallest scope that will still move the business forward.</p>
                  <p>If the right answer is a focused refinement rather than a full rebuild, that is the recommendation you should get.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-ink/10 bg-white/46 p-6 shadow-[0_24px_70px_rgba(17,17,17,0.08)] md:p-8">
              <form className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input className="form-input" id="name" placeholder="Your name" type="text" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input className="form-input" id="email" placeholder="you@company.com" type="email" />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="form-label" htmlFor="company">
                      Company
                    </label>
                    <input className="form-input" id="company" placeholder="Company name" type="text" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="project-type">
                      Project Type
                    </label>
                    <select className="form-input" defaultValue="Website redesign" id="project-type">
                      <option>Website redesign</option>
                      <option>E-commerce build</option>
                      <option>Portfolio experience</option>
                      <option>AI advisory enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="timeline">
                    Timeline
                  </label>
                  <select className="form-input" defaultValue="Next 1 to 2 months" id="timeline">
                    <option>Immediately</option>
                    <option>Next 1 to 2 months</option>
                    <option>Quarter planning stage</option>
                    <option>Exploring options</option>
                  </select>
                </div>

                <div>
                  <label className="form-label" htmlFor="message">
                    Project Brief
                  </label>
                  <textarea
                    className="form-input min-h-44 resize-none"
                    id="message"
                    placeholder="What is the business, what needs to improve, and what should the new site achieve?"
                  />
                </div>

                <button className="button-primary w-full" type="button">
                  Request a Conversation <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 rounded-[1.4rem] border border-ink/10 bg-surface/68 px-5 py-4 text-sm leading-7 text-ink/74">
                Prefer direct contact? Email{' '}
                <a className="font-medium text-ink" href="mailto:wesleyconsults@gmail.com">
                  wesleyconsults@gmail.com
                </a>{' '}
                or start on WhatsApp for a faster first exchange.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas-alt/72 pt-8">
        <div className="shell-container">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="surface-card">
              <p className="eyebrow mb-3">1. First review</p>
              <p className="text-sm leading-7 text-muted">We check fit, commercial intent, and whether the current issue is design, messaging, structure, or all three.</p>
            </div>
            <div className="surface-card">
              <p className="eyebrow mb-3">2. Scope recommendation</p>
              <p className="text-sm leading-7 text-muted">You get a clear recommendation on the right project shape, timeline expectation, and what should be prioritised first.</p>
            </div>
            <div className="surface-card">
              <p className="eyebrow mb-3">3. Delivery path</p>
              <p className="text-sm leading-7 text-muted">If there is a fit, we move into a structured process for strategy, design, build, and launch.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
