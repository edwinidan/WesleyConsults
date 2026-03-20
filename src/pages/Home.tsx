import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import AmbientHeroMedia from '../components/AmbientHeroMedia';
import FAQAccordion from '../components/FAQAccordion';
import InsightCard from '../components/InsightCard';
import Layout from '../components/Layout';
import MetricsStrip from '../components/MetricsStrip';
import PortfolioCard from '../components/PortfolioCard';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TrustedByRail from '../components/TrustedByRail';
import {
  brandMarks,
  caseStudies,
  faqs,
  insights,
  metrics,
  services,
} from '../content/siteContent';

export default function Home() {
  return (
    <Layout>
      <section className="section-space pb-16 pt-10 md:pb-20 md:pt-16">
        <div className="shell-container">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="space-y-7">
              <motion.span
                animate={{ opacity: 1, y: 0 }}
                className="eyebrow inline-block"
                initial={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.45 }}
              >
                Wesley Consults
              </motion.span>
              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl text-6xl font-semibold tracking-[-0.07em] text-ink sm:text-7xl lg:text-[5.6rem]"
                initial={{ opacity: 0, y: 18 }}
                transition={{ delay: 0.05, duration: 0.5 }}
              >
                Strategic websites that feel more expensive before you say a word.
              </motion.h1>
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl text-base leading-8 text-muted md:text-xl"
                initial={{ opacity: 0, y: 18 }}
                transition={{ delay: 0.12, duration: 0.5 }}
              >
                We help growing businesses sharpen their positioning, redesign the digital experience, and launch sites that create clearer trust, stronger conversion, and better first impressions.
              </motion.p>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 18 }}
                transition={{ delay: 0.18, duration: 0.5 }}
              >
                <Link className="button-primary" to="/contact">
                  Start a Project <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link className="button-secondary" to="/work">
                  Explore the Work <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                animate={{ opacity: 1 }}
                className="grid max-w-2xl gap-4 pt-2 text-sm text-ink/78 sm:grid-cols-3"
                initial={{ opacity: 0 }}
                transition={{ delay: 0.28, duration: 0.5 }}
              >
                <div className="rounded-2xl border border-ink/10 bg-white/48 px-4 py-4">
                  Premium website strategy and build
                </div>
                <div className="rounded-2xl border border-ink/10 bg-white/48 px-4 py-4">
                  E-commerce and showcase experiences
                </div>
                <div className="rounded-2xl border border-ink/10 bg-white/48 px-4 py-4">
                  AI advisory for practical adoption
                </div>
              </motion.div>
            </div>

            <div className="relative min-h-[28rem]">
              <AmbientHeroMedia posterSrc="/hero-illustration.png" />
              <div className="relative flex h-full flex-col justify-end gap-6 px-6 py-8 md:px-10 md:py-10">
                <div className="ml-auto max-w-sm rounded-[1.6rem] border border-ink/10 bg-white/72 p-5 shadow-[0_18px_44px_rgba(17,17,17,0.08)]">
                  <p className="eyebrow mb-3">Current focus</p>
                  <p className="text-xl font-medium text-ink">
                    Premium redesigns for businesses that have outgrown generic websites.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-ink/10 bg-surface/56 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted">Approach</p>
                    <p className="mt-3 text-sm leading-6 text-ink/78">
                      Positioning first. Interface second. Performance throughout.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-ink/10 bg-canvas-alt/82 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted">Delivery</p>
                    <p className="mt-3 text-sm leading-6 text-ink/78">
                      Structured sprints, sharper reviews, and a cleaner path to launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <TrustedByRail items={brandMarks} />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell-container">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              description="Four focused offers for teams that need to reposition, refresh, or rebuild the digital experience without dragging the process into something bloated."
              eyebrow="Services"
              title="A tighter set of offers with strategy built into the interface."
            />
            <Link className="button-secondary" to="/services">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ink pt-10">
        <div className="shell-container">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="[&_h2]:text-canvas [&_.eyebrow]:text-canvas/64 [&_p]:text-canvas/70">
              <SectionHeading
                description="Placeholder case studies shaped to match the new tone. Each project emphasises stronger narrative control, credibility, and measurable lift."
                eyebrow="Selected Work"
                title="Digital work designed to earn trust faster and convert with less friction."
              />
            </div>
            <Link className="button-secondary-inverse" to="/work">
              See More Work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PortfolioCard featured study={caseStudies[0]} />
            </div>
            <PortfolioCard study={caseStudies[1]} />
            <PortfolioCard study={caseStudies[2]} />
            <div className="lg:col-span-2">
              <PortfolioCard study={caseStudies[3]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas-alt/72">
        <div className="shell-container">
          <SectionHeading
            align="center"
            description="The emphasis is not vanity metrics. It is the website contributing more clearly to trust, sales conversations, and the quality of inbound demand."
            eyebrow="Client Results"
            title="A better website should create commercial leverage, not just a nicer homepage."
          />
          <div className="mt-12">
            <MetricsStrip metrics={metrics} />
          </div>
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="shell-container">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              description="Six placeholder editorial pieces that position the brand as a practical, strategy-led partner rather than a generic web vendor."
              eyebrow="Insights"
              title="Useful thinking on websites, positioning, e-commerce, and practical AI adoption."
            />
            <Link className="button-secondary" to="/insights">
              Visit Insights <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {insights.slice(0, 3).map((article) => (
              <div key={article.id}>
                <InsightCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas-alt/72 pt-8">
        <div className="shell-container">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr]">
            <SectionHeading
              description="The FAQ content stays practical and direct, focused on fit, timelines, SEO, collaboration, and delivery constraints."
              eyebrow="Frequently Asked Questions"
              title="Questions teams usually ask before the project starts."
            />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
