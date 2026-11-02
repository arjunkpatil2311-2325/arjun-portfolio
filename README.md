# ARJUN — Premium 3D Creative Developer & Automation Portfolio

An award-winning, agency-grade personal portfolio website tailored for **Arjun (Web Developer & Automation Creator)** to attract cafes, restaurants, food businesses, and modern brands.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📱 How to Customize Your Contact Details & WhatsApp Number

Open `src/config/portfolioConfig.ts` to customize:

```typescript
export const PORTFOLIO_CONFIG = {
  name: 'ARJUN',
  contact: {
    // International format without '+' or spaces (e.g., 919876543210 for India, 1234567890 for US)
    whatsappNumber: '919876543210', 
    displayPhone: '+91 98765 43210',
    email: 'hello@arjunbuilds.com',
    location: 'Available Globally / Remote',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
  // ...
};
```

---

## 🌟 Highlights & Sections Built

1. **Floating Glassmorphic Navbar**: Real-time section spy, status pill ("Available for Projects"), mobile responsive slide-in menu.
2. **Hero Section & Three.js 3D Centerpiece**: Floating glass polyhedron, metallic orbital rings, glowing core, stardust particle cloud, pointer parallax, and smooth rotation.
3. **About Capabilities**: 01 Design, 02 Development, 03 Automation cards with micro-details and specific cafe ROI metrics.
4. **Services Showcase**: Business Websites, Cafe & Restaurant Websites, Automation Bots, AI Business Assistants with interactive feature previews and service inquiry preselection.
5. **Featured Projects**:
   - **HamperHub** (E-commerce / Custom Gift Builder): Flagship real project under development with an embedded interactive 3-step hamper builder simulator.
   - **The Artisan Cafe & Roastery**: Restaurant website concept with live digital menu category filtering.
   - **OrderFlow Restaurant Bot**: Business automation concept with visual pipeline architecture.
6. **Showstopper: Interactive WhatsApp Restaurant Bot Demo**:
   - Fully interactive phone mockup for **The Urban Cafe**.
   - Quick-reply buttons (`View Menu`, `Opening Hours`, `Location`, `Order Enquiry`, `Table Enquiry`, `Call Staff`).
   - Interactive menu items with "+ Add to Order" and live receipt calculation.
   - Free-form text input with intelligent keyword recognition.
7. **From Idea to Live Experience (Process)**: 4-step animated timeline (01 Discover, 02 Design, 03 Develop, 04 Launch).
8. **Technology Arsenal**: Categorized stack with honest indicators for Production vs Exploring.
9. **Contact & WhatsApp Dispatch**: Real validation, auto-generated pre-filled WhatsApp inquiry link, and celebration confetti.
10. **Agency Footer**: Real-time live clock (IST / Remote), direct SVGs, and back-to-top button.
