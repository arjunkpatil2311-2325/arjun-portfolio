import { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { RestaurantBotDemo } from './components/RestaurantBotDemo';
import { ProcessSection } from './components/ProcessSection';
import { TechSection } from './components/TechSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Cafe & Restaurant Website');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'projects', 'bot-demo', 'process', 'tech', 'contact'];

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top is above middle of screen
          if (rect.top <= windowHeight * 0.4) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
  };

  const handleGetBotClick = () => {
    setSelectedServiceForContact('Restaurant WhatsApp Ordering Bot');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F5F5F7] relative selection:bg-[#9B7BFF]/30 selection:text-[#42D9FF]">
      {/* Desktop Custom Follower Cursor */}
      <CustomCursor />

      {/* Floating Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectServiceForContact={handleSelectService} />
        <FeaturedProjects />
        <RestaurantBotDemo onGetBotClick={handleGetBotClick} />
        <ProcessSection />
        <TechSection />
        <ContactSection preselectedService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
