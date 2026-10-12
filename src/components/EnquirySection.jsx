import React, { useState } from 'react';
import { ArrowRight, Check, AlertCircle, ShieldCheck, ClipboardCheck, Network } from 'lucide-react';
import '../styles/sections.css';

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    requirements: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationSuccess, setValidationSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = 'Enter a valid business email';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^[+]?[\d\s\-().]{7,20}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Enter a valid phone number';
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Please describe your business & financing requirements';
    } else if (formData.requirements.trim().length < 15) {
      newErrors.requirements = 'Please enter at least 15 characters describing your requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationSuccess(false);
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setValidationSuccess(false);
      return;
    }

    setIsSubmitting(true);

    // Client-side validation feedback without making unverified claims of remote delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setValidationSuccess(true);
    }, 400);
  };

  return (
    <section className="enquiry-section" id="enquiry">
      <div className="container">
        <div className="enquiry-container">
          {/* Left Column: Introduction & Reassurance */}
          <div className="enquiry-info">
            <span className="section-eyebrow">GET STARTED</span>
            <h2 className="section-title">
              Let's discuss your export finance needs.
            </h2>
            <p className="section-subtitle">
              Share details about your export orders, shipment timelines, and funding requirements. Our team will review your enquiry and discuss potential financing avenues.
            </p>

            <div className="enquiry-trust-points">
              <div className="enquiry-trust-point">
                <span className="enquiry-trust-icon">
                  <ClipboardCheck size={15} strokeWidth={2.4} />
                </span>
                <div className="trust-point-text">
                  <strong>Business enquiry review</strong>
                  <p>Evaluation of your order scale, shipment terms, and cash-flow gap.</p>
                </div>
              </div>

              <div className="enquiry-trust-point">
                <span className="enquiry-trust-icon">
                  <Network size={15} strokeWidth={2.4} />
                </span>
                <div className="trust-point-text">
                  <strong>Discussion of potentially suitable financing routes</strong>
                  <p>Exploration of pre-shipment, post-shipment, or invoice structures.</p>
                </div>
              </div>

              <div className="enquiry-trust-point">
                <span className="enquiry-trust-icon">
                  <ShieldCheck size={15} strokeWidth={2.4} />
                </span>
                <div className="trust-point-text">
                  <strong>Careful handling of submitted business information</strong>
                  <p>Treated confidentially in accordance with our applicable privacy standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="enquiry-form-card">
            {validationSuccess && (
              <div className="form-status-notice" role="status" aria-live="polite">
                <Check size={16} className="status-notice-icon" />
                <div>
                  <strong>Enquiry details validated.</strong>
                  <p>Client-side validation passed. Form is ready for backend integration upon deployment.</p>
                </div>
              </div>
            )}

            <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
                {/* 2-Column Row for Name & Company */}
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="form-label-req">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                      placeholder="Alex Vance"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                    {errors.fullName && (
                      <span className="form-error-msg" role="alert">
                        <AlertCircle size={12} /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="companyName" className="form-label">
                      Company Name <span className="form-label-req">*</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      className={`form-input ${errors.companyName ? 'input-error' : ''}`}
                      placeholder="Global Trade Ltd"
                      value={formData.companyName}
                      onChange={handleChange}
                      autoComplete="organization"
                      required
                    />
                    {errors.companyName && (
                      <span className="form-error-msg" role="alert">
                        <AlertCircle size={12} /> {errors.companyName}
                      </span>
                    )}
                  </div>
                </div>

                {/* 2-Column Row for Email & Phone */}
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="businessEmail" className="form-label">
                      Business Email <span className="form-label-req">*</span>
                    </label>
                    <input
                      id="businessEmail"
                      name="businessEmail"
                      type="email"
                      className={`form-input ${errors.businessEmail ? 'input-error' : ''}`}
                      placeholder="alex@company.com"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                    {errors.businessEmail && (
                      <span className="form-error-msg" role="alert">
                        <AlertCircle size={12} /> {errors.businessEmail}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone Number <span className="form-label-req">*</span>
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      className={`form-input ${errors.phoneNumber ? 'input-error' : ''}`}
                      placeholder="+91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                    />
                    {errors.phoneNumber && (
                      <span className="form-error-msg" role="alert">
                        <AlertCircle size={12} /> {errors.phoneNumber}
                      </span>
                    )}
                  </div>
                </div>

                {/* Full Width Textarea: Requirements */}
                <div className="form-group">
                  <label htmlFor="requirements" className="form-label">
                    Describe Your Export Business and Financing Requirements <span className="form-label-req">*</span>
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    className={`form-textarea ${errors.requirements ? 'input-error' : ''}`}
                    placeholder="Tell us about your products, buyer destinations, order size, and working capital needs."
                    rows="3"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                  />
                  {errors.requirements && (
                    <span className="form-error-msg" role="alert">
                      <AlertCircle size={12} /> {errors.requirements}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="form-submit-btn"
                  id="submit-enquiry-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Validating enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Export Finance Enquiry</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                {/* Privacy policy note */}
                <p className="form-privacy-note">
                  Your details are handled with discretion. By submitting, you agree to our{' '}
                  <a 
                    href="https://zth.co.in/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="form-privacy-link"
                  >
                    Privacy Policy
                  </a>.
                </p>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}
