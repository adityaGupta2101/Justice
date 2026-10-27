import React, { useState, useEffect } from 'react';
import { ScalesIcon, MenuIcon, XIcon, ArrowRightIcon } from './Icons';

export default function Header({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Demo Banner */}
      <div className="top-demo-banner" role="region" aria-label="Demo Notice">
        <span>
          <strong>DEMO PREVIEW:</strong> Legal Consultation &amp; Appointment Request Prototype for Advocate Ashutosh Pathak.
        </span>
        <a href="#consultation" onClick={closeMobileMenu}>Try Booking Form &rarr;</a>
      </div>

      {/* Main Sticky Header */}
      <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-inner">
          {/* Logo / Brand */}
          <a href="#home" className="brand-logo" aria-label="Advocate Ashutosh Pathak Homepage">
            <div className="brand-crest" aria-hidden="true">
              <ScalesIcon size={24} />
            </div>
            <div className="brand-text">
              <span className="brand-name">Ashutosh Pathak</span>
              <span className="brand-title">Advocate &bull; Legal Consultation</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#practice-areas" className="nav-link">Practice Areas</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#consultation" className="nav-link">Consultation</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="nav-actions">
            <button
              type="button"
              onClick={onBookClick}
              className="btn btn-primary btn-book-nav"
              id="header-book-btn"
            >
              <span>Book Appointment</span>
              <ArrowRightIcon size={16} />
            </button>

            <button
              type="button"
              className="menu-toggle"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Drawer */}
      <aside
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation Menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-header">
          <div className="brand-text">
            <span className="brand-name" style={{ fontSize: '1.2rem' }}>Ashutosh Pathak</span>
            <span className="brand-title">Advocate</span>
          </div>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
          >
            <XIcon size={22} />
          </button>
        </div>

        <nav className="mobile-drawer-links">
          <a href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home <span>&rarr;</span>
          </a>
          <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>
            About <span>&rarr;</span>
          </a>
          <a href="#practice-areas" className="mobile-nav-link" onClick={closeMobileMenu}>
            Practice Areas <span>&rarr;</span>
          </a>
          <a href="#process" className="mobile-nav-link" onClick={closeMobileMenu}>
            Consultation Process <span>&rarr;</span>
          </a>
          <a href="#consultation" className="mobile-nav-link" onClick={closeMobileMenu}>
            Book Appointment <span>&rarr;</span>
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            Contact Information <span>&rarr;</span>
          </a>
        </nav>

        <div>
          <button
            type="button"
            onClick={() => {
              closeMobileMenu();
              onBookClick();
            }}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem' }}
          >
            <span>Book Appointment</span>
            <ArrowRightIcon size={16} />
          </button>
          <p style={{ fontSize: '0.75rem', color: 'rgba(248, 246, 240, 0.5)', marginTop: '0.75rem', textAlign: 'center' }}>
            Static demo site for demonstration purposes.
          </p>
        </div>
      </aside>
    </>
  );
}
