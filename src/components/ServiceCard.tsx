import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ServiceItem } from '../content/siteContent';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      className="group surface-card flex h-full flex-col justify-between transition duration-300 hover:-translate-y-1 hover:border-mint/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/70"
      to={`/services#${service.id}`}
    >
      <div className="space-y-5">
        <div
          className="h-14 w-14 rounded-2xl border border-white/10"
          style={{
            background: `linear-gradient(135deg, ${service.accent}22, rgba(255,255,255,0.04))`,
          }}
        />
        <div className="space-y-3">
          <p className="eyebrow">{service.shortTitle}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
            {service.title}
          </h3>
          <p className="text-sm leading-6 text-mist">{service.summary}</p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-sm font-medium text-white/80">{service.timeline}</span>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-mint">
          Explore service <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
