import Layout from '../components/Layout';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <Layout>
      <div className="bg-brand-bg min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-6">Get in Touch</h1>
            <p className="text-xl text-brand-text-dark max-w-2xl mx-auto">
              Ready to start your project? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-brand-bg-light p-8 rounded-2xl shadow-sm border border-brand-text-dark/10"
              >
                <h3 className="text-xl font-bold text-brand-text mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-brand-accent mt-1 mr-4" />
                    <div>
                      <p className="font-medium text-brand-text">Email</p>
                      <a href="mailto:hello@wesleyconsults.com" className="text-brand-text-dark hover:text-brand-accent transition-colors">hello@wesleyconsults.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-brand-accent mt-1 mr-4" />
                    <div>
                      <p className="font-medium text-brand-text">WhatsApp</p>
                      <a href="#" className="text-brand-text-dark hover:text-brand-accent transition-colors">+1 (555) 123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-brand-accent mt-1 mr-4" />
                    <div>
                      <p className="font-medium text-brand-text">Location</p>
                      <p className="text-brand-text-dark">San Francisco, CA<br />(Available Globally)</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-brand-accent p-8 rounded-2xl shadow-lg text-brand-text"
              >
                <h3 className="text-xl font-bold mb-4">Looking for a custom quote?</h3>
                <p className="mb-6 text-gray-300">
                  Tell us about your project requirements and we'll get back to you with a detailed proposal within 24 hours.
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-brand-bg-light p-8 md:p-10 rounded-3xl shadow-lg border border-brand-text-dark/10"
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-brand-bg-light"
                    >
                      <option>General Inquiry</option>
                      <option>New Website Project</option>
                      <option>E-commerce Solution</option>
                      <option>AI Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-brand-accent text-[#0A192F] font-bold py-4 rounded-xl hover:bg-brand-accent-hover transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    Send Message <Send size={18} className="ml-2" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
