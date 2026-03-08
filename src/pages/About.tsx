import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { motion } from 'motion/react';
import { Target, Users, Lightbulb, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">About Us</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                We are Wesley Consults. <br />
                <span className="text-gray-500">Builders of the digital future.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between complex technology and business needs, Wesley Consults is a modern technology agency dedicated to crafting superior digital experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that every business deserves a world-class digital presence. Whether it's a high-performance website or a future-ready AI solution, we bring technical expertise and creative innovation to every project.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-red-100 rounded-3xl transform rotate-2"></div>
              <img
                src="https://picsum.photos/seed/teamwork/800/600"
                alt="Team working together"
                className="relative rounded-2xl shadow-xl w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-8 h-8 text-primary" />, title: 'Excellence', desc: 'We never settle for "good enough". We aim for perfection in every pixel and line of code.' },
              { icon: <Users className="w-8 h-8 text-primary" />, title: 'Collaboration', desc: 'We work with you, not just for you. Your success is our success.' },
              { icon: <Lightbulb className="w-8 h-8 text-primary" />, title: 'Innovation', desc: 'We stay ahead of the curve, embracing new technologies like AI to give you an edge.' },
              { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: 'Integrity', desc: 'Transparent communication and honest advice. We build trust through action.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Our Vision for AI</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            "We see a future where Artificial Intelligence isn't just a buzzword, but a practical tool that empowers businesses to operate smarter and faster. Wesley Consults is positioning itself at the forefront of this revolution, preparing to offer bespoke AI implementation strategies that respect privacy while maximizing efficiency."
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <img src="https://picsum.photos/seed/founder/100/100" alt="Founder" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">Wesley Founder</div>
              <div className="text-sm text-primary">CEO & Lead Architect</div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </Layout>
  );
}
