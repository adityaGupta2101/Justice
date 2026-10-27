import React, { useState } from 'react';
import {
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  MailIcon,
  UserIcon,
  DocumentIcon,
} from './Icons';
import { CONSULTATION_TYPES, TIME_SLOTS } from '../data/legalData';

// Format today's date as YYYY-MM-DD for the HTML input min attribute and date comparison
const TODAY_DATE_STR = new Date().toISOString().split('T')[0];

const INITIAL_FORM_STATE = {
  fullName: '',
  mobileNumber: '',
  emailAddress: '',
  consultationType: 'Civil Law Consultation',
  appointmentDate: '',
  timeSlot: '10:00 AM – 11:30 AM (Morning Session)',
  matterDescription: '',
};

export default function AppointmentForm({ preselectedCategory }) {
  const [formData, setFormData] = useState(() => ({
    ...INITIAL_FORM_STATE,
    consultationType: preselectedCategory || INITIAL_FORM_STATE.consultationType,
  }));
  const [prevPropCategory, setPrevPropCategory] = useState(preselectedCategory);

  // Sync prop changes during render without cascading useEffect renders
  if (preselectedCategory && preselectedCategory !== prevPropCategory) {
    setPrevPropCategory(preselectedCategory);
    setFormData((prev) => ({
      ...prev,
      consultationType: preselectedCategory,
    }));
  }

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [touched, setTouched] = useState({});

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 3) return 'Please enter at least 3 characters.';
        return '';

      case 'mobileNumber': {
        if (!value.trim()) return 'Mobile number is required.';
        const cleanPhone = value.replace(/[\s\-()]/g, '');
        if (!/^[+]?[0-9]{10,14}$/.test(cleanPhone)) {
          return 'Enter a valid 10-digit mobile number.';
        }
        return '';
      }

      case 'emailAddress':
        if (!value.trim()) return 'Email address is required.';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim())) {
          return 'Please enter a valid email address (e.g. name@domain.com).';
        }
        return '';

      case 'consultationType':
        if (!value) return 'Please select a consultation type.';
        return '';

      case 'appointmentDate':
        if (!value) return 'Please select an appointment date.';
        if (value < TODAY_DATE_STR) {
          return 'Past dates are not available for booking. Select today or a future date.';
        }
        return '';

      case 'timeSlot':
        if (!value) return 'Please select a preferred time slot.';
        return '';

      case 'matterDescription':
        if (!value.trim()) return 'Please provide a brief summary of your legal query.';
        if (value.trim().length < 15) {
          return 'Please write at least 15 characters describing the key aspect of the matter.';
        }
        return '';

      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allTouched = {};
    Object.keys(formData).forEach((k) => {
      allTouched[k] = true;
    });
    setTouched(allTouched);

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic frontend response delay
    setTimeout(() => {
      const randomRef = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `AP-2026-${randomRef}`;

      setSubmissionResult({
        refNumber: generatedRef,
        ...formData,
        submittedAt: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      });

      setIsSubmitting(false);
    }, 550);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setTouched({});
    setSubmissionResult(null);
  };

  return (
    <section id="consultation" className="appointment-section section-padding" aria-label="Book Consultation Form">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Client Intake &bull; Frontend Demonstration</span>
          </div>
          <h2 className="section-title">
            Request a Legal Consultation
          </h2>
          <div className="gold-divider" aria-hidden="true" />
          <p className="section-subtitle">
            Provide preliminary details regarding your matter to request a scheduled discussion with Advocate Ashutosh Pathak.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="form-wrapper">
          {/* Prominent Demo Notice */}
          <div className="form-demo-alert" role="alert">
            <AlertCircleIcon size={20} />
            <span>
              <strong>Demo booking only.</strong> No real appointment has been created or confirmed. This frontend prototype illustrates the scheduling experience without submitting data to external servers.
            </span>
          </div>

          {!submissionResult ? (
            <form onSubmit={handleSubmit} noValidate id="legal-appointment-form">
              <div className="form-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    <span>Full Legal Name <span className="required-mark">*</span></span>
                    <UserIcon size={16} />
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Rajesh Kumar"
                    className={`form-input ${errors.fullName ? 'error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    autoComplete="name"
                  />
                  {errors.fullName && (
                    <div id="fullName-error" className="form-error-msg" role="alert">
                      <AlertCircleIcon size={14} />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="form-group">
                  <label htmlFor="mobileNumber" className="form-label">
                    <span>Mobile Number <span className="required-mark">*</span></span>
                    <PhoneIcon size={16} />
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. 9876543210"
                    className={`form-input ${errors.mobileNumber ? 'error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.mobileNumber}
                    aria-describedby={errors.mobileNumber ? 'mobileNumber-error' : undefined}
                    autoComplete="tel"
                  />
                  {errors.mobileNumber && (
                    <div id="mobileNumber-error" className="form-error-msg" role="alert">
                      <AlertCircleIcon size={14} />
                      <span>{errors.mobileNumber}</span>
                    </div>
                  )}
                  <div className="form-hint">Used strictly for consultation scheduling coordination.</div>
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="emailAddress" className="form-label">
                    <span>Email Address <span className="required-mark">*</span></span>
                    <MailIcon size={16} />
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. client@example.com"
                    className={`form-input ${errors.emailAddress ? 'error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.emailAddress}
                    aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
                    autoComplete="email"
                  />
                  {errors.emailAddress && (
                    <div id="emailAddress-error" className="form-error-msg" role="alert">
                      <AlertCircleIcon size={14} />
                      <span>{errors.emailAddress}</span>
                    </div>
                  )}
                </div>

                {/* Consultation Type */}
                <div className="form-group">
                  <label htmlFor="consultationType" className="form-label">
                    <span>Consultation Type <span className="required-mark">*</span></span>
                    <DocumentIcon size={16} />
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-select ${errors.consultationType ? 'error' : ''}`}
                    aria-required="true"
                  >
                    {CONSULTATION_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.consultationType && (
                    <div className="form-error-msg" role="alert">
                      <AlertCircleIcon size={14} />
                      <span>{errors.consultationType}</span>
                    </div>
                  )}
                </div>

                {/* Preferred Date */}
                <div className="form-group">
                  <label htmlFor="appointmentDate" className="form-label">
                    <span>Preferred Date <span className="required-mark">*</span></span>
                    <CalendarIcon size={16} />
                  </label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    min={TODAY_DATE_STR}
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input ${errors.appointmentDate ? 'error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.appointmentDate}
                    aria-describedby={errors.appointmentDate ? 'date-error' : undefined}
                  />
                  {errors.appointmentDate && (
                    <div id="date-error" className="form-error-msg" role="alert">
                      <AlertCircleIcon size={14} />
                      <span>{errors.appointmentDate}</span>
                    </div>
                  )}
                  <div className="form-hint">Past dates are automatically disabled.</div>
                </div>

                {/* Preferred Time Slot */}
                <div className="form-group">
                  <label htmlFor="timeSlot" className="form-label">
                    <span>Preferred Time Slot <span className="required-mark">*</span></span>
                    <ClockIcon size={16} />
                  </label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-select ${errors.timeSlot ? 'error' : ''}`}
                    aria-required="true"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.timeSlot && (
                    <div className="form-error-msg" role="alert">
                      <AlertCircleIcon size={14} />
                      <span>{errors.timeSlot}</span>
                    </div>
                  )}
                </div>

                {/* Brief Description */}
                <div className="form-group full">
                  <label htmlFor="matterDescription" className="form-label">
                    <span>Brief Description of Legal Matter <span className="required-mark">*</span></span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-subtle)', fontWeight: 400 }}>
                      Minimum 15 characters
                    </span>
                  </label>
                  <textarea
                    id="matterDescription"
                    name="matterDescription"
                    rows={4}
                    value={formData.matterDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Please summarize the general nature of your query, relevant documents in possession, and key outcomes desired (avoid confidential details)..."
                    className={`form-textarea ${errors.matterDescription ? 'error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.matterDescription}
                    aria-describedby={errors.matterDescription ? 'desc-error' : undefined}
                  />
                  {errors.matterDescription && (
                    <div id="desc-error" className="form-error-msg" role="alert">
                      <AlertCircleIcon size={14} />
                      <span>{errors.matterDescription}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action and Disclaimers */}
              <div className="form-action-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-submit"
                  id="submit-appointment-btn"
                >
                  {isSubmitting ? (
                    <span>Processing Demo Request...</span>
                  ) : (
                    <>
                      <span>Submit Appointment Request (Demo)</span>
                      <ArrowRightIcon size={18} />
                    </>
                  )}
                </button>

                <p className="form-footer-disclaimer">
                  Submission does not establish an advocate-client relationship. All demo inquiries remain simulated and no external communication or payment is triggered.
                </p>
              </div>
            </form>
          ) : (
            /* Success State Card */
            <div className="success-card" role="status" aria-live="polite">
              <div className="success-icon-badge" aria-hidden="true">
                <CheckCircleIcon size={40} />
              </div>

              <h3 className="success-title">
                Consultation Request Generated
              </h3>

              <p className="success-subtitle">
                Your frontend demo appointment request has been simulated successfully.
              </p>

              {/* Demo Reference Badge */}
              <div className="success-ref-box">
                <div className="success-ref-label">Demo Reference Number</div>
                <div className="success-ref-number">{submissionResult.refNumber}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(248, 246, 240, 0.75)', marginTop: '0.4rem' }}>
                  Generated on {submissionResult.submittedAt}
                </div>
              </div>

              {/* Submitted Details Summary */}
              <div className="success-details-list">
                <div className="success-detail-row">
                  <span className="success-detail-label">Client Name</span>
                  <span className="success-detail-value">{submissionResult.fullName}</span>
                </div>
                <div className="success-detail-row">
                  <span className="success-detail-label">Consultation Domain</span>
                  <span className="success-detail-value">{submissionResult.consultationType}</span>
                </div>
                <div className="success-detail-row">
                  <span className="success-detail-label">Requested Date</span>
                  <span className="success-detail-value">{submissionResult.appointmentDate}</span>
                </div>
                <div className="success-detail-row">
                  <span className="success-detail-label">Time Slot</span>
                  <span className="success-detail-value">{submissionResult.timeSlot}</span>
                </div>
                <div className="success-detail-row">
                  <span className="success-detail-label">Contact Coordinates</span>
                  <span className="success-detail-value">
                    {submissionResult.mobileNumber} &bull; {submissionResult.emailAddress}
                  </span>
                </div>
                <div className="success-detail-row" style={{ flexDirection: 'column', gap: '0.3rem' }}>
                  <span className="success-detail-label">Matter Brief</span>
                  <span className="success-detail-value" style={{ fontWeight: 400, color: 'var(--color-charcoal)' }}>
                    &ldquo;{submissionResult.matterDescription}&rdquo;
                  </span>
                </div>
              </div>

              {/* Explicit Demo Disclaimer Box */}
              <div
                style={{
                  backgroundColor: 'rgba(197, 164, 109, 0.1)',
                  border: '1px dashed var(--color-gold)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem',
                  maxWidth: '580px',
                  margin: '0 auto 2rem auto',
                  fontSize: '0.85rem',
                  color: 'var(--color-charcoal)',
                }}
              >
                <strong>Demo Notice:</strong> No real appointment has been created or confirmed. The advocate has not received this data and no calendar invite has been scheduled.
              </div>

              {/* Actions */}
              <div className="success-actions">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-primary"
                  id="book-another-btn"
                >
                  <span>Submit Another Request</span>
                  <ArrowRightIcon size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn btn-outline-dark"
                >
                  <span>Print Reference Slip</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
