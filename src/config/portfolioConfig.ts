// Portfolio Configuration & Contact Data
// 3D E-Ink Edition for ARJUN

export const PORTFOLIO_CONFIG = {
  name: 'ARJUN',
  label: 'INDEPENDENT WEB DEVELOPER & AUTOMATION CREATOR',
  headline: 'I BUILD DIGITAL EXPERIENCES THAT BUILD BUSINESSES.',
  description: 'I create premium websites and intelligent automation experiences for modern businesses, cafes and restaurants.',
  
  // Contact Configuration
  contact: {
    whatsappNumber: '919876543210', // Replace with real phone number (international without '+' or spaces)
    displayPhone: '+91 98765 43210',
    email: 'hello@arjunbuilds.com',
    github: 'https://github.com/arjunkpatil2311-2325',
    instagram: 'https://instagram.com/arjunbuilds',
    availability: 'AVAILABLE FOR Q1/Q2',
  },

  // 3 Curated Editorial Services
  services: [
    {
      number: '01',
      title: 'WEB DEVELOPMENT',
      subtitle: 'Modern, responsive websites & digital experiences',
      description: 'Bespoke web architectures engineered with crisp typography, thoughtful motion, and sub-second performance. Built to command respect and convert visitors.',
      deliverables: [
        'Custom frontend engineering (React, TypeScript, Three.js)',
        'Mobile-first responsive layouts & editorial micro-details',
        'SEO, Core Web Vitals & lightweight asset pipelines',
        'Headless CMS & custom interactive configurators'
      ],
      tag: 'Core Discipline'
    },
    {
      number: '02',
      title: 'RESTAURANT DIGITAL SOLUTIONS',
      subtitle: 'Digital menus, websites & ordering interfaces',
      description: 'Dedicated digital ecosystems for cafes, roasteries, and dining venues. Eliminate 30% aggregator commissions with direct customer ordering and visual storytelling.',
      deliverables: [
        'Dynamic digital menus with tasting notes & dietary filters',
        'Ambient cafe photography & brand narrative layouts',
        'Friction-free WhatsApp ordering & table enquiry links',
        'Google Maps, opening hours & events integration'
      ],
      tag: 'Hospitality Focus'
    },
    {
      number: '03',
      title: 'BUSINESS AUTOMATION',
      subtitle: 'Automated support & WhatsApp enquiry workflows',
      description: 'Autonomous conversational systems that answer customer queries, dispatch menus, and capture incoming leads 24/7 so you can focus on core operations.',
      deliverables: [
        'WhatsApp customer enquiry & order dispatch bots',
        'Instant FAQ answers (timings, parking, dietary, pricing)',
        'Order enquiry formatting & kitchen webhook triggers',
        'Custom business knowledge base & CRM connections'
      ],
      tag: 'Zero Overhead'
    }
  ],

  // 3 Selected Projects
  projects: [
    {
      id: 'hamperhub',
      number: '01',
      title: 'HAMPERHUB',
      category: 'E-commerce / Custom Gift Builder',
      badge: 'REAL PROJECT • IN DEVELOPMENT',
      isReal: true,
      githubUrl: 'https://github.com/arjunkpatil2311-2325/hamperhub',
      summary: 'A personalized gifting platform where customers explore luxury goods and build bespoke gift hampers with real-time price calculations and custom packaging.',
      highlights: [
        'Interactive step-by-step custom hamper box customizer',
        'Dynamic inventory tallying and artisan treat curation',
        'Tailored for corporate gifting and festive luxury orders'
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'State Engine']
    },
    {
      id: 'restaurant-digital',
      number: '02',
      title: 'THE ARTISAN CAFE & ROASTERY',
      category: 'Restaurant Website Concept',
      badge: 'CONCEPT SHOWCASE',
      isReal: false,
      summary: 'An editorial digital showcase for specialty coffee and dining spaces, featuring interactive roast profiles, filterable seasonal menus, and table reservation flows.',
      highlights: [
        'Filterable digital menu with tasting notes & pricing',
        'Direct WhatsApp inquiry hooks with 0% platform cuts',
        'Tactile Swiss typography adapted for mobile dining guests'
      ],
      tech: ['Next-Gen UI', 'Interactive Menu', 'Mobile-First']
    },
    {
      id: 'restaurant-automation',
      number: '03',
      title: 'ORDERFLOW BOT',
      category: 'Interactive Bot Demo',
      badge: 'INTERACTIVE ARCHITECTURE DEMO',
      isReal: false,
      summary: 'An autonomous conversational assistant concept engineered for hospitality venues to eliminate missed phone calls and route customer orders directly to staff.',
      highlights: [
        'End-to-end simulated WhatsApp ordering engine',
        'Zero commission structure for independent food businesses',
        'Instant FAQ resolution for parking, menus, and reservations'
      ],
      tech: ['Automation', 'WhatsApp Bot', 'Webhooks']
    }
  ]
};
