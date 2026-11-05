import { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { RestaurantBotDemo } from './components/RestaurantBotDemo';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState('Restaurant Digital Solutions');

  useEffect(() => {
    const sectionIds = ['home', 'services', 'projects', 'bot-demo', 'contact'];

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
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

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handleGetBotClick = () => {
    setSelectedService('Business Automation');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F1EB] text-[#111111] relative selection:bg-[#7555FF] selection:text-white eink-paper-bg">
      {/* Desktop E-Ink Tactile Cursor */}
      <CustomCursor />

      {/* Minimal Sticky Swiss Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Curated Sections */}
      <main id="main-content">
        <HeroSection />
        <ServicesSection onSelectService={handleSelectService} />
        <FeaturedProjects />
        <RestaurantBotDemo onGetBotClick={handleGetBotClick} />
        <ContactSection preselectedService={selectedService} />
      </main>

      {/* Swiss Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
