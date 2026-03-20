import { ArrowUpRight } from 'lucide-react';
import type { ContactMethod } from '../content/siteContent';

interface ContactPanelProps {
  methods: ContactMethod[];
}

export default function ContactPanel({ methods }: ContactPanelProps) {
  return (
    <div className="space-y-4">
      {methods.map((method) =>
        method.href ? (
          <a
            className="surface-card block transition duration-300 hover:border-ink/18 hover:bg-white/58"
            href={method.href}
            key={method.id}
            rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
            target={method.href.startsWith('http') ? '_blank' : undefined}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="eyebrow">{method.label}</p>
                <p className="text-lg font-medium text-ink">{method.value}</p>
                <p className="text-sm leading-6 text-muted">{method.note}</p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 text-ink/72" />
            </div>
          </a>
        ) : (
          <div
            className="surface-card block transition duration-300 hover:border-ink/18 hover:bg-white/58"
            key={method.id}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="eyebrow">{method.label}</p>
                <p className="text-lg font-medium text-ink">{method.value}</p>
                <p className="text-sm leading-6 text-muted">{method.note}</p>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
