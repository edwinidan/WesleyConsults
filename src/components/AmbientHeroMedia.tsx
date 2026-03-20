import { useReducedMotion } from 'motion/react';

interface AmbientHeroMediaProps {
  posterSrc?: string;
  videoSrc?: string;
}

export default function AmbientHeroMedia({ posterSrc, videoSrc }: AmbientHeroMediaProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem] border border-ink/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.5),rgba(239,233,221,0.82)_56%,rgba(216,207,194,0.88))] shadow-[0_28px_90px_rgba(17,17,17,0.08)]">
      {videoSrc && !reduceMotion ? (
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
          loop
          muted
          playsInline
          poster={posterSrc}
        >
          <source src={videoSrc} />
        </video>
      ) : null}

      {posterSrc ? (
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-multiply"
          src={posterSrc}
        />
      ) : null}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.56),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(216,207,194,0.54),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.14),transparent_34%,rgba(17,17,17,0.12)_88%)]" />
      <div className="ambient-grid absolute inset-0 opacity-45" />
      <div className="absolute -left-20 top-12 h-64 w-64 rounded-full bg-white/55 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-surface/55 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas via-canvas/72 to-transparent" />
    </div>
  );
}
