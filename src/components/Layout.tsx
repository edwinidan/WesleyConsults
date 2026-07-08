import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site-shell flex min-h-screen flex-col">
      <Navbar />
      <motion.main
        animate={{ opacity: 1 }}
        className="relative flex-grow pt-20"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
