import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

export default function PortfolioCard({ title, category, image, description, link }: PortfolioCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white font-medium">View Project</span>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{category}</span>
        <h3 className="text-xl font-display font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={link}
          className="text-sm font-medium text-gray-900 underline decoration-gray-300 hover:decoration-primary underline-offset-4 transition-all"
        >
          View Case Study
        </Link>
      </div>
    </motion.div>
  );
}
