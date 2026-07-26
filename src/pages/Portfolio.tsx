import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import Layout from '../components/Layout';
import MobileAppCard from '../components/MobileAppCard';
import PortfolioCard from '../components/PortfolioCard';
import SectionHeading from '../components/SectionHeading';
import { caseStudies, featuredCaseStudy, mobileApps } from '../content/siteContent';

export default function Portfolio() {
  return (
    <Layout>
      <section className="pb-12 pt-4 md:pt-6">
        <div className="shell-container">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <SectionHeading
              description="Websites, digital products, and mobile experiences built to solve practical problems and create a stronger presence for the people behind them."
              eyebrow="Work"
              title="Selected digital work, designed and built with purpose."
            />
            <div className="flex flex-col gap-4 lg:items-end">
              <p className="max-w-xl text-sm leading-7 text-muted">
                From focused business websites to culturally grounded games and student productivity tools, each project begins with a real need and ends with something people can use.
              </p>
              <Link className="button-secondary" to="/contact">
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-canvas-alt/72 pt-12" id="mobile-apps">
        <div className="shell-container">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionHeading
                description="Two live products shaped around distinctly Ghanaian experiences—one for mindful play, the other for better academic planning."
                eyebrow="Mobile Apps"
                title="Built for the way people play, learn, and plan."
              />
            </div>
            <p className="max-w-md text-sm leading-7 text-muted">
              Designed, engineered, and released for both iPhone and Android, with each product available directly from the official app stores.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {mobileApps.map((app) => (
              <div className="h-full" key={app.id}>
                <MobileAppCard app={app} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="shell-container">
          <div className="mb-12">
            <SectionHeading
              description="A broader selection of websites and digital experiences created for businesses, organisations, and independent brands."
              eyebrow="Web & Digital"
              title="More selected work."
            />
          </div>
          <div className="grid gap-5">
            <PortfolioCard featured study={featuredCaseStudy} />
            {caseStudies.filter((study) => study.id !== featuredCaseStudy.id).map((study) => (
              <div key={study.id}>
                <PortfolioCard study={study} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
