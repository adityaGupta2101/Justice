import React from 'react';
import { XIcon, ShieldCheckIcon } from './Icons';

export default function DisclaimerModal({ isOpen, onClose, modalType }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldCheckIcon size={20} />
            <h3 id="modal-title" className="modal-title">
              {modalType === 'privacy' ? 'Privacy Policy & Data Notice' : 'Legal Disclaimer & Bar Council Compliance'}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal dialog"
          >
            <XIcon size={20} />
          </button>
        </div>

        <div className="modal-body">
          {modalType === 'privacy' ? (
            <>
              <p>
                <strong>Frontend Demonstration Prototype Notice:</strong>
                <br />
                This website is a static demonstration prototype created for client presentation. No personal information submitted via the demo appointment form is transmitted to external servers, shared with third parties, or stored in any database or cloud repository.
              </p>
              <p>
                <strong>Confidentiality in Legal Consultations:</strong>
                <br />
                When an actual consultation is conducted by Advocate Ashutosh Pathak, all discussions, case records, and client documents are governed by professional legal privilege under the provisions of the Indian Evidence Act and the Advocates Act, 1961.
              </p>
              <p>
                <strong>No Cookie Tracking:</strong>
                <br />
                This demo website does not deploy advertising trackers, profiling cookies, or external analytics scripts.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Bar Council of India Disclaimer:</strong>
                <br />
                As per the rules framed by the Bar Council of India, advocates are strictly prohibited from soliciting work or advertising their legal services in any form or manner.
              </p>
              <p>
                <strong>General Informational Purpose Only:</strong>
                <br />
                The information provided on this website is for general informational and educational guidance purposes only and should not be construed as legal advice. Visiting this website or submitting an appointment inquiry does not create an advocate-client relationship.
              </p>
              <p>
                <strong>Independent Legal Counsel:</strong>
                <br />
                Users should not act or refrain from acting based on any content included on this website without seeking appropriate legal or professional advice tailored to the particular facts and circumstances of their individual matter.
              </p>
              <p>
                <strong>Client-Initiated Inquiry:</strong>
                <br />
                By navigating this website and accessing the appointment booking interface, the user acknowledges that they are doing so voluntarily of their own volition and that there has been no solicitation, advertisement, or inducement by Advocate Ashutosh Pathak.
              </p>
            </>
          )}
        </div>

        <div className="modal-footer">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-forest"
          >
            <span>Understood &amp; Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
