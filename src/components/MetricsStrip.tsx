import { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { StatMetric } from '../content/siteContent';

interface MetricsStripProps {
  metrics: StatMetric[];
}

function CountUpValue({ metric, active }: { metric: StatMetric; active: boolean }) {
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(() => metric.value);

  useEffect(() => {
    if (!active) {
      return;
    }

    if (reduceMotion) {
      setDisplayValue(metric.value);
      return;
    }

    const duration = 1100;
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(metric.value * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [active, metric.value, reduceMotion]);

  const formatted = useMemo(() => {
    const decimals = metric.decimals ?? 0;
    const value = active ? displayValue : metric.value;
    const fixed = value.toFixed(decimals);
    return `${metric.prefix ?? ''}${fixed}${metric.suffix ?? ''}`;
  }, [active, displayValue, metric.decimals, metric.prefix, metric.suffix, metric.value]);

  return <span>{formatted}</span>;
}

export default function MetricsStrip({ metrics }: MetricsStripProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
    >
      {metrics.map((metric) => {
        const content = (
          <div className="surface-card h-full min-h-56 space-y-5 transition duration-300 group-hover:-translate-y-1 group-hover:border-ink/18 group-hover:bg-white/60">
            <div className="text-4xl font-semibold tracking-[-0.05em] text-ink md:text-5xl">
              <CountUpValue active={active} metric={metric} />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-ink">{metric.label}</h3>
              <p className="text-sm leading-6 text-muted">{metric.detail}</p>
            </div>
            {metric.href ? (
              <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
                View related work <ArrowUpRight className="h-4 w-4" />
              </span>
            ) : null}
          </div>
        );

        return metric.href ? (
          <Link key={metric.id} className="group block" to={metric.href}>
            {content}
          </Link>
        ) : (
          <div key={metric.id}>{content}</div>
        );
      })}
    </div>
  );
}
