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
    icon: 'border-black/5 bg-white text-[#b8963e] shadow-[0_10px_20px_rgba(26,46,90,0.04)]',
    panel:
      'border-black/6 bg-[linear-gradient(145deg,#FFFFFF,#EFF1F5_70%)] text-[#1A2E5A] shadow-[0_20px_40px_rgba(26,46,90,0.05)]',
    badge: 'border-black/8 bg-black/5 text-[#1A2E5A]/70',
    body: 'text-[#475569]',
    link: 'text-[#1A2E5A] hover:text-[#b8963e]',
  },
  taupe: {
    icon: 'border-black/5 bg-white text-[#b8963e] shadow-[0_10px_20px_rgba(26,46,90,0.04)]',
    panel:
      'border-black/6 bg-[linear-gradient(145deg,#FFFFFF,#EFF1F5_70%)] text-[#1A2E5A] shadow-[0_20px_40px_rgba(26,46,90,0.05)]',
    badge: 'border-[#b8963e]/20 bg-[#b8963e]/10 text-[#b8963e]',
    body: 'text-[#475569]',
    link: 'text-[#1A2E5A] hover:text-[#b8963e]',
  },
  cream: {
    icon: 'border-black/5 bg-[#EFF1F5] text-[#b8963e] shadow-[0_10px_20px_rgba(26,46,90,0.04)]',
    panel:
      'border-black/6 bg-[linear-gradient(145deg,#FFFFFF,#EFF1F5_70%)] text-[#1A2E5A] shadow-[0_20px_40px_rgba(26,46,90,0.05)]',
    badge: 'border-black/8 bg-black/5 text-[#1A2E5A]/70',
    body: 'text-[#475569]',
    link: 'text-[#1A2E5A] hover:text-[#b8963e]',
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
      'border-black/5 bg-white text-[#1A2E5A] shadow-[0_16px_40px_rgba(26,46,90,0.04)] hover:border-[#F5A623]/30 hover:bg-white hover:shadow-[0_24px_50px_rgba(26,46,90,0.08)]',
    hero: '#F8F9FC',
    mesh: '',
    glaze: '',
    category: 'border-[#E2E8F0] bg-[#FFF0D4] text-[#1A2E5A]',
    client: 'text-[#64748B]',
    title: 'text-[#1A2E5A]',
    summary: 'text-[#2C3E50]',
    tag: 'border-[#E2E8F0] bg-[#F8F9FC] text-[#2C3E50]',
    impact: 'text-[#F5A623]',
    action: 'text-[#1A2E5A] group-hover:text-[#F5A623]',
  },
  'taupe-feature': {
    card:
      'border-black/5 bg-white text-[#1A2E5A] shadow-[0_16px_40px_rgba(26,46,90,0.04)] hover:border-[#F5A623]/30 hover:bg-white hover:shadow-[0_24px_50px_rgba(26,46,90,0.08)]',
    hero: '#FFFFFF',
    mesh: '',
    glaze: '',
    category: 'border-[#E2E8F0] bg-[#FFF0D4] text-[#1A2E5A]',
    client: 'text-[#64748B]',
    title: 'text-[#1A2E5A]',
    summary: 'text-[#2C3E50]',
    tag: 'border-[#E2E8F0] bg-[#F8F9FC] text-[#2C3E50]',
    impact: 'text-[#F5A623]',
    action: 'text-[#1A2E5A] group-hover:text-[#F5A623]',
  },
  'green-feature': {
    card:
      'border-black/5 bg-white text-[#1A2E5A] shadow-[0_16px_40px_rgba(26,46,90,0.04)] hover:border-[#F5A623]/30 hover:bg-white hover:shadow-[0_24px_50px_rgba(26,46,90,0.08)]',
    hero: '#F0F7F0',
    mesh: '',
    glaze: '',
    category: 'border-[#E2E8F0] bg-[#FFF0D4] text-[#1A2E5A]',
    client: 'text-[#64748B]',
    title: 'text-[#1A2E5A]',
    summary: 'text-[#2C3E50]',
    tag: 'border-[#E2E8F0] bg-[#F8F9FC] text-[#2C3E50]',
    impact: 'text-[#F5A623]',
    action: 'text-[#1A2E5A] group-hover:text-[#F5A623]',
  },
  'wine-feature': {
    card:
      'border-black/5 bg-white text-[#1A2E5A] shadow-[0_16px_40px_rgba(26,46,90,0.04)] hover:border-[#F5A623]/30 hover:bg-white hover:shadow-[0_24px_50px_rgba(26,46,90,0.08)]',
    hero: '#FDF4F5',
    mesh: '',
    glaze: '',
    category: 'border-[#E2E8F0] bg-[#FFF0D4] text-[#1A2E5A]',
    client: 'text-[#64748B]',
    title: 'text-[#1A2E5A]',
    summary: 'text-[#2C3E50]',
    tag: 'border-[#E2E8F0] bg-[#F8F9FC] text-[#2C3E50]',
    impact: 'text-[#F5A623]',
    action: 'text-[#1A2E5A] group-hover:text-[#F5A623]',
  },
  'cream-feature': {
    card:
      'border-black/5 bg-white text-[#1A2E5A] shadow-[0_16px_40px_rgba(26,46,90,0.04)] hover:border-[#F5A623]/30 hover:bg-white hover:shadow-[0_24px_50px_rgba(26,46,90,0.08)]',
    hero: '#FFFFFF',
    mesh: '',
    glaze: '',
    category: 'border-[#E2E8F0] bg-[#FFF0D4] text-[#1A2E5A]',
    client: 'text-[#64748B]',
    title: 'text-[#1A2E5A]',
    summary: 'text-[#2C3E50]',
    tag: 'border-[#E2E8F0] bg-[#F8F9FC] text-[#2C3E50]',
    impact: 'text-[#F5A623]',
    action: 'text-[#1A2E5A] group-hover:text-[#F5A623]',
  },
};
