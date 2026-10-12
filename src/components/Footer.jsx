import React from 'react';
import { ArrowRight, ArrowUpRight, ArrowUp } from 'lucide-react';
import '../styles/footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEnquiry = (e) => {
    e.preventDefault();
    const el = document.getElementById('enquiry');
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Let's Create Together */}
          <div className="footer-col-cta">
            <span className="footer-eyebrow">LET'S WORK TOGETHER</span>
            <h2 className="footer-display-title">
              Let's <span className="serif-highlight">Create</span><br />
              Together
            </h2>
            {/* Talk to ZTH scrolls to the enquiry form on the current Export Finance page */}
            <a 
              href="#enquiry" 
              onClick={scrollToEnquiry}
              className="footer-cta-btn"
              id="footer-talk-cta"
            >
              <span>Talk to ZTH</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Column 2: Contact */}
          <div className="footer-col">
            <h3 className="footer-col-head">Contact</h3>
            
            <div className="footer-contact-group">
              <span className="footer-contact-label">Email</span>
              <a href="mailto:zth@zth.co.in" className="footer-contact-val">
                zth@zth.co.in
              </a>
            </div>

            <div className="footer-contact-group">
              <span className="footer-contact-label">Phone</span>
              <a href="tel:+917219422299" className="footer-contact-val">
                +91 72194 22299
              </a>
              <a href="tel:+919356617639" className="footer-contact-val">
                +91 93566 17639
              </a>
              <a href="tel:+919834602007" className="footer-contact-val">
                +91 98346 02007
              </a>
            </div>
          </div>

          {/* Column 3: Navigate */}
          <div className="footer-col">
            <h3 className="footer-col-head">Navigate</h3>
            <ul className="footer-links-list">
              <li>
                <a 
                  href="https://zth.co.in/#pre-fundraising-light" 
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Pre-Fundraising</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a 
                  href="https://zth.co.in/#capital-network" 
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Capital Network</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a 
                  href="https://zth.co.in/#partnership-advisory" 
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Partnership & Advisory</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a 
                  href="https://zth.co.in/#investor-mock-room" 
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>SaaS</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a 
                  href="https://zth.co.in/#zth-insider" 
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>ZTH Insider</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a 
                  href="#top" 
                  className="footer-link highlight-export"
                  onClick={scrollToTop}
                >
                  <span>Export Finance (Current)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow */}
          <div className="footer-col">
            <h3 className="footer-col-head">Follow</h3>
            <ul className="footer-links-list">
              <li>
                <a 
                  href="https://in.linkedin.com/company/zth2" 
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/Zthsass" 
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>X</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/" 
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-bottom-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="footer-brand">ZTH</span>
            <span className="footer-copy">© {CURRENT_YEAR} ZTH, Inc. All rights reserved.</span>
            <a 
              href="https://zth.co.in/privacy" 
              className="footer-privacy-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </div>

          <button 
            onClick={scrollToTop} 
            className="footer-back-top-btn"
            aria-label="Back to top of page"
            type="button"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
