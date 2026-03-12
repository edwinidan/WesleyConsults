import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-brand-bg-light p-8 rounded-2xl shadow-sm border border-brand-text-dark/10 hover:shadow-md transition-all duration-300"
    >
      <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 text-brand-text">{title}</h3>
      <p className="text-brand-text-dark mb-6 leading-relaxed">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-brand-accent font-medium hover:text-brand-accent-hover transition-colors group"
      >
        Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
