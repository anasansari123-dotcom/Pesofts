import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import PricingPage from './pages/PricingPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen">
              <Header />
              <main>
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
              </main>
              <Footer />
            </div>
          } />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App

