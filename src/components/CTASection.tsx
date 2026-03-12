import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-6">
            Ready to elevate your digital presence?
          </h2>
          <p className="text-xl text-brand-text-dark mb-10 max-w-2xl mx-auto">
            Let's build something amazing together. Whether you need a new website or a complete digital transformation, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-brand-text bg-brand-accent hover:bg-brand-accent-hover transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-gray-700 bg-brand-bg-light border border-brand-text-dark/20 hover:bg-brand-bg-light/70 transition-colors shadow-sm hover:shadow-md"
            >
              View Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
