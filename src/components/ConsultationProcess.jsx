import React from 'react';
import {
  DocumentIcon,
  CalendarIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
} from './Icons';

export default function ConsultationProcess({ onStartBooking }) {
  const steps = [
    {
      number: '01',
      title: 'Choose Consultation Type',
      icon: DocumentIcon,
      desc: 'Select the relevant legal practice domain—such as property, civil dispute, or agreement review—and outline your primary legal questions.',
    },
    {
      number: '02',
      title: 'Select Preferred Date & Time',
      icon: CalendarIcon,
      desc: 'Choose a suitable appointment date and morning or afternoon slot from the available chamber consultation schedule.',
    },
    {
      number: '03',
      title: 'Submit Appointment Request',
      icon: CheckCircleIcon,
      desc: 'Submit your request through our structured frontend intake to generate your demonstration consultation reference number.',
    },
  ];

  return (
    <section id="process" className="process-section section-padding" aria-label="Consultation Process">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag light">
            <span>Structured Advisory Workflow</span>
          </div>
          <h2 className="section-title light">
            The Consultation Process
          </h2>
          <div className="gold-divider" aria-hidden="true" />
          <p className="section-subtitle light">
            Designed to make scheduling legal consultations straightforward, transparent, and confidential in three simple steps.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="process-grid">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="process-card">
                <div className="process-number">
                  <span>{step.number}</span>
                  <div className="process-card-icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Demo Notice Banner */}
        <div className="process-notice-banner" role="region" aria-label="Process Demo Disclaimer">
          <AlertCircleIcon size={22} />
          <div className="process-notice-text">
            <strong>Demonstration Workflow Notice:</strong> This website illustrates the digital consultation appointment experience. Submitting an appointment request generates a client reference ID for testing purposes and does not schedule an actual live meeting with Advocate Ashutosh Pathak.
          </div>
        </div>

        {/* Quick CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button
            type="button"
            onClick={onStartBooking}
            className="btn btn-primary"
            id="process-start-cta"
          >
            <span>Proceed to Demo Booking</span>
            <ArrowRightIcon size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
