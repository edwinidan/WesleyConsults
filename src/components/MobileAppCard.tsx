import { Apple, Check, Play } from 'lucide-react';
import type { MobileApp } from '../content/siteContent';

interface MobileAppCardProps {
  app: MobileApp;
}

export default function MobileAppCard({ app }: MobileAppCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.25rem] border border-black/5 bg-white p-6 shadow-[0_16px_45px_rgba(26,46,90,0.06)] md:p-8">
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <img
            alt={`${app.name} app icon`}
            className="h-20 w-20 rounded-[1.15rem] border border-black/8 object-cover md:h-24 md:w-24"
            src={app.image}
          />
          <span className="rounded-full border border-black/8 bg-canvas-alt px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Available now
          </span>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{app.category}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-ink md:text-4xl">{app.name}</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{app.description}</p>
        </div>

        <ul className="mt-7 space-y-3">
          {app.features.map((feature) => (
            <li className="flex items-start gap-3 text-sm leading-6 text-ink/80" key={feature}>
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-canvas-alt text-ink-soft">
                <Check aria-hidden="true" className="h-3 w-3" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2">
          {app.tags.map((tag) => (
            <span
              className="rounded-full border border-black/8 bg-canvas-alt px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-muted"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
          <a
            aria-label={`Download ${app.name} on the Apple App Store`}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#102248] px-4 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1A2E5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102248]/30"
            href={app.appStoreUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Apple aria-hidden="true" className="h-5 w-5" />
            App Store
          </a>
          <a
            aria-label={`Get ${app.name} on Google Play`}
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-canvas-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15"
            href={app.playStoreUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Play aria-hidden="true" className="h-5 w-5 fill-current" />
            Google Play
          </a>
        </div>
      </div>
    </article>
  );
}
