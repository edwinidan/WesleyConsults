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
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(216,207,194,0.42),transparent_54%),linear-gradient(180deg,rgba(255,255,255,0.18),transparent)]" />
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
