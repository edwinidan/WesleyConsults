import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  contactMethods,
  footerSecondaryLinks,
  sectors,
  services,
} from '../content/siteContent';

export default function Footer() {
  return (
    <footer className="border-t border-ink/12 bg-ink pb-8 pt-16">
      <div className="shell-container">
        <div className="mb-14 grid gap-10 xl:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div className="space-y-6">
            <span className="eyebrow text-canvas/62">Wesley Consults</span>
            <h2 className="max-w-md text-3xl font-semibold tracking-[-0.04em] text-canvas md:text-4xl">
              Premium websites and digital experiences for teams that need sharper momentum.
            </h2>
            <p className="max-w-lg text-sm leading-7 text-canvas/68">
              Strategy-led design and front-end execution for businesses that want their digital presence to feel clearer, faster, and more authoritative.
            </p>
            <Link className="button-primary-inverse" to="/contact">
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-canvas/58">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-canvas/68">
              {services.map((service) => (
                <li key={service.id}>
                  <Link className="transition hover:text-canvas" to={`/services#${service.id}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-canvas/58">
              Sectors
            </h3>
            <ul className="space-y-3 text-sm text-canvas/68">
              {sectors.map((sector) => (
                <li key={sector.id}>
                  <Link className="transition hover:text-canvas" to={`/about#${sector.id}`}>
                    {sector.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-canvas/58">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-canvas/68">
              {contactMethods.map((method) => (
                <li key={method.id}>
                  {method.href ? (
                    <a
                      className="transition hover:text-canvas"
                      href={method.href}
                      rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                    >
                      <span className="mb-1 block text-canvas">{method.label}</span>
                      <span>{method.value}</span>
                    </a>
                  ) : (
                    <>
                      <span className="mb-1 block text-canvas">{method.label}</span>
                      <span>{method.value}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-canvas/62 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Wesley Consults. Built for sharper first impressions.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link className="transition hover:text-canvas" to="/work">
              Work
            </Link>
            <Link className="transition hover:text-canvas" to="/insights">
              Insights
            </Link>
            {footerSecondaryLinks.map((link) => (
              <Link className="transition hover:text-canvas" key={link.label} to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
