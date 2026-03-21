import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

import FAQAccordion from '../components/FAQAccordion';
import InsightCard from '../components/InsightCard';
import Layout from '../components/Layout';
import PortfolioCard from '../components/PortfolioCard';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TrustedByRail from '../components/TrustedByRail';
import {
  brandMarks,
  caseStudies,
  faqs,
  insights,
  services,
} from '../content/siteContent';

export default function Home() {
  return (
    <Layout>
      <section className="pb-16 pt-4 md:pb-20 md:pt-8">
        <div className="shell-container">
          <div className="flex flex-col justify-center pt-2 md:pt-4 pb-10">
            <div className="space-y-7">

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



            </div>
          </div>


        </div>
      </section>

      <section className="section-space">
        <div className="shell-container">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              description="We bring a fresh perspective, creative ideas and extensive knowledge of technology and digital experiences. We partner with forward-thinking companies who share our passion for transformation. Our work is purposeful, with strategy at the core of everything we do."
              eyebrow="Services"
              title="Wesley Consults is a strategic creative agency whose mission is to go above and beyond for the companies that we work with."
            />
            <Link className="button-secondary" to="/services">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
