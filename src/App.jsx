import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Guide from './components/Guide'
import Services from './components/Services'
import CTABanner from './components/CTABanner'
import Features from './components/Features'
import Footer from './components/Footer'
import LoginForm from './components/auth/LoginForm'
import SignupForm from './components/auth/SignupForm'
import ForgotPasswordForm from './components/auth/ForgotPasswordForm'
import ChangePasswordForm from './components/auth/ChangePasswordForm'
import LargeWhite from './pages/pig-breeds/LargeWhite'
import Landrace from './pages/pig-breeds/Landrace'
import Duroc from './pages/pig-breeds/Duroc'
import Pietrain from './pages/pig-breeds/Pietrain'
import Camborough from './pages/pig-breeds/Camborough'
import Housing from './pages/farming-techniques/Housing'
import Feeding from './pages/farming-techniques/Feeding'
import ReproductionManagement from './pages/farming-techniques/ReproductionManagement'
import WasteManagement from './pages/farming-techniques/WasteManagement'
import FreeRangePigFarming from './pages/farming-techniques/FreeRangePigFarming'
import CommonDiseases from './pages/farming-techniques/CommonDiseases'
import HealthMonitoring from './pages/farming-techniques/HealthMonitoring'
import Vaccination from './pages/farming-techniques/Vaccination'
import VeterinaryServices from './pages/farming-techniques/VeterinaryServices'
import Biosecurity from './pages/farming-techniques/Biosecurity'
import PigFeedAndMedicine from './pages/medicine-supplies/PigFeedAndMedicine'
import VeterinaryMedicine from './pages/medicine-supplies/VeterinaryMedicine'
import EquipmentAndFarmSupplies from './pages/medicine-supplies/EquipmentAndFarmSupplies'
import NutritionalSupplements from './pages/medicine-supplies/NutritionalSupplements'
import PigHealthAndDevices from './pages/medicine-supplies/PigHealthAndDevices'
import AboutAndContact from './components/AboutUs'
import GovernmentPolicies from './pages/GovernmentPolicies'

function App() {
  const contactRef = React.useRef(null);
  const faqRef = React.useRef(null);

  // Provide a way for Navbar to trigger scroll to contact
  React.useEffect(() => {
    window.scrollToContactUs = () => {
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.scrollToFAQ = () => {
      if (faqRef.current) {
        faqRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return () => { 
      delete window.scrollToContactUs;
      delete window.scrollToFAQ;
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <Guide />
              <Services />
              <CTABanner />
              <Features />
            </>
          } />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/change-password" element={<ChangePasswordForm />} />
          <Route path="/pig-breeds/large-white" element={<LargeWhite />} />
          <Route path="/pig-breeds/landrace" element={<Landrace />} />
          <Route path="/pig-breeds/duroc" element={<Duroc />} />
          <Route path="/pig-breeds/pietrain" element={<Pietrain />} />
          <Route path="/pig-breeds/camborough" element={<Camborough />} />
          <Route path="/farming-techniques/housing" element={<Housing />} />
          <Route path="/farming-techniques/feeding" element={<Feeding />} />
          <Route path="/farming-techniques/reproduction-management" element={<ReproductionManagement />} />
          <Route path="/farming-techniques/waste-management" element={<WasteManagement />} />
          <Route path="/farming-techniques/free-range-pig-farming" element={<FreeRangePigFarming />} />
          <Route path="/farming-techniques/common-diseases" element={<CommonDiseases />} />
          <Route path="/farming-techniques/health-monitoring" element={<HealthMonitoring />} />
          <Route path="/farming-techniques/vaccination" element={<Vaccination />} />
          <Route path="/farming-techniques/veterinary-services" element={<VeterinaryServices />} />
          <Route path="/farming-techniques/biosecurity" element={<Biosecurity />} />
          <Route path="/medicine-supplies/pig-feed-and-medicine" element={<PigFeedAndMedicine />} />
          <Route path="/medicine-supplies/veterinary-medicine" element={<VeterinaryMedicine />} />
          <Route path="/medicine-supplies/equipment-and-farm-supplies" element={<EquipmentAndFarmSupplies />} />
          <Route path="/medicine-supplies/nutritional-supplements" element={<NutritionalSupplements />} />
          <Route path="/medicine-supplies/pig-health-and-devices" element={<PigHealthAndDevices />} />
          <Route path="/about" element={<AboutAndContact contactRef={contactRef} faqRef={faqRef} />} />
          <Route path="/government-policies" element={<GovernmentPolicies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
