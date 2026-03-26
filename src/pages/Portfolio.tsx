import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import Layout from '../components/Layout';
import MetricsStrip from '../components/MetricsStrip';
import PortfolioCard from '../components/PortfolioCard';
import SectionHeading from '../components/SectionHeading';
import { caseStudies, featuredCaseStudy, metrics } from '../content/siteContent';

export default function Portfolio() {
  return (
    <Layout>
      <section className="section-space pb-12 pt-10 md:pt-14">
        <div className="shell-container">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <SectionHeading
              description="A premium work page with a featured case study lead-in, stronger categorisation, and a darker visual language that makes each project feel more deliberate."
              eyebrow="Work"
              title="Selected digital work for brands that needed more authority online."
            />
            <div className="flex flex-col gap-4 lg:items-end">
              <p className="max-w-xl text-sm leading-7 text-muted">
                These are placeholder case studies for the redesign. The layout and storytelling pattern are ready to accept real projects, results, and proof points when available.
              </p>
              <Link className="button-secondary" to="/contact">
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="shell-container">
          <div className="grid gap-5">
            <PortfolioCard featured study={featuredCaseStudy} />
            {caseStudies.filter((study) => study.id !== featuredCaseStudy.id).map((study) => (
              <PortfolioCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas-alt/72 pt-10">
        <div className="shell-container">
          <SectionHeading
            align="center"
            description="The work is presented as commercially relevant proof, not as generic gallery items."
            eyebrow="Results"
            title="Measured outcomes belong beside the design, not hidden behind it."
          />
          <div className="mt-12">
            <MetricsStrip metrics={metrics} />
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
