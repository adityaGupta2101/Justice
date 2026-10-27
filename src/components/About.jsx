import React from 'react';
import {
  ShieldCheckIcon,
  DocumentIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from './Icons';

export default function About({ onBookClick }) {
  return (
    <section id="about" className="about-section section-padding" aria-label="About the Advocate">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Portrait & Badge */}
          <div className="about-image-card">
            <div className="about-image-frame">
              <img
                src="/images/advocate-portrait.jpg"
                alt="Portrait representation of Advocate Ashutosh Pathak in professional legal chambers"
                className="about-portrait"
                loading="lazy"
              />
            </div>
            <div className="about-floating-badge">
              <div className="about-badge-title">Advocate Ashutosh Pathak</div>
              <div className="about-badge-desc">Legal Consultation Practice</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-gold-light)', marginTop: '0.35rem' }}>
                Placeholder Representation &bull; Editable
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="about-content">
            <div className="section-tag">
              <span>About The Advocate</span>
            </div>

            <h2 className="section-title">
              Principled Counsel &bull; Diligent Advocacy
            </h2>

            <p className="about-bio-lead">
              Providing focused legal consultation, document scrutiny, and strategic dispute advisory with a commitment to clarity, client privilege, and ethics.
            </p>

            <div className="about-paragraphs">
              <p>
                Navigating legal challenges requires more than statutory knowledge; it demands an objective understanding of each client’s unique scenario. Advocate Ashutosh Pathak offers a measured, structured approach to legal consultations—ensuring clients comprehend their legal rights, contractual commitments, and procedural remedies before initiating formal legal action.
              </p>
              <p>
                Every consultation is conducted with strict adherence to client confidentiality and transparency. Whether reviewing complex property deeds, addressing civil disputes, or preparing statutory legal notices, our emphasis remains on proactive conflict resolution and practical, well-grounded legal advice.
              </p>
            </div>

            {/* Principles Grid */}
            <div className="about-principles-grid">
              <div className="about-principle-card">
                <div className="about-principle-title">
                  <ShieldCheckIcon size={18} />
                  <span>Client Confidentiality</span>
                </div>
                <p className="about-principle-text">
                  All preliminary inquiries and consultation discussions are treated with the highest standard of professional privacy and privilege.
                </p>
              </div>

              <div className="about-principle-card">
                <div className="about-principle-title">
                  <DocumentIcon size={18} />
                  <span>Objective Legal Scrutiny</span>
                </div>
                <p className="about-principle-text">
                  Honest, evidence-backed evaluation of legal positions, avoiding unrealistic expectations or ungrounded litigation avenues.
                </p>
              </div>

              <div className="about-principle-card">
                <div className="about-principle-title">
                  <CheckCircleIcon size={18} />
                  <span>Transparent Communication</span>
                </div>
                <p className="about-principle-text">
                  Straightforward explanations of legal procedures, statutes, timeline expectations, and available alternate remedies.
                </p>
              </div>

              <div className="about-principle-card">
                <div className="about-principle-title">
                  <CheckCircleIcon size={18} />
                  <span>Accessible Scheduling</span>
                </div>
                <p className="about-principle-text">
                  Organized consultation sessions structured to afford ample time for thorough document review and client queries.
                </p>
              </div>
            </div>

            {/* CTA action using onBookClick */}
            <div style={{ marginBottom: '1.5rem' }}>
              <button
                type="button"
                onClick={onBookClick}
                className="btn btn-forest"
                id="about-schedule-cta"
              >
                <span>Schedule a Consultation Discussion</span>
                <ArrowRightIcon size={16} />
              </button>
            </div>

            {/* Placeholder Notice for Reviewer */}
            <div className="placeholder-notice" role="note">
              <AlertCircleIcon size={18} />
              <div>
                <strong>Editable Biography Notice:</strong> This profile reflects a sample professional introduction for client demonstration. Official chamber qualifications, bar council enrollment credentials, and academic background can be added upon the advocate's provision.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
