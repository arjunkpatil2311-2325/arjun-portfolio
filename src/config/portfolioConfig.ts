// Portfolio Configuration & Contact Data
// Arjun can easily customize his phone number, email, and social profiles here.

export const PORTFOLIO_CONFIG = {
  name: 'ARJUN',
  title: 'Web Developer & Automation Creator',
  tagline: 'I BUILD DIGITAL EXPERIENCES THAT BUILD BUSINESSES.',
  subtagline: 'Premium websites, intelligent automation and AI-powered experiences for modern businesses.',
  
  // Contact Configuration (Arjun: replace with your real phone number and email!)
  contact: {
    // International format without '+' or spaces for WhatsApp (e.g. 919876543210)
    whatsappNumber: '919876543210', 
    displayPhone: '+91 98765 43210',
    email: 'hello@arjunbuilds.com',
    location: 'Available Globally / Remote',
    availability: 'Accepting New Projects for Q1/Q2',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com'
  },

  services: [
    {
      id: 'business-websites',
      number: '01',
      title: 'BUSINESS WEBSITES',
      tagline: 'High-converting digital presence',
      description: 'Custom, blazing-fast web experiences engineered to establish authority, captivate visitors, and convert casual browsers into high-ticket clients.',
      features: [
        'Modern, bespoke design (no generic templates)',
        'Responsive mobile-first fluid layout',
        'High-speed SEO & Core Web Vitals optimization',
        'Lead capture & instant enquiry delivery'
      ],
      badge: 'High Impact',
      accentColor: 'from-[#9B7BFF] to-[#7952F5]'
    },
    {
      id: 'cafe-restaurant',
      number: '02',
      title: 'CAFE & RESTAURANT WEBSITES',
      tagline: 'Tempting menus & direct orders',
      description: 'Specialized digital hubs for food & beverage businesses featuring mouth-watering food galleries, dynamic interactive menus, and friction-free customer ordering.',
      features: [
        'Dynamic visual digital menus with dietary filters',
        'Food & ambience showcase galleries',
        'Direct WhatsApp ordering (0% commission fees)',
        'Table reservation & event enquiry systems',
        'Google Maps & opening hours sync'
      ],
      badge: 'Popular for Cafes',
      accentColor: 'from-[#42D9FF] to-[#0099FF]'
    },
    {
      id: 'automation-bots',
      number: '03',
      title: 'AUTOMATION BOTS',
      tagline: '24/7 autonomous customer desk',
      description: 'Smart WhatsApp and web chatbots that handle orders, answer FAQs, share menus, and qualify leads round the clock without adding staff overhead.',
      features: [
        'WhatsApp automated customer enquiry bots',
        'Interactive instant digital menu dispatch',
        'Order calculation & kitchen dispatch webhook',
        'Instant FAQ answers (timings, parking, dietary)',
        'Seamless human escalation when required'
      ],
      badge: 'Top ROI',
      accentColor: 'from-[#9B7BFF] to-[#42D9FF]'
    },
    {
      id: 'ai-assistants',
      number: '04',
      title: 'AI BUSINESS ASSISTANTS',
      tagline: 'Bespoke intelligent workflows',
      description: 'Custom AI implementations trained on your exact business documentation, catalog, and customer history to provide natural, human-like answers.',
      features: [
        'Natural conversational customer interactions',
        'Knowledge base integration (PDFs, menus, docs)',
        'Automated lead intake & CRM sync',
        'Custom workflow triggers via APIs'
      ],
      badge: 'Next-Gen',
      accentColor: 'from-[#7952F5] to-[#9B7BFF]'
    }
  ],

  projects: [
    {
      id: 'hamperhub',
      title: 'HAMPERHUB',
      category: 'E-commerce / Custom Gift Builder',
      status: 'Active Development',
      isRealProject: true,
      badge: 'Flagship Project',
      summary: 'A personalized gifting platform where customers can explore products and build bespoke gift hampers with dynamic pricing, 3D box previews, and seamless checkout.',
      details: [
        'Interactive 3-step custom hamper builder with real-time price tally',
        'Curated selection of gourmet artisan snacks, treats, and luxury packaging',
        'Seamless cart state & checkout flow with personalized gift card notes',
        'Designed specifically for corporate gifting & festive seasons'
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'State Management', 'E-Commerce'],
      color: '#9B7BFF'
    },
    {
      id: 'cafe-digital',
      title: 'THE ARTISAN CAFE & ROASTERY',
      category: 'Restaurant Website Concept',
      status: 'Interactive Concept Demo',
      isRealProject: false,
      badge: 'Concept Showcase',
      summary: 'A premium digital experience for artisanal cafes and roasteries featuring interactive menus, ambience storytelling, customer reviews, and direct table booking.',
      details: [
        'Filterable menu with coffee roast profiles, tasting notes & allergens',
        'Mobile-optimized touch ordering interface with zero friction',
        'Direct integration to WhatsApp for instant customer inquiries',
        'Aesthetic dark-mode photography layouts engineered for high engagement'
      ],
      tags: ['Next-Gen UI', 'Responsive Design', 'Interactive Menu', 'WhatsApp Ready'],
      color: '#42D9FF'
    },
    {
      id: 'restaurant-automation',
      title: 'ORDERFLOW RESTAURANT BOT',
      category: 'Business Automation Concept',
      status: 'Architecture & Workflow Demo',
      isRealProject: false,
      badge: 'Automation Showcase',
      summary: 'An autonomous WhatsApp assistant concept designed for restaurants to eliminate missed customer calls, share instant menus, and capture takeout orders.',
      details: [
        'Automated replies for restaurant location, opening hours & table queries',
        'Generates formatted WhatsApp order receipts directly for the kitchen staff',
        'Zero commission fees compared to third-party delivery aggregators',
        'Built with webhook triggers, structured payload validation & error handling'
      ],
      tags: ['Automation', 'WhatsApp Bot', 'Webhooks', 'Business Logic'],
      color: '#A78BFA'
    }
  ],

  processSteps: [
    {
      step: '01',
      title: 'DISCOVER',
      subtitle: 'Clarifying the Vision',
      description: 'We analyze your business, customer friction points, menu or product catalog, and define the exact digital experience and automation that will drive measurable results.'
    },
    {
      step: '02',
      title: 'DESIGN',
      subtitle: 'Crafting the Aesthetic',
      description: 'Designing bespoke, ultra-modern layouts with smooth micro-interactions, responsive mobile interfaces, and clean conversational flows that match your brand identity.'
    },
    {
      step: '03',
      title: 'DEVELOP',
      subtitle: 'Building the Machine',
      description: 'Clean coding using high-performance modern tech (React, TypeScript, Tailwind, Three.js) and integrating robust WhatsApp and automation webhooks with real error handling.'
    },
    {
      step: '04',
      title: 'LAUNCH',
      subtitle: 'Delivering Excellence',
      description: 'Full deployment to fast global CDNs, domain setup, end-to-end device testing, WhatsApp bot live verification, and a clear walkthrough on managing your new system.'
    }
  ],

  technologies: [
    { name: 'React', category: 'Frontend', level: 'Core Stack', icon: 'Atom' },
    { name: 'TypeScript', category: 'Frontend', level: 'Core Stack', icon: 'Code2' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Core Stack', icon: 'Palette' },
    { name: 'Three.js / 3D', category: 'Creative 3D', level: 'Core Stack', icon: 'Box' },
    { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Core Stack', icon: 'FileCode' },
    { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Core Stack', icon: 'Layout' },
    { name: 'Firebase', category: 'Cloud & Data', level: 'Core Stack', icon: 'Flame' },
    { name: 'GitHub & CI/CD', category: 'Tools', level: 'Core Stack', icon: 'GitBranch' },
    { name: 'AI APIs', category: 'Automation', level: 'Core Stack', icon: 'Cpu' },
    { name: 'Automation & Webhooks', category: 'Automation', level: 'Core Stack', icon: 'Workflow' },
    { name: 'Next.js', category: 'Frontend', level: 'Exploring', icon: 'Sparkles' },
    { name: 'Node.js / Express', category: 'Backend', level: 'Exploring', icon: 'Server' }
  ]
};

