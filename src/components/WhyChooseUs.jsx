import React from 'react';
import {
  ShieldCheckIcon,
  DocumentIcon,
  ClockIcon,
  SparklesIcon,
} from './Icons';

export default function WhyChooseUs() {
  const principles = [
    {
      title: 'Clear & Direct Communication',
      icon: SparklesIcon,
      desc: 'Legal statutes and remedies explained without impenetrable jargon. You receive straightforward legal options and procedural clarity from the outset.',
    },
    {
      title: 'Convenient Appointment Requests',
      icon: ClockIcon,
      desc: 'A modern, accessible intake experience allowing clients to submit matter summaries and request preferred consultation slots without unnecessary delays.',
    },
    {
      title: 'A Structured Consultation Process',
      icon: DocumentIcon,
      desc: 'Methodical review of documentation, preliminary factual evaluation, and systematic risk appraisal to identify the most viable path forward.',
    },
    {
      title: 'Confidential & Professional Handling',
      icon: ShieldCheckIcon,
      desc: 'Uncompromising discretion for every inquiry. Your matter discussions and shared documents are protected under professional legal privilege standards.',
    },
  ];

  return (
    <section className="why-section section-padding" aria-label="Consultation Principles">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Core Legal Principles</span>
          </div>
          <h2 className="section-title">
            Why Choose This Consultation Experience?
          </h2>
          <div className="gold-divider" aria-hidden="true" />
          <p className="section-subtitle">
            Our consultation practice is guided by foundational tenets of clarity, diligence, and complete confidentiality in client interaction.
          </p>
        </div>

        {/* Why Grid */}
        <div className="why-grid">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="why-card">
                <div className="why-card-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-subtle)', fontStyle: 'italic' }}>
            * Presented strictly as service delivery principles, without fabricated claims or ratings.
          </span>
        </div>
      </div>
    </section>
  );
}
