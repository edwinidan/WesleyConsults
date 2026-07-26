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
      className="group surface-card flex h-full flex-col justify-between transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
      to={`/services#${service.id}`}
    >
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="eyebrow">{service.shortTitle}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
            {service.title}
          </h3>
          <p className="text-sm leading-6 text-muted">{service.summary}</p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-5">
        <span className="text-sm text-muted">{service.timeline}</span>
        <span className={`inline-flex items-center gap-2 text-sm font-medium ${toneStyle.link}`}>
          Explore service <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
