import { ArrowUpRight, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { MobileApp } from '../content/siteContent';

interface MobileAppTeaserCardProps {
  app: MobileApp;
}

export default function MobileAppTeaserCard({ app }: MobileAppTeaserCardProps) {
  return (
    <Link
      className="group flex h-full flex-col justify-between rounded-[1.25rem] border border-white/12 bg-white/[0.06] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:p-7"
      to="/work#mobile-apps"
    >
      <div>
        <div className="flex items-start justify-between gap-5">
          <img
            alt={`${app.name} app icon`}
            className="h-16 w-16 rounded-2xl border border-white/15 object-cover"
            src={app.image}
          />
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white/55">
            <Smartphone aria-hidden="true" className="h-4 w-4" />
            iOS & Android
          </span>
        </div>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">{app.category}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">{app.name}</h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">{app.description}</p>
      </div>
      <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white">
        View app project
        <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
