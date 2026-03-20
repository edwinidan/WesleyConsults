interface TrustedByRailProps {
  items: string[];
}

export default function TrustedByRail({ items }: TrustedByRailProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-5 backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="eyebrow">Trusted by ambitious teams</span>
        <span className="hidden text-xs uppercase tracking-[0.28em] text-mist/60 md:block">
          Placeholder client list
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm font-medium text-white/80 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div
            key={item}
            className="flex min-h-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-night-soft/[0.7] px-4 text-center tracking-[0.18em] text-mist"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
