import React, { useState } from 'react';
import { ChevronDownIcon, AlertCircleIcon } from './Icons';
import { FAQS } from '../data/legalData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding" aria-label="Frequently Asked Questions">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Client Clarifications</span>
          </div>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <div className="gold-divider" aria-hidden="true" />
          <p className="section-subtitle">
            Essential information regarding consultation requests, matter preparation, and the appointment booking experience.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-container">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div key={faq.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-chevron" aria-hidden="true">
                      <ChevronDownIcon size={18} />
                    </span>
                  </button>
                </h3>

                <div
                  id={faqId}
                  role="region"
                  aria-labelledby={headerId}
                  className="faq-answer"
                  style={{
                    maxHeight: isOpen ? '450px' : '0px',
                    transition: 'max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Reminder */}
        <div style={{ maxWidth: '800px', margin: '2rem auto 0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-subtle)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <AlertCircleIcon size={14} />
            <span>Have additional procedural queries? Use the demo consultation form or reach out through the contact placeholders below.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
