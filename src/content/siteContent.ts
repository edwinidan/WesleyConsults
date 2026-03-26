export interface NavGroupItem {
  label: string;
  description: string;
  href: string;
}

export type ServiceTone = 'charcoal' | 'taupe' | 'cream';
export type CaseStudySurfaceStyle = 'ink-feature' | 'taupe-feature' | 'cream-feature' | 'green-feature';

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

export interface SectorItem {
  id: string;
  title: string;
  description: string;
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
  'SignalStack',
  'Studio Forma',
];

export const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const sectors: SectorItem[] = [
  {
    id: 'technology',
    title: 'Technology',
    description: 'We help tech businesses explain what they do in plain English — so the right customers actually get it.',
  },
  {
    id: 'saas',
    title: 'SaaS',
    description: 'Better sign-up flows, clearer product pages, and more trials turning into paying customers.',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Beautiful online shops that build trust and keep shoppers coming back for more.',
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Professional, trustworthy websites for financial businesses that still need to attract new clients.',
  },
  {
    id: 'health',
    title: 'Health',
    description: 'Clear, easy-to-navigate websites for health businesses where trust is everything.',
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'Websites that show you\'re the expert — and make it easy for clients to choose you.',
  },
];

export const services: ServiceItem[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    shortTitle: 'Websites',
    summary: 'A clean, professional website that makes your business look the part and turns visitors into paying customers.',
    description:
      'We build websites that are easy to navigate, fast to load, and make a great first impression. Whether you\'re a local shop or a growing service business, we make sure your site works hard for you.',
    outcomes: ['Look more professional online', 'Get more enquiries from your site', 'Loads fast on any device', 'Makes it easy for customers to reach you'],
    deliverables: ['Clear messaging', 'Custom design', 'Mobile-friendly build', 'Google-ready structure', 'Launch support'],
    timeline: '6 to 10 weeks',
    audience: 'Local businesses, consultants, and service providers who want a website that actually works.',
    tone: 'charcoal',
  },
  {
    id: 'ecommerce-platforms',
    title: 'E-commerce Platforms',
    shortTitle: 'E-commerce',
    summary: 'An online shop that\'s easy to use, looks great, and gets customers all the way to checkout.',
    description:
      'We design your online store so shoppers can find what they want quickly and buy with confidence. Less frustration for your customers means more sales for you.',
    outcomes: ['More completed purchases', 'Easier product browsing', 'Smooth checkout on mobile', 'Looks trustworthy to new buyers'],
    deliverables: ['Shop design', 'Product page setup', 'Category layout', 'Checkout improvements', 'Sales tracking'],
    timeline: '8 to 12 weeks',
    audience: 'Small businesses and retailers ready to sell more online.',
    tone: 'taupe',
  },
  {
    id: 'portfolio-brand-experiences',
    title: 'Portfolio & Brand Experiences',
    shortTitle: 'Portfolio',
    summary: 'A website that shows off your best work and makes people remember your name.',
    description:
      'When your reputation is everything, your website needs to reflect that. We build portfolio sites that tell your story clearly and make a strong impression on the right people.',
    outcomes: ['Stand out from competitors', 'Make a stronger first impression', 'Tell your story better', 'Look like the go-to expert in your field'],
    deliverables: ['Page layout and structure', 'Case study templates', 'Subtle animations', 'Eye-catching visuals', 'Content tips'],
    timeline: '5 to 9 weeks',
    audience: 'Freelancers, agencies, studios, and founders who want their online presence to match their real-world reputation.',
    tone: 'cream',
  },
  {
    id: 'ai-advisory',
    title: 'AI Advisory',
    shortTitle: 'AI Advisory',
    summary: 'Simple, honest advice on where AI can save your business time and money — without the confusing tech talk.',
    description:
      'Not sure where to start with AI? We help you figure out which tools are actually worth it for your business and which ones to skip. No hype, no confusion — just practical next steps.',
    outcomes: ['A clear AI plan that makes sense', 'Find quick wins for your business', 'Avoid wasting money on the wrong tools', 'Know exactly what to do next'],
    deliverables: ['Needs assessment', 'Opportunity breakdown', 'Action plan', 'Tool recommendations', 'Pilot suggestions'],
    timeline: '3 to 6 weeks',
    audience: 'Business owners curious about AI but not sure where to begin.',
    tone: 'charcoal',
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    shortTitle: 'Mobile Apps',
    summary: 'A mobile app that works beautifully on iPhone and Android — built for your customers.',
    description:
      'We design and build apps that are fast, easy to use, and keep people coming back. Whether it\'s for your customers or your team, we make it feel smooth and reliable.',
    outcomes: ['Customers keep coming back', 'App feels fast and smooth', 'Works on iPhone and Android', 'Reliable even without internet'],
    deliverables: ['iPhone & Android app', 'Design & user experience', 'System integrations', 'App store launch', 'Ongoing support plan'],
    timeline: '10 to 16 weeks',
    audience: 'Businesses ready to give their customers a better experience on their phones.',
    tone: 'taupe',
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    shortTitle: 'Web Apps',
    summary: 'A custom tool built for your business — so your team can stop working around broken systems.',
    description:
      'We build web-based software that fits the way your business actually works. Think booking systems, client portals, or custom dashboards — anything that saves your team time and reduces mistakes.',
    outcomes: ['Your team works faster', 'Scales as your business grows', 'Data is safe and organised', 'Works on any device, anywhere'],
    deliverables: ['Full build from scratch', 'System design', 'Data storage setup', 'User access controls', 'Testing and quality checks'],
    timeline: '12 to 20 weeks',
    audience: 'Businesses that need custom software and are done trying to make generic tools work.',
    tone: 'cream',
  },
];

export const navGroups: NavGroup[] = [
  {
    key: 'services',
    label: 'Services',
    description: 'Simple, practical services that help your business look great and grow online.',
    items: services.map((service) => ({
      label: service.title,
      description: service.summary,
      href: `/services#${service.id}`,
    })),
  },
  {
    key: 'sectors',
    label: 'Sectors',
    description: 'Industries we\'ve helped — and we probably know yours too.',
    items: sectors.map((sector) => ({
      label: sector.title,
      description: sector.description,
      href: `/about#${sector.id}`,
    })),
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
    id: 'forma',
    title: 'Studio Forma',
    category: 'Portfolio Experience',
    client: 'Forma',
    summary: 'A showcase-led portfolio for a design studio that needed stronger pacing, contrast, and work presentation.',
    impact: '67% increase in direct enquiry rate from target-fit prospects.',
    href: '/work',
    tags: ['Portfolio Strategy', 'Motion', 'Responsive Build'],
    surfaceStyle: 'cream-feature',
  },
  {
    id: 'signalstack',
    title: 'SignalStack',
    category: 'SaaS Marketing Site',
    client: 'SignalStack',
    summary: 'A fast, focused marketing site for a technical product that needed sharper product communication.',
    impact: '26% increase in product-qualified pipeline sourced from the website.',
    href: '/work',
    tags: ['SaaS', 'Storytelling', 'Performance'],
    surfaceStyle: 'taupe-feature',
  },
];

export const featuredCaseStudy = caseStudies[0];

export const metrics: StatMetric[] = [
  {
    id: 'qualified-leads',
    label: 'Increase in qualified enquiries',
    detail: 'For a B2B infrastructure client after a full messaging and website overhaul.',
    value: 42,
    suffix: '%',
    href: '/work',
  },
  {
    id: 'order-value',
    label: 'Increase in average order value',
    detail: 'Driven by a cleaner premium storefront and sharper product storytelling.',
    value: 18,
    suffix: '%',
    href: '/work',
  },
  {
    id: 'engagement-time',
    label: 'More time on strategic pages',
    detail: 'A finance client saw longer sessions on the pages that matter to high-intent buyers.',
    value: 2.6,
    suffix: 'x',
    decimals: 1,
    href: '/work',
  },
  {
    id: 'launch-speed',
    label: 'Average launch sprint for focused site builds',
    detail: 'A tighter delivery model for teams that need premium execution without unnecessary drag.',
    value: 8,
    suffix: ' weeks',
    href: '/contact',
  },
];

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
    question: 'Is the AI advisory service available now?',
    answer:
      'Not quite yet. It\'s coming soon for business owners who want practical help using AI tools — without the jargon or confusing tech talk.',
  },
];

export const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'hello@wesleyconsults.com',
    href: 'mailto:hello@wesleyconsults.com',
    note: 'Best for project enquiries and detailed briefs.',
  },
  {
    id: 'phone',
    label: 'WhatsApp',
    value: '+1 (555) 123-4567',
    href: 'https://wa.me/15551234567',
    note: 'Useful for quick questions and early-fit conversations.',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Working globally from Accra and remote partner hubs',
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
