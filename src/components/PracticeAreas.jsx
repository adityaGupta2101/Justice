import React from 'react';
import { ArrowRightIcon, AlertCircleIcon } from './Icons';
import { PRACTICE_CATEGORIES } from '../data/legalData';

export default function PracticeAreas({ onSelectCategory }) {
  return (
    <section id="practice-areas" className="practice-section section-padding" aria-label="Legal Practice Areas">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Areas of Legal Advisory</span>
          </div>
          <h2 className="section-title">
            Illustrative Practice &amp; Consultation Areas
          </h2>
          <div className="gold-divider" aria-hidden="true" />
          <p className="section-subtitle">
            Providing structured legal assessments, document vetting, and pre-litigation advisories across key domains of civil and commercial law.
          </p>
        </div>

        {/* Practice Cards Grid */}
        <div className="practice-grid">
          {PRACTICE_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="practice-card">
                <div>
                  <div className="practice-icon-wrapper" aria-hidden="true">
                    <Icon size={26} />
                  </div>
                  <span className="practice-tag">{cat.tag}</span>
                  <h3 className="practice-title" style={{ marginTop: '0.4rem' }}>
                    {cat.title}
                  </h3>
                  <p className="practice-desc">{cat.description}</p>
                </div>

                <div className="practice-footer">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(cat.title)}
                    className="btn-link"
                    aria-label={`Book consultation for ${cat.title}`}
                  >
                    <span>Book Consultation</span>
                    <ArrowRightIcon size={16} />
                  </button>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-subtle)' }}>
                    Initial Advisory
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practice Disclaimer Note */}
        <div className="practice-disclaimer-note" role="note">
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <AlertCircleIcon size={16} />
            <span>
              <strong>Sample Categories:</strong> The above practice areas are presented for demonstration and illustrative consultation purposes only. Individual engagement terms and scope are determined upon formal mutual consent.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
