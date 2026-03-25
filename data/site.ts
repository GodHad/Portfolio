export const personalInfo = {
  name: "Patrik Lacko",
  title: "Senior Full-Stack Engineer for startup products, AI workflows, and advanced interactive web apps.",
  intro:
    "I work with founders and product teams to design, build, and ship serious software: premium frontends, fabric.js-powered product experiences, reliable backend systems, and automation that removes operational drag.",
  aboutTitle: "I build products that need more than polished UI. They need sound engineering, clear execution, and commercial judgment.",
  aboutDescription:
    "My role is usually somewhere between senior engineer, product builder, and technical partner. I help teams move from promising ideas to stable, credible software that users can trust and businesses can grow on.",
  aboutParagraphs: [
    "For 9+ years, I have been building web products, platforms, and automation systems across startup, SaaS, ecommerce, internal tooling, and Web3 environments. I am comfortable moving across the stack when a product needs momentum, whether that means shaping the frontend experience, designing backend architecture, integrating AI workflows, or tightening delivery quality before launch.",
    "A lot of my work sits where product complexity meets user experience. That includes advanced interactive frontend systems with fabric.js, custom builders and editors, AI-assisted workflows, and full-stack applications that need to feel fast, premium, and dependable under real usage.",
    "I work well with founders, operators, designers, and non-technical stakeholders because the job is never just shipping code. It is clarifying priorities, reducing risk, making sensible technical decisions, and delivering something maintainable enough to support the next stage of the business.",
  ],
  email: "sunharius@gmail.com",
  location: "Remote, client-friendly, and available worldwide",
  availability: "Available for freelance, contract, and remote product work",
  contactTitle: "If you need a senior engineer who can turn a product idea into something credible, usable, and launch-ready, let's talk.",
  contactDescription:
    "Send a short brief, current challenge, or project link. I can usually tell you quickly where I can help, how I would approach it, and whether the fit is right.",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/patriklacko" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/patrik-lacko-17b51a3a7/" },
  { label: "Email", href: "mailto:sunharius@gmail.com" },
];

export const stats = [
  { value: "9+", label: "Years building web products, platforms, and automation systems" },
  { value: "30+", label: "Projects shipped across SaaS, ecommerce, internal tools, and product platforms" },
  { value: "End-to-end", label: "Frontend, backend, architecture, integrations, and launch delivery" },
];

export const credibilityItems = [
  {
    label: "Experience",
    value: "9+ years",
    description: "Software engineering across startup builds, product platforms, and long-lived client systems.",
  },
  {
    label: "Product range",
    value: "Startup, SaaS, AI, Web3, internal tools",
    description: "Curated experience across product categories where speed and credibility both matter.",
  },
  {
    label: "Delivery model",
    value: "Strategy to shipped product",
    description: "Comfortable owning architecture, implementation, integrations, QA, and launch support.",
  },
  {
    label: "Availability",
    value: "Freelance, contract, remote",
    description: "Set up to work directly with founders, agencies, and product teams.",
  },
];

export const featuredCapability = {
  eyebrow: "Specialty",
  title: "Interactive builders and fabric.js workflows that become the product, not just a feature.",
  description:
    "When a product depends on customization, editing, visualization, or browser-based creation, the interaction model has to be both technically sound and commercially usable. I build fabric.js experiences that help products convert, differentiate, and scale instead of feeling like fragile demos.",
  highlights: [
    "Custom product configurators",
    "Canvas editors and visual tools",
    "AI-assisted personalization flows",
    "Print and design production workflows",
  ],
};

export const services = [
  {
    title: "Interactive product builders",
    description:
      "Custom editors, configurators, and advanced fabric.js experiences for products where the interface is central to the value proposition.",
  },
  {
    title: "AI integrations and automation",
    description:
      "LLM-powered features, internal copilots, and workflow automation that remove manual work and make products more useful in daily operations.",
  },
  {
    title: "Premium frontend systems",
    description:
      "High-trust React, Next.js, and Vue interfaces that feel fast, polished, and credible across marketing, SaaS, and client-facing product surfaces.",
  },
  {
    title: "Full-stack product development",
    description:
      "End-to-end implementation for startup products that need one engineer who can move between UX, application logic, APIs, data, and delivery.",
  },
  {
    title: "Backend architecture and integrations",
    description:
      "Reliable services, business logic, and third-party integrations for platforms that need maintainability, clean structure, and room to grow.",
  },
];

export const projectCategories = ["All", "AI", "Web3", "Ecommerce"] as const;

export const projects = [
  {
    title: "Puppynator",
    category: "Ecommerce",
    role: "Lead Full-Stack Engineer",
    summary: "A personalized print ecommerce product built around a browser-based customization experience.",
    problem: "Customers needed a smooth way to personalize products without turning checkout into a confusing workflow.",
    contribution:
      "Built the fabric.js editor, React storefront flows, Symfony backend logic, and AI-assisted personalization/support features that tied the buying experience together.",
    impact: "Turned customization into a stronger conversion driver while supporting production-ready order and print workflows.",
    tech: ["fabric.js", "React", "Symfony", "AI integration", "Ecommerce"],
    highlights: [
      "Delivered a live personalization editor for print products",
      "Connected storefront UX with backend order logic",
      "Added AI-assisted flows to reduce friction in the buying journey",
    ],
    image: "/assets/projects/puppynator.png",
    demoHref: "https://www.puppynator.sk/",
    demoLabel: "View live product",
  },
  {
    title: "Signalyze",
    category: "AI",
    role: "Senior Full-Stack Engineer",
    summary: "An analytics and signal platform built to surface useful insights faster.",
    problem: "Users needed a clearer way to work through complex signals and move from raw information to actionable decisions.",
    contribution:
      "Built product features across Next.js, NestJS, Node, PostgreSQL, and AI-assisted insight workflows to improve speed, clarity, and usability.",
    impact: "Made a data-heavy product easier to navigate and more valuable as a decision-support tool.",
    tech: ["Next.js", "NestJS", "Node.js", "PostgreSQL", "AI workflows"],
    highlights: [
      "Shaped both frontend product experience and backend delivery",
      "Integrated AI features to support faster interpretation of signals",
      "Focused the platform on clarity rather than dashboard noise",
    ],
    image: "/assets/projects/signalyze.png",
    demoHref: "https://www.signalyze.net",
    demoLabel: "Visit platform",
  },
  {
    title: "Supafuse",
    category: "AI",
    role: "Full-Stack Product Engineer",
    summary: "A conversion-focused web experience supported by Laravel, React, and AI chatbot workflows.",
    problem: "The product needed a sharper digital experience that could educate visitors, capture interest, and reduce drop-off.",
    contribution:
      "Implemented the frontend experience, integrated AI chatbot workflows, and connected the stack so the site supported both brand perception and lead flow.",
    impact: "Improved the quality of the customer journey with a more modern, interactive, and commercially focused experience.",
    tech: ["Laravel", "React", "AI chatbot", "Conversion UX"],
    highlights: [
      "Built a more interactive path from visit to inquiry",
      "Used AI chat to support faster customer engagement",
      "Aligned frontend polish with business intent and messaging",
    ],
    image: "/assets/projects/supafuse.png",
    demoHref: "https://www.supafuse.com",
    demoLabel: "See the experience",
  },
  {
    title: "bluepill.fun",
    category: "Web3",
    role: "Senior Full-Stack Engineer",
    summary: "A fast-moving Web3 product experience built for a token-driven audience.",
    problem: "The brand needed a launch-style product surface that felt native to crypto culture without sacrificing trust or usability.",
    contribution:
      "Built the experience with Next.js, NestJS, Node, and PostgreSQL, shaping the frontend, application logic, and Web3-facing interactions around clarity and momentum.",
    impact: "Delivered a launch-ready experience that matched the speed of the space while staying more usable and credible than typical meme-driven builds.",
    tech: ["Next.js", "NestJS", "Node.js", "PostgreSQL", "Web3"],
    highlights: [
      "Balanced crypto-native energy with clearer product UX",
      "Handled full-stack implementation across app and API layers",
      "Created launch-oriented flows suited to fast campaign cycles",
    ],
    image: "/assets/projects/bluepill.png",
    demoHref: "https://bluepill.fun",
    demoLabel: "Open project",
  },
] as const;

export const processSteps = [
  {
    title: "Align on the real goal",
    description: "Clarify what the product needs to achieve, where the technical risks are, and what actually matters to the business.",
  },
  {
    title: "Shape the right scope",
    description: "Break the work into sensible phases, define the architecture, and avoid overbuilding before the essentials are proven.",
  },
  {
    title: "Build with delivery discipline",
    description: "Implement with a focus on maintainability, performance, and communication so progress stays visible and predictable.",
  },
  {
    title: "Pressure-test the product",
    description: "Review edge cases, responsiveness, interaction quality, and handoff readiness before anything goes live.",
  },
  {
    title: "Launch and support",
    description: "Ship cleanly, resolve rollout issues quickly, and leave the product in a stronger position for the next phase.",
  },
];

export const testimonials = [
  {
    quote:
      "Patrik helped turn Puppynator into a stronger product experience with custom functionality, sharp implementation, and reliable technical delivery.",
    name: "Rastislav Belko",
    role: "CEO, Puppynator",
  },
  {
    quote:
      "The final result felt modern, polished, and much more aligned with the direction of the brand. Execution was fast and highly professional.",
    name: "Afro Futuristic",
    role: "Founder, Supafuse",
  },
  {
    quote:
      "Fast, detail-oriented, and technically reliable. The balance between design quality and development discipline was exactly what we needed.",
    name: "Maya Patel",
    role: "Product Lead",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
