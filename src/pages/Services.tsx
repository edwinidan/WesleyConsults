import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { motion } from 'motion/react';
import { Briefcase, ShoppingBag, Layout as LayoutIcon, Cpu, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'business',
      title: 'Business Websites',
      icon: <Briefcase className="w-8 h-8 text-brand-accent" />,
      description: 'Establish a strong digital presence with a professional business website. We focus on clarity, credibility, and conversion.',
      features: ['Custom Design', 'SEO Optimization', 'Content Management System', 'Analytics Integration', 'Fast Loading Speed'],
      target: 'Small to medium businesses looking to grow online.'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      icon: <ShoppingBag className="w-8 h-8 text-brand-accent" />,
      description: 'Sell your products online with a robust, secure, and user-friendly e-commerce platform designed to maximize sales.',
      features: ['Product Management', 'Secure Payments', 'Inventory Tracking', 'Customer Accounts', 'Mobile Optimized Checkout'],
      target: 'Retailers and brands wanting to sell directly to consumers.'
    },
    {
      id: 'portfolio',
      title: 'Portfolio Websites',
      icon: <LayoutIcon className="w-8 h-8 text-brand-accent" />,
      description: 'Showcase your work with a stunning portfolio that highlights your creativity and expertise.',
      features: ['Gallery Layouts', 'Project Case Studies', 'High-Quality Image Support', 'Social Media Integration', 'Contact Forms'],
      target: 'Designers, photographers, agencies, and creative professionals.'
    },
    {
      id: 'ai',
      title: 'AI Consulting (Coming Soon)',
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      description: 'Future-proof your business with our upcoming AI implementation and consulting services.',
      features: ['Process Automation', 'Data Analysis', 'Custom AI Chatbots', 'Workflow Optimization', 'AI Strategy'],
      target: 'Forward-thinking companies ready to adopt AI technology.',
      isNew: true
    }
  ];

  return (
    <Layout>
      <div className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-text-dark max-w-3xl mx-auto"
          >
            Comprehensive digital solutions designed to help your business thrive in the modern economy.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="bg-brand-bg-light p-8 rounded-3xl shadow-lg border border-brand-text-dark/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-gray-200 transition-colors duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 text-brand-accent">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-brand-text mb-4 flex items-center">
                      {service.title}
                      {service.isNew && (
                        <span className="ml-3 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full uppercase tracking-wide">
                          Future
                        </span>
                      )}
                    </h3>
                    <p className="text-brand-text-dark text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <h4 className="font-bold text-brand-text text-sm uppercase tracking-wider">Key Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-brand-bg p-4 rounded-xl border border-brand-text-dark/10">
                      <span className="block text-xs font-bold text-brand-text-dark uppercase mb-1">Perfect For</span>
                      <p className="text-brand-text font-medium">{service.target}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:px-8">
                <img
                  src={`https://picsum.photos/seed/${service.id}/800/600`}
                  alt={service.title}
                  className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection />
    </Layout>
  );
}
