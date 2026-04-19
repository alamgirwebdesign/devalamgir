// Shared data for the portfolio

const PROJECTS = [
  {
    id: 1, title: "Nimbus Commerce", tag: ["Full-stack", "SaaS"],
    desc: "Headless e-commerce platform with Next.js storefront, Stripe billing and AI-assisted catalog tools.",
    tech: ["Next.js", "Node", "Postgres", "Stripe"], size: "lg",
    grad: "linear-gradient(135deg,#ff5b3a,#ff2e8a 60%,#6b4bff)"
  },
  {
    id: 2, title: "Pulse Analytics", tag: ["Frontend", "Dashboard"],
    desc: "Real-time product analytics dashboard with custom SQL cohorting and live socket streams.",
    tech: ["React", "D3", "WebSockets"], size: "md",
    grad: "linear-gradient(135deg,#00c2b8,#6b4bff)"
  },
  {
    id: 3, title: "Lumen CMS", tag: ["Full-stack", "CMS"],
    desc: "A flexible headless CMS with a block-based editor and GraphQL API.",
    tech: ["Node", "GraphQL", "MongoDB"], size: "md",
    grad: "linear-gradient(135deg,#ffd23a,#ff5b3a)"
  },
  {
    id: 4, title: "Orbit Social", tag: ["Full-stack", "Mobile"],
    desc: "Niche community app with threaded chats, push notifications and a reputation system.",
    tech: ["React Native", "Express", "Redis"], size: "sm",
    grad: "linear-gradient(135deg,#6b4bff,#ff2e8a)"
  },
  {
    id: 5, title: "Harvest Market", tag: ["Full-stack", "SaaS"],
    desc: "B2B marketplace connecting farmers with restaurants — with route optimization and smart invoicing.",
    tech: ["Next.js", "Prisma", "Postgres"], size: "sm",
    grad: "linear-gradient(135deg,#00c2b8,#ffd23a)"
  },
  {
    id: 6, title: "Folio Studio", tag: ["Frontend", "Motion"],
    desc: "Design-studio landing site with GSAP page transitions and interactive cursor scenes.",
    tech: ["Nuxt", "GSAP", "WebGL"], size: "sm",
    grad: "linear-gradient(135deg,#ff2e8a,#ffd23a)"
  },
  {
    id: 7, title: "Stitch — Team OS", tag: ["Full-stack", "SaaS"],
    desc: "All-in-one workspace for remote teams: docs, sprints, threaded comments and stand-ups.",
    tech: ["Next.js", "Nest", "Postgres"], size: "md",
    grad: "linear-gradient(135deg,#161311,#6b4bff)"
  },
  {
    id: 8, title: "Glyph Learn", tag: ["Frontend", "EdTech"],
    desc: "Interactive Bengali handwriting tutor for primary-school kids with progress quests.",
    tech: ["React", "Canvas", "Firebase"], size: "md",
    grad: "linear-gradient(135deg,#ff5b3a,#ffd23a)"
  },
  {
    id: 9, title: "Cove Booking", tag: ["Full-stack", "Travel"],
    desc: "Boutique hotel booking engine with dynamic pricing and a custom channel manager.",
    tech: ["Remix", "Go", "Postgres"], size: "lg",
    grad: "linear-gradient(135deg,#00c2b8,#6b4bff 60%,#ff2e8a)"
  },
  {
    id: 10, title: "Beacon Newsletter", tag: ["Full-stack", "Content"],
    desc: "Publishing platform with paid subscriptions, AI copy assist and email deliverability tooling.",
    tech: ["SvelteKit", "Rails"], size: "sm",
    grad: "linear-gradient(135deg,#ffd23a,#ff2e8a)"
  },
  {
    id: 11, title: "Prism DX", tag: ["Backend", "DevTools"],
    desc: "Developer-experience CLI and dashboard for managing feature flags across environments.",
    tech: ["Go", "TypeScript", "Redis"], size: "sm",
    grad: "linear-gradient(135deg,#6b4bff,#00c2b8)"
  },
  {
    id: 12, title: "Kinetic Portfolio", tag: ["Frontend", "Motion"],
    desc: "Photographer's portfolio with scroll-driven film reel and generative grain shader.",
    tech: ["Three.js", "GSAP"], size: "sm",
    grad: "linear-gradient(135deg,#ff5b3a,#6b4bff)"
  },
];

const SKILLS = [
  { label:"React & Next.js", tag:"Frontend", level:95, icon:"R" },
  { label:"TypeScript", tag:"Language", level:92, icon:"TS" },
  { label:"Node & Express", tag:"Backend", level:93, icon:"N" },
  { label:"PostgreSQL", tag:"Database", level:88, icon:"PG" },
  { label:"GraphQL", tag:"API", level:85, icon:"GQ" },
  { label:"MongoDB", tag:"Database", level:82, icon:"M" },
  { label:"Tailwind CSS", tag:"Styling", level:96, icon:"TW" },
  { label:"Docker & AWS", tag:"DevOps", level:80, icon:"D" },
];

const EXPERIENCE = [
  {
    role:"Senior Full-stack Developer", company:"Freelance / Contract",
    date:"2023 — Now",
    desc:"Building custom SaaS platforms and e-commerce builds for clients across Bangladesh, Singapore and the EU."
  },
  {
    role:"Full-stack Engineer", company:"Orbit Labs",
    date:"2021 — 2023",
    desc:"Led the platform team for a niche social app. Shipped real-time chat, payments and a moderation pipeline."
  },
  {
    role:"Frontend Developer", company:"Cascade Digital",
    date:"2019 — 2021",
    desc:"Delivered 20+ marketing sites and a large headless-CMS rebuild. Championed the move to TypeScript."
  },
  {
    role:"Junior Web Developer", company:"Rangpur Tech Collective",
    date:"2020 — 2019",
    desc:"Started my career building WordPress sites and learning the fundamentals of the web."
  },
];

const SERVICES = [
  {
    n:"01", title:"Web Applications",
    desc:"End-to-end SaaS builds. From data model and API to a production-ready interface your users love.",
    items:["Architecture & DB design","API + auth + payments","Admin dashboards","Scaling & DevOps"]
  },
  {
    n:"02", title:"E-commerce",
    desc:"Modern storefronts that load in under a second and convert — built on Next.js, Shopify Hydrogen or custom stacks.",
    items:["Headless storefronts","Checkout & billing","Catalog & search","Analytics & A/B"]
  },
  {
    n:"03", title:"Design Engineering",
    desc:"Pixel-perfect front-ends with motion, custom interactions and an obsession for typography.",
    items:["Component systems","Motion & micro-interactions","Framer / Webflow rebuilds","Performance tuning"]
  },
];

const TESTIMONIALS = [
  {
    quote: "Alamgir rebuilt our checkout in three weeks. Conversion jumped 24% the first month and our team actually enjoys the codebase now.",
    name: "Priya Sengupta", role: "CTO, Nimbus Commerce"
  },
  {
    quote: "Rare mix of taste and speed. He ships UI that feels alive and the backend never wakes me at 3am.",
    name: "Marcus Lindqvist", role: "Founder, Pulse Analytics"
  },
  {
    quote: "We hired Alamgir for a 2-week fix and kept him for a year. Best async communicator I've ever worked with.",
    name: "Amelia Chen", role: "Product Lead, Stitch"
  },
];

const POSTS = [
  {
    cat:"Engineering", date:"Mar 2026", read:"8 min",
    title:"Stop reaching for useEffect. Start reaching for the platform.",
    desc:"The browser ships with IntersectionObserver, ViewTransition and CSS anchor positioning. Here's when to use each instead of yet another hook."
  },
  {
    cat:"Design", date:"Feb 2026", read:"6 min",
    title:"Designing interfaces that feel playful without feeling childish.",
    desc:"A short essay on motion budgets, type pairing and why your SaaS product can have a sense of humor without losing credibility."
  },
  {
    cat:"Career", date:"Jan 2026", read:"11 min",
    title:"Freelancing from Rangpur: five years in, here's what I've learned.",
    desc:"Pricing in USD, managing timezones and why I still send hand-written invoices to my favourite clients."
  },
];

Object.assign(window, { PROJECTS, SKILLS, EXPERIENCE, SERVICES, TESTIMONIALS, POSTS });
