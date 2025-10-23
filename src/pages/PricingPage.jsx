import React from 'react';
import Header from '../components/Header';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default PricingPage;
