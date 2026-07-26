import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

import Layout from '../components/Layout';
import MobileAppTeaserCard from '../components/MobileAppTeaserCard';
import PortfolioCard from '../components/PortfolioCard';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import {
  caseStudies,
  mobileApps,
  services,
} from '../content/siteContent';

export default function Home() {
  return (
    <Layout>
      <section className="pb-4 md:pb-6">
        <div className="shell-container">
          <div className="flex flex-col justify-center">
            <div className="space-y-7">
              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl text-6xl font-semibold tracking-[-0.04em] text-ink sm:text-7xl lg:text-[5.4rem]"
                initial={{ opacity: 0, y: 18 }}
                transition={{ delay: 0.05, duration: 0.5 }}
              >
                Websites and apps that make your work easier to trust—and easier to use.
              </motion.h1>
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl text-base leading-8 text-muted md:text-xl"
                initial={{ opacity: 0, y: 18 }}
                transition={{ delay: 0.12, duration: 0.5 }}
              >
                Wesley Consults designs and builds clear websites, web applications, and mobile products for businesses and organisations ready to improve how they work online.
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
          <div className="mb-12">
            <SectionHeading
              eyebrow="Services"
              title="Focused digital services, backed by work already delivered."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
          <div className="mt-7">
            <Link className="button-secondary" to="/services">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#0F1D3B] pt-10">
        <div className="shell-container">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="[&_h2]:text-white [&_.eyebrow]:text-white/64 [&_p]:text-white/70">
              <SectionHeading
                description="A selection of live websites, web products, and mobile applications."
                eyebrow="Selected Work"
                title="Real projects, built for real use."
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
            <div className="grid gap-5 lg:col-span-3 lg:grid-cols-2">
              {mobileApps.map((app) => (
                <div key={app.id}>
                  <MobileAppTeaserCard app={app} />
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
