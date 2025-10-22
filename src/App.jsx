import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TrustedSection from './components/TrustedSection'
import StudentsTeachersSection from './components/StudentsTeachersSection'
import FAQSection from './components/FAQSection'
import ImportanceSection from './components/ImportanceSection'
import ExamTypesSection from './components/ExamTypesSection'
import OverviewSection from './components/OverviewSection'
import FeaturesSection from './components/FeaturesSection'
import DetailedFeaturesSection from './components/DetailedFeaturesSection'
import DetailedFeaturesListSection from './components/DetailedFeaturesListSection'
import ComparisonSection from './components/ComparisonSection'
import ServicesSection from './components/ServicesSection'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustedSection />
      <FeaturesSection />
      <DetailedFeaturesSection />
      <ComparisonSection />
      <ServicesSection />
      <ReviewsSection />
      <OverviewSection />
      <DetailedFeaturesListSection />
      <ImportanceSection />
      <ExamTypesSection />
      <StudentsTeachersSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App

