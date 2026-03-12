import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-accent text-[#0A192F] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display font-bold text-2xl text-brand-text tracking-tight">
                Wesley<span className="text-gray-500">Consults</span>
              </span>
            </Link>
            <p className="text-brand-text-dark mb-6 leading-relaxed">
              Building professional digital experiences for ambitious businesses. We combine modern design with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-text-dark hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-brand-text-dark hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-brand-text-dark hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-brand-text-dark hover:text-gray-400 transition-colors">Business Websites</Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-text-dark hover:text-gray-400 transition-colors">E-commerce Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-text-dark hover:text-gray-400 transition-colors">Portfolio Sites</Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-text-dark hover:text-gray-400 transition-colors">AI Consulting</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-brand-text-dark hover:text-gray-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-brand-text-dark hover:text-gray-400 transition-colors">Our Work</Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-text-dark hover:text-gray-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-text-dark hover:text-gray-400 transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Let's Talk</h3>
            <p className="text-brand-text-dark mb-4">Ready to start your next project?</p>
            <Link
              to="/contact"
              className="inline-flex items-center text-gray-400 font-medium hover:text-gray-300 transition-colors group"
            >
              Get in touch <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="mt-6 flex items-center text-brand-text-dark">
              <Mail size={16} className="mr-2" />
              <span>hello@wesleyconsults.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-text-dark/40 pt-8 flex flex-col md:flex-row justify-between items-center text-brand-text-dark text-sm">
          <p>&copy; {new Date().getFullYear()} Wesley Consults. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
