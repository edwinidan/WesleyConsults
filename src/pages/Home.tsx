import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import CTASection from '../components/CTASection';
import { motion } from 'motion/react';
import { ArrowRight, Code, ShoppingBag, Briefcase, Zap, Smartphone, Layout as LayoutIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: 'Business Websites',
      description: 'Professional, high-converting websites designed to establish credibility and grow your business online.',
      icon: <Briefcase size={24} />,
      link: '/services'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Scalable online stores with seamless checkout experiences that drive sales and customer loyalty.',
      icon: <ShoppingBag size={24} />,
      link: '/services'
    },
    {
      title: 'Portfolio Websites',
      description: 'Stunning showcase platforms for creatives and agencies to display their work in the best light.',
      icon: <LayoutIcon size={24} />,
      link: '/services'
    }
  ];

  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'Web Application',
      image: 'https://picsum.photos/seed/fintech/800/600',
      description: 'A comprehensive financial dashboard for a modern banking startup.',
      link: '/portfolio'
    },
    {
      title: 'Luxury Real Estate',
      category: 'Business Website',
      image: 'https://picsum.photos/seed/realestate/800/600',
      description: 'High-end property showcase platform with virtual tours.',
      link: '/portfolio'
    },
    {
      title: 'EcoStore',
      category: 'E-commerce',
      image: 'https://picsum.photos/seed/ecostore/800/600',
      description: 'Sustainable product marketplace with custom filtering system.',
      link: '/portfolio'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-white to-white opacity-70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold mb-6 tracking-wide">
              MODERN DIGITAL AGENCY
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-text mb-8 tracking-tight leading-tight">
              Building digital products <br className="hidden md:block" />
              that <span className="text-brand-accent">matter</span>.
            </h1>
            <p className="text-xl text-brand-text-dark mb-10 max-w-2xl mx-auto leading-relaxed">
              We craft professional websites and digital experiences for ambitious businesses.
              Clean design, modern technology, and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-brand-accent text-[#0A192F] rounded-full font-medium hover:bg-brand-bg-light transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Our Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-brand-bg-light text-brand-text border border-brand-text-dark/20 rounded-full font-medium hover:bg-brand-bg-light/70 transition-colors shadow-sm hover:shadow-md"
              >
                Get a Website
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-4">Our Expertise</h2>
            <p className="text-lg text-brand-text-dark max-w-2xl mx-auto">
              We specialize in building high-quality digital solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-4">Selected Work</h2>
              <p className="text-lg text-brand-text-dark max-w-xl">
                A showcase of our recent projects and digital transformations.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="hidden md:flex items-center text-brand-accent font-medium hover:text-brand-accent-hover transition-colors group mt-4 md:mt-0"
            >
              View all projects <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioCard {...project} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-brand-accent font-medium hover:text-brand-accent-hover transition-colors"
            >
              View all projects <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-6">
                Why partner with Wesley Consults?
              </h2>
              <p className="text-lg text-brand-text-dark mb-8 leading-relaxed">
                We don't just build websites; we build digital assets that drive growth. Our approach combines aesthetic excellence with technical robustness.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Modern Design', desc: 'Clean, aesthetic interfaces that users love.' },
                  { title: 'Fast Performance', desc: 'Optimized for speed and SEO rankings.' },
                  { title: 'Mobile Responsive', desc: 'Perfect experience on every device.' },
                  { title: 'Scalable Architecture', desc: 'Built to grow with your business.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mt-1 mr-4 text-green-500">
                      <Zap size={20} fill="currentColor" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-text">{item.title}</h4>
                      <p className="text-brand-text-dark text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gray-200 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
              <img
                src="https://picsum.photos/seed/workspace/800/600"
                alt="Modern workspace"
                className="rounded-3xl shadow-xl w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future AI Section */}
      <section className="py-20 bg-brand-accent text-[#0A192F] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-900/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-900/50 border border-gray-700 text-gray-300 text-xs font-semibold mb-6 tracking-wide uppercase">
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            The Future is Intelligent
          </h2>
          <p className="text-xl text-brand-text-dark mb-10 max-w-2xl mx-auto">
            We are developing private AI solutions and consulting services to help businesses leverage the power of artificial intelligence securely and effectively.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 border border-brand-text-dark/30 rounded-full text-brand-text-dark text-sm">
            <Code className="mr-2 h-4 w-4" />
            <span>AI Implementation & Consulting Services</span>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
