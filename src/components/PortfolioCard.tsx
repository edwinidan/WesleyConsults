import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CaseStudy } from '../content/siteContent';
import { caseStudySurfaceStyles } from '../content/visualVariants';

interface PortfolioCardProps {
  study: CaseStudy;
  featured?: boolean;
}

export default function PortfolioCard({ study, featured = false }: PortfolioCardProps) {
  const surfaceStyle = caseStudySurfaceStyles[study.surfaceStyle];
  const divider = study.surfaceStyle === 'ink-feature' ? 'border-white/10' : study.surfaceStyle === 'green-feature' ? 'border-[#5a9b5a]/18' : 'border-ink/10';

  return (
    <Link
      className={`group flex h-full flex-col overflow-hidden rounded-[1.8rem] border transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/18 ${surfaceStyle.card} ${featured ? 'lg:min-h-[34rem]' : ''}`}
      to={study.href}
    >
      <div
        className={`relative overflow-hidden border-b ${divider} ${featured ? 'min-h-[18rem] md:min-h-[22rem]' : 'min-h-[14rem]'}`}
        style={{ backgroundImage: study.image ? undefined : surfaceStyle.hero }}
      >
        {study.image && (
          <img
            alt={study.title}
            className={`absolute inset-0 h-full w-full ${study.imageContain ? 'object-contain p-8' : 'object-cover object-top'}`}
            src={study.image}
          />
        )}
        <div className={`absolute inset-0 ${surfaceStyle.mesh}`} style={{ opacity: study.image ? 0.55 : 1 }} />
        <div className="ambient-grid absolute inset-0 opacity-35" />
        <div className={`absolute inset-0 ${surfaceStyle.glaze}`} />
        <div className={`absolute left-6 top-6 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.24em] ${surfaceStyle.category}`}>
          {study.category}
        </div>
        <div className="absolute bottom-6 left-6 space-y-2">
          <p className={`text-xs uppercase tracking-[0.28em] ${surfaceStyle.client}`}>{study.client}</p>
          <h3 className={`${featured ? 'text-4xl md:text-5xl' : 'text-2xl'} max-w-md font-semibold tracking-[-0.04em] ${surfaceStyle.title}`}>
            {study.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-7">
        <div className="space-y-4">
          <p className={`text-sm leading-6 ${surfaceStyle.summary}`}>{study.summary}</p>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.22em] ${surfaceStyle.tag}`}
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={`flex items-center justify-between gap-4 border-t pt-5 ${divider}`}>
          <p className={`max-w-sm text-sm ${surfaceStyle.impact}`}>{study.impact}</p>
          <span className={`inline-flex shrink-0 items-center gap-2 text-sm font-medium ${surfaceStyle.action}`}>
            View case study <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
