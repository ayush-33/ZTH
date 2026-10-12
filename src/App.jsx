import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChallengeSection from './components/ChallengeSection';
import FinancingRoutesSection from './components/FinancingRoutesSection';
import ProcessSection from './components/ProcessSection';
import SupportEcosystemSection from './components/SupportEcosystemSection';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root">
      {/* 1. Header & Navigation */}
      <Header />

      <main id="main-content">
        {/* 2. Export Finance Hero (Discover) */}
        <Hero />

        {/* 3. The Working-Capital Challenge (Understand) */}
        <ChallengeSection />

        {/* 4. Export Finance Options (Evaluate) */}
        <FinancingRoutesSection />

        {/* 5. How It Works (Evaluate) */}
        <ProcessSection />

        {/* 6. Who We Support and ZTH Ecosystem Integration (Evaluate & Context) */}
        <SupportEcosystemSection />

        {/* 7. Export Finance Enquiry Form (Take Action) */}
        <EnquirySection />
      </main>

      {/* 8. Existing ZTH Footer */}
      <Footer />
    </div>
  );
}

export default App;
