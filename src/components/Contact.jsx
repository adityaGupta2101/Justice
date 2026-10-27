import React from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  ArrowRightIcon,
  AlertCircleIcon,
} from './Icons';
import { CONTACT_PLACEHOLDERS } from '../data/legalData';

export default function Contact({ onBookClick }) {
  return (
    <section id="contact" className="contact-section section-padding" aria-label="Chamber Contact Information">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag light">
            <span>Chamber Coordinates</span>
          </div>
          <h2 className="section-title light">
            Consultation &amp; Office Inquiries
          </h2>
          <div className="gold-divider" aria-hidden="true" />
          <p className="section-subtitle light">
            Connect with Advocate Ashutosh Pathak for scheduled legal advisories, case evaluations, and document scrutiny.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Coordinates */}
          <div>
            <div className="contact-info-list">
              {/* Office Address */}
              <div className="contact-info-card">
                <div className="contact-icon-box" aria-hidden="true">
                  <MapPinIcon size={22} />
                </div>
                <div>
                  <div className="contact-info-title">Chamber / Office Location</div>
                  <div className="contact-info-val">{CONTACT_PLACEHOLDERS.officeAddress}</div>
                  <span className="contact-placeholder-tag">Editable Placeholder</span>
                </div>
              </div>

              {/* Contact Number */}
              <div className="contact-info-card">
                <div className="contact-icon-box" aria-hidden="true">
                  <PhoneIcon size={22} />
                </div>
                <div>
                  <div className="contact-info-title">Consultation Desk &amp; Helpline</div>
                  <div className="contact-info-val">{CONTACT_PLACEHOLDERS.contactNumber}</div>
                  <span className="contact-placeholder-tag">Editable Placeholder</span>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-card">
                <div className="contact-icon-box" aria-hidden="true">
                  <MailIcon size={22} />
                </div>
                <div>
                  <div className="contact-info-title">Electronic Correspondence</div>
                  <div className="contact-info-val">{CONTACT_PLACEHOLDERS.emailAddress}</div>
                  <span className="contact-placeholder-tag">Editable Placeholder</span>
                </div>
              </div>

              {/* Office Hours */}
              <div className="contact-info-card">
                <div className="contact-icon-box" aria-hidden="true">
                  <ClockIcon size={22} />
                </div>
                <div>
                  <div className="contact-info-title">Consultation &amp; Chamber Hours</div>
                  <div className="contact-info-val">{CONTACT_PLACEHOLDERS.officeHours}</div>
                  <span className="contact-placeholder-tag">Editable Placeholder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Intake Card */}
          <div className="contact-direct-card">
            <h3 className="contact-direct-title">
              Request a Prior Appointment
            </h3>
            <p className="contact-direct-desc">
              To ensure focused attention and adequate time for reviewing case papers, consultations are scheduled strictly by prior appointment.
            </p>

            <button
              type="button"
              onClick={onBookClick}
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: '1.25rem' }}
              id="contact-book-cta"
            >
              <span>Go to Appointment Request Form</span>
              <ArrowRightIcon size={16} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'rgba(248, 246, 240, 0.6)' }}>
              <AlertCircleIcon size={14} />
              <span>Contact details will be populated upon official onboarding.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
