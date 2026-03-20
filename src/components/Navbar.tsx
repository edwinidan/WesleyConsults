import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navGroups, navLinks } from '../content/siteContent';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(navGroups[0]?.key ?? null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenGroup(null);
  }, [location]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? 'bg-canvas/78 backdrop-blur-xl' : 'bg-transparent'}`}
    >
      <div className="shell-container">
        <nav
          aria-label="Main navigation"
          className={`mt-4 rounded-full border px-4 transition duration-300 md:px-6 ${scrolled ? 'border-ink/10 bg-white/78 shadow-[0_18px_60px_rgba(17,17,17,0.1)]' : 'border-ink/10 bg-white/34 shadow-[0_10px_34px_rgba(17,17,17,0.06)]'}`}
        >
          <div className="flex min-h-16 items-center justify-between gap-6">
            <Link className="flex items-center gap-3" to="/">
              <span className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold tracking-[0.16em] transition duration-300 ${scrolled ? 'border-ink/12 bg-ink text-canvas' : 'border-ink/12 bg-canvas text-ink'}`}>
                WC
              </span>
              <div className="leading-tight">
                <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-ink">
                  Wesley Consults
                </span>
                <span className="hidden text-xs text-muted md:block">
                  Strategic websites and digital experiences
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-2 lg:flex">
              {navGroups.map((group) => (
                <div
                  className="relative"
                  key={group.key}
                  onBlurCapture={(event) => {
                    const nextTarget = event.relatedTarget as Node | null;
                    if (!event.currentTarget.contains(nextTarget)) {
                      setOpenGroup((value) => (value === group.key ? null : value));
                    }
                  }}
                  onMouseEnter={() => setOpenGroup(group.key)}
                  onMouseLeave={() => setOpenGroup((value) => (value === group.key ? null : value))}
                >
                  <button
                    aria-expanded={openGroup === group.key}
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-ink/72 transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/18"
                    onClick={() => setOpenGroup((value) => (value === group.key ? null : group.key))}
                    onFocus={() => setOpenGroup(group.key)}
                    type="button"
                  >
                    {group.label}
                    <ChevronDown className={`h-4 w-4 transition ${openGroup === group.key ? 'rotate-180 text-ink' : 'text-muted'}`} />
                  </button>

                  <AnimatePresence>
                    {openGroup === group.key ? (
                      <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 top-full mt-4 w-[24rem] rounded-[1.8rem] border border-ink/10 bg-canvas p-5 shadow-[0_24px_90px_rgba(17,17,17,0.12)]"
                        exit={{ opacity: 0, y: 8 }}
                        initial={{ opacity: 0, y: 8 }}
                      >
                        <div className="mb-4 space-y-2 border-b border-ink/10 pb-4">
                          <p className="eyebrow">{group.label}</p>
                          <p className="text-sm leading-6 text-muted">{group.description}</p>
                        </div>
                        <div className="space-y-2">
                          {group.items.map((item) => (
                            <Link
                              className="block rounded-2xl border border-transparent px-4 py-3 transition hover:border-ink/10 hover:bg-canvas-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/18"
                              key={item.href}
                              to={item.href}
                            >
                              <span className="block text-sm font-medium text-ink">{item.label}</span>
                              <span className="mt-1 block text-sm leading-6 text-muted">{item.description}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ))}

              {navLinks.map((link) => {
                const active = location.pathname === link.href || (link.href === '/work' && location.pathname === '/portfolio');

                return (
                  <Link
                    className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/18 ${active ? 'text-ink' : 'text-ink/72 hover:text-ink'}`}
                    key={link.href}
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <Link className="button-primary" to="/contact">
                Start a Project
              </Link>
            </div>

            <button
              aria-expanded={isOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/52 text-ink lg:hidden"
              onClick={() => setIsOpen((value) => !value)}
              type="button"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="shell-container lg:hidden"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: -10 }}
          >
            <div className="mt-3 rounded-[2rem] border border-ink/12 bg-[linear-gradient(145deg,rgba(17,17,17,0.98),rgba(26,26,26,0.95)_54%,rgba(216,207,194,0.14))] p-5 shadow-[0_20px_80px_rgba(17,17,17,0.18)]">
              <div className="space-y-2 border-b border-white/10 pb-4">
                {navLinks.map((link) => (
                  <Link
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-canvas transition hover:bg-white/6"
                    key={link.href}
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                {navGroups.map((group) => {
                  const isExpanded = mobileGroup === group.key;

                  return (
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/6" key={group.key}>
                      <button
                        aria-expanded={isExpanded}
                        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium text-canvas"
                        onClick={() => setMobileGroup((value) => (value === group.key ? null : group.key))}
                        type="button"
                      >
                        {group.label}
                        <ChevronDown className={`h-4 w-4 text-canvas/68 transition ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded ? (
                          <motion.div
                            animate={{ height: 'auto', opacity: 1 }}
                            className="overflow-hidden"
                            exit={{ height: 0, opacity: 0 }}
                            initial={{ height: 0, opacity: 0 }}
                          >
                            <div className="space-y-2 border-t border-white/10 px-4 py-4">
                              {group.items.map((item) => (
                                <Link
                                  className="block rounded-2xl bg-white/8 px-4 py-3 text-sm text-canvas/70 transition hover:bg-white/12 hover:text-canvas"
                                  key={item.href}
                                  to={item.href}
                                >
                                  <span className="mb-1 block font-medium text-canvas">{item.label}</span>
                                  <span className="block leading-6">{item.description}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <Link className="button-primary-inverse mt-5 flex w-full" to="/contact">
                Start a Project
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
