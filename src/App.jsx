import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import ConsultationProcess from './components/ConsultationProcess';
import AppointmentForm from './components/AppointmentForm';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DisclaimerModal from './components/DisclaimerModal';

function App() {
  const [preselectedCategory, setPreselectedCategory] = useState(null);
  const [modalState, setModalState] = useState({ isOpen: false, type: 'disclaimer' });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    scrollToSection('consultation');
  };

  const handleExploreClick = () => {
    scrollToSection('practice-areas');
  };

  const handleSelectCategory = (categoryTitle) => {
    setPreselectedCategory(categoryTitle);
    scrollToSection('consultation');
  };

  const openDisclaimer = () => {
    setModalState({ isOpen: true, type: 'disclaimer' });
  };

  const openPrivacy = () => {
    setModalState({ isOpen: true, type: 'privacy' });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: 'disclaimer' });
  };

  return (
    <div className="site-wrapper">
      {/* Sticky Header with navigation and quick booking CTA */}
      <Header onBookClick={handleBookClick} />

      {/* Main Page Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onExploreClick={handleExploreClick}
        />

        {/* About the Advocate */}
        <About onBookClick={handleBookClick} />

        {/* Practice Areas */}
        <PracticeAreas onSelectCategory={handleSelectCategory} />

        {/* Consultation Process (3-step workflow) */}
        <ConsultationProcess onStartBooking={handleBookClick} />

        {/* Appointment Booking Form (Core functional demo) */}
        <AppointmentForm preselectedCategory={preselectedCategory} />

        {/* Why Choose This Consultation Experience (Service principles) */}
        <WhyChooseUs />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Chamber Coordinates & Contact Placeholders */}
        <Contact onBookClick={handleBookClick} />
      </main>

      {/* Footer with Legal Disclaimers & Statutory Compliance */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenDisclaimer={openDisclaimer}
        onOpenPrivacy={openPrivacy}
      />

      {/* Legal & Privacy Dialog Modal */}
      <DisclaimerModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        modalType={modalState.type}
      />
    </div>
  );
}

export default App;
