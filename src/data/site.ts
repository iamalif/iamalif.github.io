// Public facts used across the site. Approved wording only.
export const site = {
  name: 'Al Amin Alif',
  title: 'Head of Development & AI',
  lead: 'Bringing together technical project management, automation and hands-on data science.',
  place: 'Based in Borlänge, Sweden. Completing an MSc in Data Science at Dalarna University, expected January 2028.',
  availability: 'Open to opportunities in Sweden',
  authorisation: 'Legally permitted to work in Sweden',
  email: 'alamin.alif.7@gmail.com',
  phone: '+46 72 209 91 30',
  linkedin: 'https://www.linkedin.com/in/al-amin-alif/',
  github: 'https://github.com/iamalif',
  description:
    'Head of Development & AI in Borlänge, Sweden. Technical delivery leadership, AI and automation delivery, and hands-on data science.',
};

export const nav = [
  { label: 'Work', path: 'work/' },
  { label: 'Projects', path: 'projects/' },
  { label: 'Skills', path: '#skills' },
  { label: 'About', path: 'about/' },
  { label: 'CV', path: 'cv/' },
];

// Expanded header menus for Work and Projects. Area links use the existing group anchors on the index pages
// (see IndexList: `#g-` plus the group name in lowercase with hyphens). Every destination is also reachable
// without JavaScript from the Work and Projects index pages.
export const menus: Record<string, { areas: { label: string; text: string; path: string }[]; featured: { label: string; path: string }[]; all: { label: string; path: string } }> = {
  Work: {
    areas: [
      { label: 'AI and automation', text: 'AI products and workflow automation', path: 'work/#g-ai-and-automation' },
      { label: 'Platforms and integrations', text: 'Portals, integrations and platform delivery', path: 'work/#g-platforms-and-integrations' },
      { label: 'Web, analytics and CRM', text: 'Websites, analytics and CRM work', path: 'work/#g-web-analytics-and-crm' },
    ],
    featured: [
      { label: 'PerformanceX', path: 'work/performancex/' },
      { label: 'Sales Automation', path: 'work/ai-sales-automation/' },
      { label: 'CJP', path: 'work/cjp/' },
    ],
    all: { label: 'View all professional work', path: 'work/' },
  },
  Projects: {
    areas: [
      { label: 'Data and machine learning', text: 'Applied machine learning and statistics', path: 'projects/#g-applied-machine-learning-and-statistics' },
      { label: 'Software and Python', text: 'Python applications and coursework', path: 'projects/#g-software-and-python' },
      { label: 'Research and data quality', text: 'Environmental disclosure, data collection and quality, and the Calibration Gap proposal', path: 'projects/#g-featured-technical-work' },
    ],
    featured: [
      { label: 'Job-Ad Explorer', path: 'projects/job-ad-explorer/' },
      { label: 'Monte Carlo', path: 'projects/monte-carlo/' },
      { label: 'GeoLife', path: 'projects/geolife/' },
    ],
    all: { label: 'View all projects', path: 'projects/' },
  },
};

// Homepage "Skills and capabilities". Personal contribution is explained on each project page, not here.
export const capabilities: { title: string; text: string; links: { label: string; path: string }[] }[] = [
  {
    title: 'Technical delivery and leadership',
    text: 'Requirements, prioritisation, sprint coordination, QA, stakeholder management and release readiness.',
    links: [
      { label: 'PerformanceX', path: 'work/performancex/' },
      { label: 'Client Access Portal', path: 'work/client-access-portal/' },
      { label: 'Sales Automation', path: 'work/ai-sales-automation/' },
    ],
  },
  {
    title: 'AI and automation',
    text: 'Agent-assisted workflows, workflow automation, prompt engineering and AI-output evaluation, supported by practical experience with AI-assisted development tools.',
    links: [
      { label: 'PerformanceX', path: 'work/performancex/' },
      { label: 'Sales Automation', path: 'work/ai-sales-automation/' },
      { label: 'Job-Ad Explorer', path: 'projects/job-ad-explorer/' },
    ],
  },
  {
    title: 'Data and machine learning',
    text: 'Python, R, SQL, data quality, modelling and simulation, from independent and academic projects.',
    links: [
      { label: 'Job-Ad Explorer', path: 'projects/job-ad-explorer/' },
      { label: 'Monte Carlo', path: 'projects/monte-carlo/' },
      { label: 'GeoLife', path: 'projects/geolife/' },
      { label: 'Data collection and quality', path: 'projects/data-collection-and-quality/' },
    ],
  },
  {
    title: 'Platforms and integrations',
    text: 'CRM implementation, workflow configuration and technical delivery across web platforms, APIs and analytics.',
    links: [
      { label: 'CJP', path: 'work/cjp/' },
      { label: 'Client Access Portal', path: 'work/client-access-portal/' },
      { label: 'Magnificent Mile', path: 'work/magnificent-mile/' },
      { label: 'Kilwins', path: 'work/kilwins/' },
    ],
  },
];

export const now = [
  { role: 'Head of Development & AI', org: 'Digital Authority Partners', dates: 'Jun 2024 to present', tag: 'Now' },
  { role: 'AI Engineering & Automation Lead', org: 'PerformanceX', dates: 'Jul 2025 to present', tag: 'Also now' },
  { role: 'MSc Data Science', org: 'Dalarna University', dates: 'Jan 2026 to Jan 2028 (expected)', tag: 'Studying' },
];

export const career = [
  { org: 'Digital Authority Partners', role: 'Head of Development & AI / Technical Project Manager', dates: 'Jun 2024 to present' },
  { org: 'PerformanceX', role: 'AI Engineering & Automation Lead / Technical Project Manager', dates: 'Jul 2025 to present' },
  { org: 'Inbouncy', role: 'Head of Service Delivery', dates: 'Jun 2019 to May 2024' },
  { org: 'OneLittleWeb', role: 'Junior Account Manager', dates: 'Jul 2021 to Jan 2023' },
];

export const education = [
  { org: 'Dalarna University', role: 'MSc Data Science, 120-credit programme (in progress)', dates: 'Jan 2026 to Jan 2028 (expected)' },
  { org: 'BRAC University', role: 'BSc Computer Science and Engineering', dates: '2014 to 2019' },
];

// Skill groups shared by the CV and the About page.
export const skillGroups: { g: string; t: string }[] = [
  { g: 'AI and automation', t: 'AI agents, generative AI, prompt engineering, AI output evaluation, workflow automation, n8n, Zapier, Make' },
  { g: 'Data and machine learning', t: 'Python, R, SQL, PostgreSQL, pandas, NumPy, scikit-learn, feature engineering, model evaluation, text mining, Monte Carlo simulation' },
  { g: 'Analytics', t: 'Power BI, DAX, data modelling, dashboards, data quality, REST APIs, Streamlit' },
  { g: 'Delivery and leadership', t: 'Technical project management, Agile and Scrum, requirements and acceptance criteria, QA, stakeholder and risk management, mentoring' },
  { g: 'Delivery environments', t: 'HubSpot, WordPress, Shopify, Zoho, Google Analytics 4, Google Tag Manager, Google Cloud Run, Supabase, Vercel' },
];

export const focus = ['AI agents', 'Automation', 'Python', 'SQL', 'Data analysis', 'Machine learning', 'Technical delivery'];
