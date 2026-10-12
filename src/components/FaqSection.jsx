import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/sections.css';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: 'What is export finance?',
      answer:
        'Export finance encompasses specialized financial mechanisms designed to assist cross-border businesses in managing the capital gap between producing and delivering goods to overseas buyers and receiving final payment. Common instruments include pre-shipment advances, invoice discounting, and receivables factoring.',
    },
    {
      question: 'When might an exporter need working-capital support?',
      answer:
        'Exporters frequently require liquidity when fulfilling large or unexpected international orders, securing raw materials in bulk, covering freight and export duties, or accommodating overseas buyer requests for 30, 60, or 90-day deferred credit terms.',
    },
    {
      question: 'What information should I prepare before submitting an enquiry?',
      answer:
        'Helpful details include your company incorporation information, export track record, details on the confirmed order or Letter of Credit, buyer profile and geography, shipment milestones, and the approximate working-capital gap you wish to bridge.',
    },
    {
      question: 'Does submitting an enquiry guarantee financing?',
      answer:
        'No. Submitting an enquiry initiates an initial review and consultation with our advisory team. Any eventual financing is subject to formal partner evaluation, credit underwriting, counterparty risk checks, compliance validation, and terms agreed upon between the borrower and institutional financing partners.',
    },
    {
      question: 'How can I discuss potentially suitable financing routes?',
      answer:
        'You can complete the enquiry form below on this page. Once submitted, our team reviews your export parameters and reaches out directly to arrange an introductory discussion regarding potential avenues through our capital and advisory network.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="faq-header">
          <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">
            Clear answers for cross-border trade.
          </h2>
          <p className="section-subtitle">
            Find essential information regarding export finance structures, requirements, and consultation pathways.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="faq-accordion" role="region" aria-label="Export Finance FAQ">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className={`faq-arrow-icon ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`faq-answer-container ${isOpen ? 'show' : ''}`}
                >
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
