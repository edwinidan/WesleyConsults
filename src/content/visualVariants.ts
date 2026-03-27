import type { CaseStudySurfaceStyle, ServiceTone } from './siteContent';

export const serviceToneStyles: Record<
  ServiceTone,
  {
    icon: string;
    panel: string;
    badge: string;
    body: string;
    link: string;
  }
> = {
  charcoal: {
    icon: 'border-ink/10 bg-ink text-canvas shadow-[0_18px_36px_rgba(17,17,17,0.16)]',
    panel:
      'border-ink/10 bg-[linear-gradient(145deg,rgba(17,17,17,0.94),rgba(26,26,26,0.88)_54%,rgba(216,207,194,0.18))] text-white shadow-[0_28px_64px_rgba(17,17,17,0.22)]',
    badge: 'border-white/12 bg-white/10 text-white/80',
    body: 'text-white/82',
    link: 'text-ink',
  },
  taupe: {
    icon: 'border-ink/10 bg-surface text-ink shadow-[0_14px_30px_rgba(17,17,17,0.08)]',
    panel:
      'border-ink/10 bg-[linear-gradient(145deg,rgba(216,207,194,0.95),rgba(239,233,221,0.95)_56%,rgba(17,17,17,0.08))] text-ink shadow-[0_22px_50px_rgba(17,17,17,0.1)]',
    badge: 'border-ink/10 bg-white/45 text-ink/68',
    body: 'text-ink/78',
    link: 'text-ink',
  },
  cream: {
    icon: 'border-ink/10 bg-canvas-alt text-ink shadow-[0_14px_28px_rgba(17,17,17,0.07)]',
    panel:
      'border-ink/10 bg-[linear-gradient(145deg,rgba(245,241,232,0.98),rgba(239,233,221,0.98)_62%,rgba(216,207,194,0.55))] text-ink shadow-[0_20px_44px_rgba(17,17,17,0.08)]',
    badge: 'border-ink/10 bg-white/60 text-ink/62',
    body: 'text-ink/72',
    link: 'text-ink-soft',
  },
};

export const caseStudySurfaceStyles: Record<
  CaseStudySurfaceStyle,
  {
    card: string;
    hero: string;
    mesh: string;
    glaze: string;
    category: string;
    client: string;
    title: string;
    summary: string;
    tag: string;
    impact: string;
    action: string;
  }
> = {
  'ink-feature': {
    card:
      'border-ink/12 bg-ink text-white shadow-[0_32px_90px_rgba(17,17,17,0.2)] hover:border-ink/28 hover:shadow-[0_36px_100px_rgba(17,17,17,0.24)]',
    hero:
      'linear-gradient(140deg, rgba(17,17,17,0.98), rgba(26,26,26,0.92) 48%, rgba(216,207,194,0.22))',
    mesh:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_24%),radial-gradient(circle_at_20%_75%,rgba(216,207,194,0.18),transparent_30%)]',
    glaze: 'bg-[linear-gradient(180deg,transparent,rgba(17,17,17,0.7))]',
    category: 'border-white/14 bg-white/8 text-white/72',
    client: 'text-white/64',
    title: 'text-white',
    summary: 'text-white/72',
    tag: 'border-white/12 bg-white/8 text-white/68',
    impact: 'text-white/78',
    action: 'text-white',
  },
  'taupe-feature': {
    card:
      'border-ink/10 bg-canvas-alt text-ink shadow-[0_26px_70px_rgba(17,17,17,0.1)] hover:border-ink/22 hover:bg-[#f1ebdf] hover:shadow-[0_30px_78px_rgba(17,17,17,0.12)]',
    hero:
      'linear-gradient(140deg, rgba(216,207,194,0.92), rgba(239,233,221,0.95) 50%, rgba(17,17,17,0.14))',
    mesh:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.42),transparent_20%),radial-gradient(circle_at_20%_75%,rgba(17,17,17,0.08),transparent_28%)]',
    glaze: 'bg-[linear-gradient(180deg,transparent,rgba(245,241,232,0.18))]',
    category: 'border-ink/10 bg-white/55 text-ink/62',
    client: 'text-ink/54',
    title: 'text-ink',
    summary: 'text-ink/72',
    tag: 'border-ink/10 bg-white/55 text-ink/62',
    impact: 'text-ink/76',
    action: 'text-ink',
  },
  'green-feature': {
    card:
      'border-[#5a9b5a]/20 bg-[#eef7ee] text-ink shadow-[0_24px_64px_rgba(90,155,90,0.14)] hover:border-[#5a9b5a]/35 hover:bg-[#e4f2e4] hover:shadow-[0_28px_72px_rgba(90,155,90,0.18)]',
    hero:
      'linear-gradient(140deg, rgba(90,155,90,0.95), rgba(70,130,70,0.92) 50%, rgba(45,100,45,0.96))',
    mesh:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_24%),radial-gradient(circle_at_20%_75%,rgba(255,255,255,0.1),transparent_30%)]',
    glaze: 'bg-[linear-gradient(180deg,transparent,rgba(35,85,35,0.55))]',
    category: 'border-white/18 bg-white/12 text-white/80',
    client: 'text-white/68',
    title: 'text-white',
    summary: 'text-ink/72',
    tag: 'border-[#5a9b5a]/22 bg-[#5a9b5a]/10 text-ink/70',
    impact: 'text-ink/75',
    action: 'text-ink-soft',
  },
  'wine-feature': {
    card:
      'border-[#7B1E2E]/20 bg-[#fdf4f5] text-ink shadow-[0_24px_64px_rgba(123,30,46,0.14)] hover:border-[#7B1E2E]/35 hover:bg-[#fae9eb] hover:shadow-[0_28px_72px_rgba(123,30,46,0.18)]',
    hero:
      'linear-gradient(140deg, rgba(123,30,46,0.95), rgba(96,20,34,0.92) 50%, rgba(65,10,20,0.96))',
    mesh:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_24%),radial-gradient(circle_at_20%_75%,rgba(255,255,255,0.1),transparent_30%)]',
    glaze: 'bg-[linear-gradient(180deg,transparent,rgba(65,10,20,0.55))]',
    category: 'border-white/18 bg-white/12 text-white/80',
    client: 'text-white/68',
    title: 'text-white',
    summary: 'text-ink/72',
    tag: 'border-[#7B1E2E]/22 bg-[#7B1E2E]/10 text-ink/70',
    impact: 'text-ink/75',
    action: 'text-ink-soft',
  },
  'cream-feature': {
    card:
      'border-ink/10 bg-canvas text-ink shadow-[0_24px_64px_rgba(17,17,17,0.08)] hover:border-ink/20 hover:bg-[#f8f4ec] hover:shadow-[0_28px_72px_rgba(17,17,17,0.1)]',
    hero:
      'linear-gradient(140deg, rgba(245,241,232,0.98), rgba(239,233,221,0.96) 52%, rgba(216,207,194,0.72))',
    mesh:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.6),transparent_22%),radial-gradient(circle_at_20%_78%,rgba(140,140,140,0.12),transparent_28%)]',
    glaze: 'bg-[linear-gradient(180deg,transparent,rgba(239,233,221,0.3))]',
    category: 'border-ink/10 bg-white/70 text-ink/58',
    client: 'text-ink/52',
    title: 'text-ink',
    summary: 'text-ink/68',
    tag: 'border-ink/10 bg-canvas-alt text-ink/58',
    impact: 'text-ink/72',
    action: 'text-ink-soft',
  },
};
