import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ServiceItem } from '../content/siteContent';
import { serviceToneStyles } from '../content/visualVariants';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const toneStyle = serviceToneStyles[service.tone];

  return (
    <Link
      className="group surface-card flex h-full flex-col justify-between transition duration-300 hover:-translate-y-1 hover:border-ink/18 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/18"
      to={`/services#${service.id}`}
    >
      <div className="space-y-5">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${toneStyle.icon}`}>
          <span className="h-2.5 w-2.5 rounded-full bg-current" />
        </div>
        <div className="space-y-3">
          <p className="eyebrow">{service.shortTitle}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
            {service.title}
          </h3>
          <p className="text-sm leading-6 text-muted">{service.summary}</p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-5">
        <span className="text-sm font-medium text-muted">{service.timeline}</span>
        <span className={`inline-flex items-center gap-2 text-sm font-medium ${toneStyle.link}`}>
          Explore service <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
