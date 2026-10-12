import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import '../styles/header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Logo & Export Finance: smoothly scroll to top if scrolled down, otherwise do nothing
  const handleScrollTop = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (window.scrollY > 10) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="site-header" id="top">
        <div className="header-container">
          {/* Logo - keeps user on Export Finance page, scrolls to top if scrolled */}
          <a 
            href="#top" 
            onClick={handleScrollTop}
            className="header-logo-link" 
            aria-label="ZTH Export Finance — Return to top"
          >
            <img 
              src="/zth-logo.png" 
              alt="ZTH Logo" 
              className="header-logo-img"
              width="124"
              height="36"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <a 
              href="https://zth.co.in/#pre-fundraising-light" 
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pre-Fundraising
            </a>
            <a 
              href="https://zth.co.in/#capital-network" 
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Capital Network
            </a>
            <a 
              href="https://zth.co.in/#partnership-advisory" 
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Partnership & Advisory
            </a>
            <a 
              href="https://zth.co.in/#investor-mock-room" 
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              SaaS
            </a>
            <a 
              href="https://zth.co.in/#zth-insider" 
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZTH Insider
            </a>
            {/* Active Export Finance link */}
            <a 
              href="#top" 
              className="nav-link active" 
              onClick={handleScrollTop}
              aria-current="page"
            >
              Export Finance
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="header-actions">
            {/* Explore ZTH: Main route to broader ZTH ecosystem */}
            <a 
              href="https://zth.co.in/" 
              className="btn-header-cta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore ZTH main website"
            >
              Explore ZTH
            </a>
            <a 
              href="https://zth.co.in/internal/login" 
              className="btn-header-os"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZTH OS portal login"
            >
              <ArrowUpRight size={14} />
              <span>ZTH OS</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div 
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <a 
            href="#top" 
            onClick={handleScrollTop}
            aria-label="ZTH Export Finance — Return to top"
          >
            <img 
              src="/zth-logo.png" 
              alt="ZTH Logo" 
              className="header-logo-img" 
              style={{ height: '30px' }}
            />
          </a>
          <button 
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          <li>
            <a 
              href="https://zth.co.in/#pre-fundraising-light" 
              className="mobile-nav-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Pre-Fundraising</span>
              <ArrowUpRight size={14} className="mobile-link-icon" />
            </a>
          </li>
          <li>
            <a 
              href="https://zth.co.in/#capital-network" 
              className="mobile-nav-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Capital Network</span>
              <ArrowUpRight size={14} className="mobile-link-icon" />
            </a>
          </li>
          <li>
            <a 
              href="https://zth.co.in/#partnership-advisory" 
              className="mobile-nav-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Partnership & Advisory</span>
              <ArrowUpRight size={14} className="mobile-link-icon" />
            </a>
          </li>
          <li>
            <a 
              href="https://zth.co.in/#investor-mock-room" 
              className="mobile-nav-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>SaaS</span>
              <ArrowUpRight size={14} className="mobile-link-icon" />
            </a>
          </li>
          <li>
            <a 
              href="https://zth.co.in/#zth-insider" 
              className="mobile-nav-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>ZTH Insider</span>
              <ArrowUpRight size={14} className="mobile-link-icon" />
            </a>
          </li>
          <li>
            <a 
              href="#top" 
              className="mobile-nav-link active"
              onClick={handleScrollTop}
            >
              <span>Export Finance</span>
              <span className="mobile-active-badge">Current</span>
            </a>
          </li>
        </ul>

        <div className="mobile-nav-actions">
          <a 
            href="https://zth.co.in/" 
            className="btn-header-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Explore ZTH
          </a>
          <a 
            href="https://zth.co.in/internal/login" 
            className="btn-header-os"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ArrowUpRight size={14} />
            <span>ZTH OS</span>
          </a>
        </div>
      </div>
    </>
  );
}
