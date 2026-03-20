import { useReducedMotion } from 'motion/react';

interface AmbientHeroMediaProps {
  posterSrc?: string;
  videoSrc?: string;
}

export default function AmbientHeroMedia({ posterSrc, videoSrc }: AmbientHeroMediaProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-panel/55">
      {videoSrc && !reduceMotion ? (
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover opacity-20"
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
          className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-screen"
          src={posterSrc}
        />
      ) : null}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,186,0.24),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(102,240,255,0.14),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_26%,rgba(7,14,24,0.78)_75%)]" />
      <div className="ambient-grid absolute inset-0 opacity-70" />
      <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-mint/[0.1] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night to-transparent" />
    </div>
  );
}
