export interface NavGroupItem {
  label: string;
  description: string;
  href: string;
}

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
  accent: string;
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
  gradient: string;
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
  'Northline',
  'Verity Health',
  'Atlas Commerce',
  'SignalStack',
  'Riverbank Capital',
  'Studio Forma',
];

export const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const sectors: SectorItem[] = [
  {
    id: 'technology',
    title: 'Technology',
    description: 'Positioning complex products so buyers understand the value in seconds.',
  },
  {
    id: 'saas',
    title: 'SaaS',
    description: 'Sharper onboarding, better product storytelling, and cleaner conversion paths.',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Premium storefronts designed to lift trust, average order value, and repeat purchase.',
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'High-credibility experiences for regulated brands that still need momentum.',
  },
  {
    id: 'health',
    title: 'Health',
    description: 'Structured interfaces and content systems for decision-heavy customer journeys.',
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'Authority-led websites that help expert firms sell clarity instead of noise.',
  },
];

export const services: ServiceItem[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    shortTitle: 'Websites',
    summary: 'Clear, premium websites for businesses that need to look established and sell with confidence.',
    description:
      'We design and build conversion-focused company websites that turn expertise into momentum. The emphasis is on clarity, performance, and a visual language that feels expensive without being ornamental.',
    outcomes: ['Sharper market positioning', 'Higher quality inbound leads', 'Faster load times', 'More persuasive service pages'],
    deliverables: ['Messaging direction', 'Custom UI system', 'Responsive front-end build', 'SEO-ready structure', 'Launch support'],
    timeline: '6 to 10 weeks',
    audience: 'Growing firms, consultants, B2B brands, and service-led companies.',
    accent: '#00FFBA',
  },
  {
    id: 'ecommerce-platforms',
    title: 'E-commerce Platforms',
    shortTitle: 'E-commerce',
    summary: 'Storefronts built to increase trust, reduce friction, and create a premium buying experience.',
    description:
      'For brands selling directly online, we combine merchandised storytelling, structured browsing, and friction-light conversion flows so the storefront performs like a top sales channel.',
    outcomes: ['Improved conversion rate', 'More confident product discovery', 'Stronger mobile checkout', 'Higher perceived value'],
    deliverables: ['Storefront design', 'Collection architecture', 'Product page systems', 'Checkout optimisation', 'Analytics setup'],
    timeline: '8 to 12 weeks',
    audience: 'Ambitious consumer brands and retailers modernising digital commerce.',
    accent: '#81FFE1',
  },
  {
    id: 'portfolio-brand-experiences',
    title: 'Portfolio & Brand Experiences',
    shortTitle: 'Portfolio',
    summary: 'Digital experiences that help studios, founders, and premium brands feel unmistakable.',
    description:
      'When the brand itself is the product, the site needs stronger narrative, sharper art direction, and more control over pacing. We build showcase-led experiences that make the work land harder.',
    outcomes: ['Clearer differentiation', 'More memorable first impressions', 'Better storytelling cadence', 'Stronger visual authority'],
    deliverables: ['Narrative structure', 'Case-study templates', 'Motion direction', 'Art-directed page layouts', 'Content guidance'],
    timeline: '5 to 9 weeks',
    audience: 'Agencies, creators, studios, property brands, and founder-led ventures.',
    accent: '#66F0FF',
  },
  {
    id: 'ai-advisory',
    title: 'AI Advisory',
    shortTitle: 'AI Advisory',
    summary: 'A coming-soon offer focused on private, practical AI systems for operational leverage.',
    description:
      'We are preparing a focused advisory offer for companies that want to apply AI to content operations, internal tooling, and customer workflows without introducing noise or unnecessary risk.',
    outcomes: ['Sharper AI roadmap', 'More practical automation targets', 'Lower experimentation waste', 'Stronger governance thinking'],
    deliverables: ['Use-case workshop', 'Opportunity mapping', 'Implementation brief', 'Vendor and tooling guidance', 'Pilot recommendations'],
    timeline: '3 to 6 weeks',
    audience: 'Leaders exploring AI with a bias toward useful, controlled deployment.',
    accent: '#9BF4FF',
  },
];

export const navGroups: NavGroup[] = [
  {
    key: 'services',
    label: 'Services',
    description: 'Four focused offers designed to improve clarity, credibility, and conversion.',
    items: services.map((service) => ({
      label: service.title,
      description: service.summary,
      href: `/services#${service.id}`,
    })),
  },
  {
    key: 'sectors',
    label: 'Sectors',
    description: 'Industries where positioning and premium trust signals matter most.',
    items: sectors.map((sector) => ({
      label: sector.title,
      description: sector.description,
      href: `/about#${sector.id}`,
    })),
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'northline',
    title: 'Northline Systems',
    category: 'B2B Website',
    client: 'Northline',
    summary: 'A more authoritative digital presence for an infrastructure software partner selling into enterprise teams.',
    impact: '42% lift in qualified contact enquiries within the first quarter.',
    href: '/work',
    tags: ['Strategy', 'UX/UI', 'Development'],
    gradient: 'linear-gradient(135deg, rgba(0,255,186,0.28), rgba(17,48,61,0.25) 42%, rgba(10,16,26,0.95))',
  },
  {
    id: 'verity',
    title: 'Verity Health',
    category: 'Healthcare Platform',
    client: 'Verity Health',
    summary: 'A calmer, more structured experience for a health brand balancing trust, compliance, and growth.',
    impact: '31% increase in demo requests from decision-makers.',
    href: '/work',
    tags: ['Brand Refresh', 'Content Systems', 'Front-end'],
    gradient: 'linear-gradient(145deg, rgba(129,255,225,0.24), rgba(13,33,49,0.92) 50%, rgba(33,61,88,0.72))',
  },
  {
    id: 'atlas',
    title: 'Atlas Commerce',
    category: 'E-commerce',
    client: 'Atlas',
    summary: 'A premium storefront redesign focused on merchandised storytelling and faster path-to-purchase.',
    impact: '18% increase in average order value after launch.',
    href: '/work',
    tags: ['Commerce UX', 'Product Pages', 'Optimisation'],
    gradient: 'linear-gradient(135deg, rgba(102,240,255,0.3), rgba(9,20,34,0.92) 54%, rgba(0,255,186,0.12))',
  },
  {
    id: 'riverbank',
    title: 'Riverbank Capital',
    category: 'Finance Website',
    client: 'Riverbank',
    summary: 'A more assured investor-facing site with sharper narrative structure and higher-performing service pages.',
    impact: '2.6x growth in time spent on strategic service pages.',
    href: '/work',
    tags: ['Messaging', 'Design System', 'Launch'],
    gradient: 'linear-gradient(140deg, rgba(155,244,255,0.22), rgba(13,33,49,0.95) 48%, rgba(34,78,110,0.7))',
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
    gradient: 'linear-gradient(120deg, rgba(0,255,186,0.18), rgba(9,20,34,0.94) 40%, rgba(102,240,255,0.24))',
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
    gradient: 'linear-gradient(150deg, rgba(129,255,225,0.18), rgba(7,14,24,0.95) 45%, rgba(0,255,186,0.2))',
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
    question: 'What kind of companies are the best fit for Wesley Consults?',
    answer:
      'The best fit is usually a business that has already proven demand and now needs a sharper digital presence to support growth. That includes service firms, SaaS companies, premium e-commerce brands, and founder-led businesses with a serious offer.',
  },
  {
    id: 'timeline',
    question: 'How long does a typical project take?',
    answer:
      'Focused website projects usually land in six to ten weeks. E-commerce or broader brand-and-site engagements can take longer depending on content complexity, integrations, and stakeholder review cycles.',
  },
  {
    id: 'seo-friendly',
    question: 'Will the website be SEO-friendly and performance-conscious?',
    answer:
      'Yes. The build approach prioritises structure, metadata, semantic HTML, responsive performance, and content clarity. The goal is a site that is easier to discover, easier to use, and easier to maintain.',
  },
  {
    id: 'collaboration',
    question: 'How do you keep the process clear during a project?',
    answer:
      'Projects run through defined checkpoints for strategy, design, build, and launch. You know what is being decided, when feedback is needed, and what each milestone is intended to achieve.',
  },
  {
    id: 'deadlines',
    question: 'Can you work to a tight deadline?',
    answer:
      'Yes, when the scope is honest. If speed is a priority, the work can be phased so the most commercially important pages and journeys go live first without compromising the final direction.',
  },
];

export const serviceFaqs: FaqItem[] = [
  {
    id: 'content',
    question: 'Do you also help with website copy and content structure?',
    answer:
      'Yes. Even when full copywriting is not part of the engagement, the structure, hierarchy, and conversion logic are shaped so your content performs more clearly.',
  },
  {
    id: 'platform',
    question: 'Can the site be updated after launch?',
    answer:
      'That is the goal. The front-end is structured so future content updates, case studies, and service changes can be handled cleanly without a full redesign.',
  },
  {
    id: 'ai',
    question: 'Is the AI advisory offer live yet?',
    answer:
      'Not as a formal productised service. It is currently positioned as an upcoming offer for teams interested in private, practical AI implementation planning.',
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
    title: 'Position the offer',
    description: 'Clarify the audience, differentiators, and commercial goal before visual exploration begins.',
  },
  {
    title: 'Design the system',
    description: 'Translate the strategy into page structure, visual hierarchy, and a reusable interface language.',
  },
  {
    title: 'Build for launch',
    description: 'Develop responsive pages, validate the interaction details, and prepare a clean production release.',
  },
];

export const aboutPrinciples = [
  {
    title: 'Clarity over noise',
    description: 'Premium work starts by removing friction, not adding visual clutter.',
  },
  {
    title: 'Strategy in the interface',
    description: 'The design should explain the business model, not distract from it.',
  },
  {
    title: 'Performance as polish',
    description: 'A fast experience feels more credible, more controlled, and more expensive.',
  },
  {
    title: 'Practical innovation',
    description: 'New technology is useful only when it creates measurable leverage.',
  },
];

export const footerSecondaryLinks = [
  { label: 'Privacy Policy', href: '/contact' },
  { label: 'Terms of Engagement', href: '/contact' },
];
