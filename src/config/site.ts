export const site = {
  name: 'CREORBIS',
  url: 'https://creorbis.com',
  tagline: 'Create. Connect. Transform.',
  description:
    'CREORBIS builds modern websites, custom software and digital solutions that turn ideas into meaningful technology.',
  // Set when a creorbis.com mailbox exists. While empty, no email is shown anywhere.
  contactEmail: '',
  // Form delivery: free Web3Forms key (public by design). Leave empty until you have one.
  formEndpoint: 'https://api.web3forms.com/submit',
  formAccessKey: '',
  // WhatsApp number with country code, digits only, e.g. '91XXXXXXXXXX'. Empty hides the button.
  whatsapp: '',
  location: 'Bengaluru, India',
  founder: { name: 'Emmanuel Navaraj', role: 'Founder' },
  social: [] as { label: string; href: string }[],
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  { id: 'websites', title: 'Website development',
    summary: 'Fast, responsive websites coded from scratch for your business, portfolio or launch.',
    intro: 'Your website is often the first thing a customer sees. We code it from scratch so it loads fast, works on every screen and stays easy to extend.',
    includes: ['Business websites', 'Portfolio websites', 'Landing pages', 'Custom-coded, responsive builds'],
    features: ['Responsive layouts for phone, tablet and desktop', 'SEO-ready structure and metadata', 'Enquiry and contact forms with spam protection', 'Fast loading and optimised images', 'Content you can update without breaking the design'],
    audience: 'Businesses and individuals who need a professional presence online.',
    solves: 'Slow template sites that look like everyone else’s and are hard to change.',
    faq: [['Do you use templates?', 'No. We code sites from scratch around your brand and content, so you aren’t locked into a template’s limits.'], ['Can you redesign my existing site?', 'Yes. We can rebuild it with a cleaner design, better speed and a structure search engines can read.']] },
  { id: 'web-apps', title: 'Custom web applications',
    summary: 'Web applications built around how your business actually works.',
    intro: 'When off-the-shelf tools don’t fit the way you work, we build a web application that does, from internal tools to customer-facing platforms.',
    includes: ['Business applications', 'Internal tools and admin panels', 'Customer portals', 'Custom dashboards and reporting', 'API development and integration'],
    features: ['User accounts and role-based access', 'Dashboards and reports', 'Integration with the tools you already use', 'Secure, documented APIs', 'Delivered in milestones you can review'],
    audience: 'Teams outgrowing spreadsheets, shared drives and off-the-shelf tools.',
    solves: 'Manual processes, scattered data and tools that don’t talk to each other.',
    faq: [['How do we start?', 'We begin with a short discovery conversation about the problem, then agree scope and a fixed quote before building.'], ['Can you connect it to our existing tools?', 'Usually yes. We build and consume APIs to link new software with the systems you already run.']] },
  { id: 'crm', title: 'CRM development',
    summary: 'A CRM built around your sales process, not someone else’s.',
    intro: 'If leads, customers and follow-ups live in spreadsheets and chats, a tailored CRM gives your team one place to track every relationship.',
    includes: ['Lead and contact management', 'Sales pipeline and deal tracking', 'Follow-up reminders and activity history', 'Reports and dashboards', 'Integrations with forms, email and other tools'],
    features: ['A pipeline that matches your real stages', 'Full history for every customer', 'Reminders so follow-ups don’t slip', 'Team roles and permissions', 'Reports on what is working'],
    audience: 'Sales teams, agencies and service businesses tracking customers in spreadsheets or messages.',
    solves: 'Leads falling through the cracks and customer information scattered across people and tools.',
    faq: [['Why not just buy an existing CRM?', 'If a standard CRM fits, use it. We build custom when your process is unusual or you’re paying for features you don’t use.'], ['Can you migrate our current data?', 'Yes. We can import contacts and history from spreadsheets or your current tool.']] },
  { id: 'erp', title: 'ERP development',
    summary: 'One system for the operations that run your business, built in phases.',
    intro: 'An ERP connects the parts of your business that usually live apart. We build it in phases, starting with the area that hurts most, so you see value early.',
    includes: ['Inventory and purchasing', 'Sales and invoicing', 'Expense and accounts tracking', 'People and attendance modules', 'Reporting across departments', 'Role-based access'],
    features: ['One source of truth for stock, orders and customers', 'Modules added one at a time', 'Approval flows and permissions', 'Reports that combine data from every module', 'Room to grow as you do'],
    audience: 'Growing businesses running operations across spreadsheets and disconnected tools.',
    solves: 'Duplicate data entry, no single view of the business and processes that depend on one person.',
    faq: [['Do we need everything at once?', 'No. We recommend phasing it: build the most painful module first, then add others as it proves its value.'], ['How is this different from a ready-made ERP?', 'Ready-made ERPs are broad and often need your process to change. A tailored build starts from your process.']] },
  { id: 'ai', title: 'AI and automation',
    summary: 'AI features and automation where they save real time, not for show.',
    intro: 'We add AI and automation to the places where they genuinely save time, and tell you honestly when they won’t.',
    includes: ['AI-powered applications', 'Workflow automation', 'AI integrations', 'Intelligent business tools', 'Custom AI solutions'],
    features: ['Automating repetitive, rule-based work', 'AI features inside your existing software', 'Human review where accuracy matters', 'Clear measures of time saved', 'Options that run locally when privacy matters'],
    audience: 'Businesses with repetitive work or data they want to put to use.',
    solves: 'Hours lost to repetitive tasks and processes that don’t scale.',
    faq: [['Will AI replace my team?', 'That isn’t the goal. We aim to remove repetitive work so your team can focus on the work that needs judgement.'], ['Is my data safe?', 'We discuss data handling before building, and can design for local or private processing where it matters.']] },
  { id: 'support', title: 'Maintenance and support',
    summary: 'Keep what you’ve built fast and working.',
    intro: 'Software needs care after launch. We keep your site or application updated, fast and working, and fix issues when they appear.',
    includes: ['Website maintenance', 'Performance improvements', 'Bug fixes', 'Technical updates', 'Ongoing support'],
    features: ['Regular updates and checks', 'Bug fixes and small changes', 'Speed and performance improvements', 'A single point of contact', 'Support for sites and apps we didn’t build'],
    audience: 'Owners of an existing site or app that needs care.',
    solves: 'Broken pages, slow loads and updates nobody has time for.',
    faq: [['Can you support a site you didn’t build?', 'Often yes. We review it first and tell you what it needs.'], ['What does monthly support cover?', 'Updates, fixes, checks and a point of contact. The exact scope is agreed in writing.']] },
];


export const process = [
  { title: 'Talk', text: 'You tell us what you need and who it’s for.' },
  { title: 'Plan', text: 'We agree scope, approach and timeline before building.' },
  { title: 'Build', text: 'We build in small steps you can review along the way.' },
  { title: 'Launch and support', text: 'We release it, then help keep it running well.' },
];

// DRAFT PRICES: business decisions, edit freely. Not researched against the market.
export const plans = [
  { id: 'starter', name: 'Starter', price: '₹15,000', note: 'starting from, one-time', service: 'websites', featured: false,
    blurb: 'A focused site to get you online.',
    features: ['Up to 3 pages', 'Mobile-responsive design', 'Contact form', 'Basic SEO setup', '1 round of revisions', 'Launch support'] },
  { id: 'business', name: 'Business', price: '₹35,000', note: 'starting from, one-time', service: 'websites', featured: true,
    blurb: 'A complete, custom-designed company website.',
    features: ['Up to 8 pages', 'Custom design in your brand', 'Contact form with spam protection', 'SEO setup and sitemap', 'Performance optimised', '2 rounds of revisions', '30 days of post-launch fixes'] },
  { id: 'custom', name: 'Custom', price: 'Custom quote', note: 'scoped after a short discovery call', service: 'web-apps', featured: false,
    blurb: 'Software built around how your business works.',
    features: ['Web apps, dashboards, internal systems', 'API development and integration', 'AI and automation features', 'Fixed quote before we start', 'Delivered in reviewable milestones'] },
];

export const beyond = [
  { title: 'Custom web applications', price: 'From ₹1,00,000', text: 'Business applications, portals and internal tools. You get a fixed quote before any work starts.', service: 'web-apps' },
  { title: 'CRM development', price: 'From ₹75,000', text: 'A tailored CRM for leads, customers and follow-ups, built around your sales process.', service: 'crm' },
  { title: 'ERP development', price: 'From ₹2,50,000', text: 'Built in phases, starting with the module that matters most. Each phase is quoted separately.', service: 'erp' },
  { title: 'AI and automation', price: 'From ₹50,000', text: 'Focused automations and AI features that save measurable time.', service: 'ai' },
  { title: 'Maintenance and support', price: 'From ₹3,000 / month', text: 'Updates, bug fixes, performance checks and a point of contact for your site or app.', service: 'support' },
];

export const techs = ['React', 'TypeScript', 'Node.js', 'Laravel', 'PHP', 'Python', 'Supabase', 'MongoDB', 'MySQL', 'WebSockets', 'WebRTC', 'Ollama'];

export const faqs: [string, string][] = [
  ['What does CREORBIS do?', 'We build websites, custom web applications, CRM and ERP systems, and AI and automation tools, and we maintain them after launch.'],
  ['How much does a project cost?', 'Websites have clear starting prices on the pricing page. Custom applications, CRM and ERP are quoted after a short discovery conversation, and you see the price before work begins.'],
  ['How long will it take?', 'It depends on scope. A small website is much quicker than an ERP. We agree a timeline in writing and build in steps you can review.'],
  ['Do you build CRM and ERP systems?', 'Yes. We build them tailored to your process, and we recommend phasing larger systems so you get value early.'],
  ['Do you use templates?', 'No. We code from scratch around your brand and needs.'],
  ['Can you fix or improve my existing website or app?', 'Often yes. We review it first and tell you honestly what it needs. See our maintenance and support service.'],
  ['Will I own what you build?', 'Ownership and payment terms are agreed in writing before work begins.'],
  ['Are domain and hosting costs included?', 'No. Domain names, hosting and third-party services are separate costs. We can help you choose and set them up.'],
  ['Do you offer support after launch?', 'Yes. Plans include a period of post-launch fixes, and ongoing maintenance is available separately.'],
  ['What do you need from me to start?', 'A short description of your goals and who the product is for, plus any examples you like. The Get started page has a full checklist.'],
  ['Can you add AI to my existing software?', 'Where it adds real value, yes. We’ll tell you plainly if a simpler solution is better.'],
];
