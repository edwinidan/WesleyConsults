import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CaseStudy } from '../content/siteContent';

interface PortfolioCardProps {
  study: CaseStudy;
  featured?: boolean;
}

export default function PortfolioCard({ study, featured = false }: PortfolioCardProps) {
  return (
    <Link
      className={`group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-mint/40 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/70 ${featured ? 'lg:min-h-[34rem]' : ''}`}
      to={study.href}
    >
      <div
        className={`relative overflow-hidden border-b border-white/10 ${featured ? 'min-h-[18rem] md:min-h-[22rem]' : 'min-h-[14rem]'}`}
        style={{ backgroundImage: study.gradient }}
      >
        <div className="ambient-grid absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_20%),linear-gradient(180deg,transparent,rgba(5,8,13,0.65))]" />
        <div className="absolute left-6 top-6 rounded-full border border-white/[0.14] bg-white/[0.08] px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/75">
          {study.category}
        </div>
        <div className="absolute bottom-6 left-6 space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-mint/[0.8]">{study.client}</p>
          <h3 className={`${featured ? 'text-4xl md:text-5xl' : 'text-2xl'} max-w-md font-semibold tracking-[-0.04em] text-white`}>
            {study.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-7">
        <div className="space-y-4">
          <p className="text-sm leading-6 text-mist">{study.summary}</p>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                className="rounded-full border border-white/10 bg-night-soft/[0.8] px-3 py-1 text-xs uppercase tracking-[0.22em] text-mist"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="max-w-sm text-sm text-white/80">{study.impact}</p>
          <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-mint">
            View case study <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
