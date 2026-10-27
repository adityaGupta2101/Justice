import React from 'react';
import {
  ScalesIcon,
  ShieldCheckIcon,
  DocumentIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
} from './Icons';

export default function Hero({ onBookClick, onExploreClick }) {
  return (
    <section id="home" className="hero-section" aria-label="Hero Section">
      <div className="hero-bg-layer" aria-hidden="true" />
      <div className="hero-overlay-radial" aria-hidden="true" />

      <div className="container hero-grid">
        {/* Left Column: Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <ScalesIcon size={16} />
            <span>Advocate Ashutosh Pathak &bull; Legal Advisory</span>
          </div>

          <h1 className="hero-headline">
            Trusted Legal Guidance. <br />
            <span className="gold-text">Clearer Paths Forward.</span>
          </h1>

          <p className="hero-description">
            Dedicated legal consultation and strategic advisory tailored to your specific circumstances.
            Navigating complex legal matters with meticulous scrutiny, objective counsel, and uncompromised client confidentiality.
          </p>

          <div className="hero-ctas">
            <button
              type="button"
              onClick={onBookClick}
              className="btn btn-primary"
              id="hero-book-cta"
            >
              <span>Book a Consultation</span>
              <ArrowRightIcon size={16} />
            </button>

            <button
              type="button"
              onClick={onExploreClick}
              className="btn btn-outline"
              id="hero-explore-cta"
            >
              <span>Explore Legal Services</span>
            </button>
          </div>

          <div className="hero-trust-row">
            <div className="trust-item">
              <ShieldCheckIcon size={18} />
              <span>Client Confidentiality</span>
            </div>
            <div className="trust-item">
              <DocumentIcon size={18} />
              <span>Document Review</span>
            </div>
            <div className="trust-item">
              <ClockIcon size={18} />
              <span>Scheduled Advisory</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Pillar Card */}
        <div className="hero-visual-card">
          <div className="hero-visual-header">
            <div className="hero-visual-icon">
              <ScalesIcon size={26} />
            </div>
            <div>
              <h2 className="hero-visual-title" style={{ margin: 0, fontSize: '1.25rem' }}>
                Consultation Framework
              </h2>
              <span className="hero-visual-subtitle">
                Professional &bull; Methodical &bull; Objective
              </span>
            </div>
          </div>

          <div className="hero-pills-list">
            <div className="hero-pill-item">
              <div className="hero-pill-left">
                <span className="hero-pill-icon"><CheckCircleIcon size={16} /></span>
                <span>Pre-Consultation Matter Review</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-light)' }}>Phase 01</span>
            </div>

            <div className="hero-pill-item">
              <div className="hero-pill-left">
                <span className="hero-pill-icon"><CheckCircleIcon size={16} /></span>
                <span>Legal Strategy &amp; Rights Assessment</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-light)' }}>Phase 02</span>
            </div>

            <div className="hero-pill-item">
              <div className="hero-pill-left">
                <span className="hero-pill-icon"><CheckCircleIcon size={16} /></span>
                <span>Actionable Legal Notice or Relief Path</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-light)' }}>Phase 03</span>
            </div>
          </div>

          <div className="hero-visual-footer">
            <div>
              <span className="status-dot" aria-hidden="true" />
              <span>Consultation Inquiries Open</span>
            </div>
            <button
              type="button"
              onClick={onBookClick}
              className="btn-link"
              style={{ color: 'var(--color-gold-light)', fontSize: '0.82rem' }}
            >
              Request Slot &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
