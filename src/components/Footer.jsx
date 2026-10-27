import React from 'react';
import { ScalesIcon } from './Icons';
import { PRACTICE_CATEGORIES, CONTACT_PLACEHOLDERS } from '../data/legalData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onSelectCategory, onOpenDisclaimer, onOpenPrivacy }) {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        {/* Top 4-Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="brand-crest" aria-hidden="true" style={{ width: '38px', height: '38px' }}>
                <ScalesIcon size={20} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-white)' }}>
                  Ashutosh Pathak
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  Advocate
                </div>
              </div>
            </div>

            <p className="footer-desc">
              Dedicated legal consultation and strategic advisory tailored to your circumstances. Principled advocacy, rigorous document analysis, and client confidentiality.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Advocate</a></li>
              <li><a href="#practice-areas" className="footer-link">Practice Areas</a></li>
              <li><a href="#process" className="footer-link">Consultation Process</a></li>
              <li><a href="#consultation" className="footer-link">Book Appointment</a></li>
              <li><a href="#contact" className="footer-link">Chamber Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h4 className="footer-col-title">Practice Areas</h4>
            <ul className="footer-links">
              {PRACTICE_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#consultation"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCategory(cat.title);
                    }}
                    className="footer-link"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Chamber Coordinates Placeholder */}
          <div>
            <h4 className="footer-col-title">Chamber Hours</h4>
            <p style={{ fontSize: '0.86rem', color: 'rgba(248, 246, 240, 0.75)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              {CONTACT_PLACEHOLDERS.officeHours}
            </p>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-gold-light)', marginTop: '0.5rem' }}>
              Consultations strictly by scheduled appointment.
            </div>
            <div style={{ marginTop: '1.25rem' }}>
              <a
                href="#consultation"
                className="btn btn-outline"
                style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
              >
                <span>Demo Booking Form &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="footer-disclaimer-box" role="note" aria-label="Statutory Legal Disclaimer">
          <div className="footer-disclaimer-title">
            Legal Disclaimer &bull; Bar Council of India Compliance
          </div>
          <p className="footer-disclaimer-text">
            As per the rules of the Bar Council of India, advocates are prohibited from advertising or soliciting work. The information provided on this website is solely intended for general informational purposes and does not constitute formal legal advice. Accessing this site or submitting an appointment request does not establish an advocate-client relationship. Visitors are advised to seek formal, independent legal counsel tailored to the specific facts of their case.
          </p>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {CURRENT_YEAR} Advocate Ashutosh Pathak. All rights reserved. (Demo static preview).
          </div>

          <div className="footer-bottom-links">
            <button
              type="button"
              onClick={onOpenDisclaimer}
              className="footer-bottom-link"
            >
              Legal Disclaimer
            </button>
            <span>&bull;</span>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="footer-bottom-link"
            >
              Privacy Notice
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
