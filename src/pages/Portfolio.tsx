import Layout from '../components/Layout';
import PortfolioCard from '../components/PortfolioCard';
import CTASection from '../components/CTASection';
import { motion } from 'motion/react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'Web Application',
      image: 'https://picsum.photos/seed/fintech/800/600',
      description: 'A comprehensive financial dashboard for a modern banking startup, featuring real-time data visualization and secure transaction management.',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Luxury Real Estate',
      category: 'Business Website',
      image: 'https://picsum.photos/seed/realestate/800/600',
      description: 'High-end property showcase platform with virtual tours, advanced search filters, and lead generation tools for agents.',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'EcoStore',
      category: 'E-commerce',
      image: 'https://picsum.photos/seed/ecostore/800/600',
      description: 'Sustainable product marketplace with custom filtering system, eco-impact calculator, and seamless checkout experience.',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'HealthTrack App',
      category: 'Mobile & Web',
      image: 'https://picsum.photos/seed/health/800/600',
      description: 'Patient management system for private clinics, streamlining appointments and medical records.',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'Creative Agency Portfolio',
      category: 'Portfolio',
      image: 'https://picsum.photos/seed/agency/800/600',
      description: 'Minimalist portfolio site for a design studio, focusing on large imagery and smooth interactions.',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'TechBlog Platform',
      category: 'Content Platform',
      image: 'https://picsum.photos/seed/blog/800/600',
      description: 'High-performance content management system for a technology news outlet.',
      link: '/portfolio'
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We take pride in delivering exceptional digital experiences. Explore our recent projects.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PortfolioCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection />
    </Layout>
  );
}
