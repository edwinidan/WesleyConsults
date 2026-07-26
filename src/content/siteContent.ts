export interface NavGroupItem {
  label: string;
  description: string;
  href: string;
}

export type ServiceTone = 'charcoal' | 'taupe' | 'cream';
export type CaseStudySurfaceStyle = 'ink-feature' | 'taupe-feature' | 'cream-feature' | 'green-feature' | 'wine-feature';

export interface NavGroup {
  key: string;
  label: string;
  description: string;
  items: NavGroupItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  timeline: string;
  audience: string;
  tone: ServiceTone;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  impact: string;
  href: string;
  tags: string[];
  surfaceStyle: CaseStudySurfaceStyle;
  image?: string;
  imageContain?: boolean;
}

export type MobileAppTheme = 'forest' | 'navy';

export interface MobileApp {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  tags: string[];
  appStoreUrl: string;
  playStoreUrl: string;
  theme: MobileAppTheme;
}

export interface StatMetric {
  id: string;
  label: string;
  detail: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  href?: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  href: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  href?: string;
  note: string;
}

export const brandMarks = [
  'Uncolonized Society',
  'What Is My Temperament',
  'CalendersGH',
  'ARATTC',
  'Adinkra Tiles',
  'UniMate GH',
];

export const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const services: ServiceItem[] = [
  {
    id: 'business-websites',
    title: 'Website Design & Development',
    shortTitle: 'Websites',
    summary: 'Clear, responsive websites that help organisations explain their work, build trust, and turn interest into action.',
    description:
      'We plan, design, and build websites around what visitors need to understand and do. That can include a focused business site, a nonprofit with a large body of work, an events venue, or an online shop.',
    outcomes: ['A clearer public presence', 'Simple paths to enquiries or bookings', 'Fast, responsive pages', 'Content that is easier to understand'],
    deliverables: ['Content structure', 'Custom interface design', 'Responsive development', 'Search-ready foundations', 'Launch support'],
    timeline: '6 to 10 weeks',
    audience: 'Businesses, nonprofits, venues, retailers, and service organisations that need a credible website.',
    tone: 'charcoal',
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    summary: 'Purpose-built iPhone and Android applications taken from product thinking through to store release.',
    description:
      'We design and build mobile products for real routines—from academic planning to culturally grounded games. The work covers product structure, interface design, application development, integrations, and release preparation.',
    outcomes: ['A focused product experience', 'Consistent iPhone and Android delivery', 'Reliable app behaviour', 'A clear path to public release'],
    deliverables: ['Product planning', 'Interface design', 'Cross-platform development', 'System integrations', 'App store release support'],
    timeline: '10 to 16 weeks',
    audience: 'Founders and organisations with a useful mobile product idea and a defined audience.',
    tone: 'taupe',
  },
  {
    id: 'web-applications',
    title: 'Web Applications & Digital Products',
    shortTitle: 'Web Apps',
    summary: 'Interactive tools and tailored digital products built around a specific user journey or business need.',
    description:
      'When a normal website is not enough, we build focused web-based products such as assessments, portals, booking experiences, dashboards, and AI-assisted workflows. AI is used where it improves the product—not as a label added for effect.',
    outcomes: ['A simpler user journey', 'Less manual work', 'A product shaped around real requirements', 'Room to improve and extend over time'],
    deliverables: ['Product definition', 'UX and interface design', 'Application development', 'Data and service integrations', 'Testing and launch'],
    timeline: '10 to 18 weeks',
    audience: 'Organisations and founders that need software tailored to how their users or teams actually work.',
    tone: 'cream',
  },
];

export const navGroups: NavGroup[] = [
  {
    key: 'services',
    label: 'Services',
    description: 'Focused digital services backed by work already designed, built, and released.',
    items: services.map((service) => ({
      label: service.shortTitle,
      description: service.summary,
      href: `/services#${service.id}`,
    })),
  },
];

export const mobileApps: MobileApp[] = [
  {
    id: 'adinkra-tiles',
    name: 'Adinkra Tiles',
    category: 'Cultural puzzle game',
    description:
      'A calming Mahjong solitaire experience that turns Ghanaian Adinkra symbols into a thoughtful, timer-free journey through culture, strategy, and discovery.',
    image: '/adinkra-tiles-icon.jpg',
    features: [
      '200 handcrafted and procedural levels',
      '90+ collectible Adinkra symbols and meanings',
      'Progression, rewards, boosters, and daily gifts',
    ],
    tags: ['Flutter', 'Mobile Game', 'iOS & Android'],
    appStoreUrl: 'https://apps.apple.com/gh/app/adinkra-tiles/id6787963659',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sankofatiles.sankofa_tiles',
    theme: 'forest',
  },
  {
    id: 'unimate-gh',
    name: 'UniMate GH',
    category: 'Academic productivity',
    description:
      'An academic companion designed for Ghanaian university students to plan semesters, understand their results, manage timetables, and study with more direction.',
    image: '/unimate-gh-icon.jpg',
    features: [
      'CWA, GPA, and CGPA planning',
      'Timetable, course, and reminder management',
      'AI-assisted imports, study plans, and reviews',
    ],
    tags: ['Flutter', 'Education', 'AI-assisted'],
    appStoreUrl: 'https://apps.apple.com/gh/app/unimate-gh/id6787149834',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wesleyconsults.campusiq',
    theme: 'navy',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'whatismytemperament',
    title: 'What Is My Temperament',
    category: 'Web Application',
    client: 'WhatIsMyTemperament',
    summary: 'A clean, privacy-focused personality assessment tool that helps users discover their temperament type through a simple, interactive quiz — no sign-up required.',
    impact: 'Built a fully functional web app delivering instant personality insights to students, couples, and teams in under 5 minutes.',
    href: 'https://www.whatismytemperament.com/',
    tags: ['Web App', 'Psychology', 'Education'],
    surfaceStyle: 'green-feature',
    image: '/whatismytemperamentlogo.png',
    imageContain: true,
  },
  {
    id: 'uncolonized-society',
    title: 'Uncolonized Society',
    category: 'E-commerce',
    client: 'Uncolonized Society',
    summary: 'A bold e-commerce storefront for an Afro-Streetwear brand based in Accra and Takoradi, built to match their "mental sovereignty" identity and sell with confidence online.',
    impact: 'Launched the brand\'s first online store — giving them a professional platform to reach customers across Ghana and beyond.',
    href: 'https://uncolonized-society-ha8d.vercel.app/',
    tags: ['E-commerce', 'Fashion', 'Brand Identity'],
    surfaceStyle: 'ink-feature',
    image: 'https://uncolonized-society-ha8d.vercel.app/images/brand/hero.jpeg',
  },
  {
    id: 'arattc',
    title: 'ARATTC',
    category: 'Nonprofit Website',
    client: 'Aboadi Rural Agricultural Technology Centre',
    summary: 'A structured organisational website that brings ARATTC’s training, agricultural consultancy, community projects, research, and partnerships into one clear public platform.',
    impact: 'Made programmes, project evidence, impact figures, and training requests easier for communities and potential partners to find.',
    href: 'https://arattc.org/',
    tags: ['Nonprofit', 'Agriculture', 'Content Architecture'],
    surfaceStyle: 'green-feature',
    image: '/arattc-community.webp',
  },
  {
    id: 'calendersgh',
    title: 'CalendersGH',
    category: 'Lounge & Events Website',
    client: 'Calenders Events Bar & Lounge',
    summary: 'A lively hospitality website that brings CalendersGH’s garden-style dining, weekly entertainment, venue imagery, opening hours, and event booking journey together.',
    impact: 'Turned the venue’s established reputation—150+ events, five years in business, and a 5.0 Google rating—into a clear digital destination.',
    href: 'https://www.calendersgh.com/',
    tags: ['Restaurant & Lounge', 'Events Venue', 'Bookings'],
    surfaceStyle: 'cream-feature',
    image: '/calenders-seating.jpeg',
  },
];

export const featuredCaseStudy = caseStudies[0];

export const insights: InsightArticle[] = [
  {
    id: 'process',
    title: 'How a premium website process should feel from kickoff to launch',
    category: 'Process',
    date: '20 March 2026',
    readTime: '6 min read',
    excerpt: 'A practical breakdown of the cadence, decision points, and client touchpoints that keep a project sharp.',
    href: '/insights',
  },
  {
    id: 'positioning',
    title: 'Why most service firms do not have a design problem, they have a positioning problem',
    category: 'Strategy',
    date: '18 March 2026',
    readTime: '5 min read',
    excerpt: 'Premium websites work when the messaging is decisive. Design only amplifies what is already true.',
    href: '/insights',
  },
  {
    id: 'ecommerce',
    title: 'The quiet ways premium e-commerce interfaces increase confidence before checkout',
    category: 'E-commerce',
    date: '14 March 2026',
    readTime: '4 min read',
    excerpt: 'Trust is often built in the small details: hierarchy, spacing, pacing, and consistency across key screens.',
    href: '/insights',
  },
  {
    id: 'ai-advisory',
    title: 'What useful AI advisory looks like when you do not want hype',
    category: 'AI',
    date: '10 March 2026',
    readTime: '7 min read',
    excerpt: 'A grounded approach to identifying worthwhile AI opportunities without forcing every workflow through a trend.',
    href: '/insights',
  },
  {
    id: 'seo',
    title: 'Building sites that are easier to understand for both humans and search engines',
    category: 'SEO',
    date: '07 March 2026',
    readTime: '5 min read',
    excerpt: 'The strongest SEO improvements often come from structure, clarity, and better internal content architecture.',
    href: '/insights',
  },
  {
    id: 'migration',
    title: 'When a business website deserves a full redesign instead of another small patch',
    category: 'Websites',
    date: '03 March 2026',
    readTime: '6 min read',
    excerpt: 'A framework for deciding whether your current site needs optimisation, repositioning, or a complete rebuild.',
    href: '/insights',
  },
];

export const faqs: FaqItem[] = [
  {
    id: 'fit',
    question: 'Is Wesley Consults a good fit for my business?',
    answer:
      'If you\'re a local business, consultant, or service provider who wants a better online presence, you\'re in the right place. We work with businesses of all sizes — from sole traders to growing teams.',
  },
  {
    id: 'timeline',
    question: 'How long does a project take?',
    answer:
      'Most websites are ready in six to ten weeks. Online shops or bigger projects may take a little longer, depending on how much content and features are involved. We\'ll always give you a clear timeline upfront.',
  },
  {
    id: 'seo-friendly',
    question: 'Will my website show up on Google?',
    answer:
      'Yes. Every site we build is set up to be found on Google — with the right structure, fast loading, and clear content. We make sure your site is ready to be discovered from day one.',
  },
  {
    id: 'collaboration',
    question: 'Will I know what\'s happening throughout the project?',
    answer:
      'Absolutely. We check in with you at every key stage — from the initial plan to the final launch. You\'ll always know what\'s being worked on and when we need your input.',
  },
  {
    id: 'deadlines',
    question: 'What if I need it done quickly?',
    answer:
      'We can work to tighter deadlines. If you\'re in a hurry, we\'ll prioritise the most important pages first so you can go live sooner — without cutting corners on quality.',
  },
];

export const serviceFaqs: FaqItem[] = [
  {
    id: 'content',
    question: 'Can you help me figure out what to say on my website?',
    answer:
      'Yes. We help you structure your content so it\'s clear and persuasive — even if you\'re not a natural writer. Your message will make sense to your customers.',
  },
  {
    id: 'platform',
    question: 'Can I update the site myself after it\'s live?',
    answer:
      'Yes, that\'s the plan. We build your site so you can make simple updates — like adding new services or photos — without needing to call us every time.',
  },
  {
    id: 'ai',
    question: 'Can AI be included in a digital product?',
    answer:
      'Yes, when it serves a clear purpose. We can integrate AI-assisted workflows such as structured imports, planning, summaries, or guided analysis as part of a wider web or mobile product.',
  },
];

export const contactMethods: ContactMethod[] = [
  {
    id: 'phone',
    label: 'WhatsApp',
    value: '',
    href: 'https://wa.me/233500610780',
    note: 'Useful for quick questions and early-fit conversations.',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'wesleyconsults@gmail.com',
    href: 'mailto:wesleyconsults@gmail.com',
    note: 'Best for project enquiries and detailed briefs.',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Ghana — Takoradi & Accra',
    note: 'Structured to collaborate across time zones without friction.',
  },
];

export const processSteps = [
  {
    title: 'Understand your business',
    description: 'We start by getting to know you — your customers, what makes you different, and what you want to achieve.',
  },
  {
    title: 'Design it right',
    description: 'We turn your goals into a clear, great-looking website that makes sense for your customers.',
  },
  {
    title: 'Build and go live',
    description: 'We build your site, test everything, and get it live — on time and without the headaches.',
  },
];

export const aboutPrinciples = [
  {
    title: 'Keep it simple',
    description: 'Less clutter, clearer message. We remove what gets in the way and keep what matters.',
  },
  {
    title: 'Your website should sell for you',
    description: 'Good design explains your business and gives customers a reason to choose you.',
  },
  {
    title: 'Fast feels professional',
    description: 'A website that loads quickly builds trust. Slow sites lose customers before they even start.',
  },
  {
    title: 'Tech that actually helps',
    description: 'We only use new technology when it makes a real difference to your business — not just because it\'s trendy.',
  },
];

export const footerSecondaryLinks = [
  { label: 'Privacy Policy', href: '/contact' },
  { label: 'Terms of Engagement', href: '/contact' },
];
