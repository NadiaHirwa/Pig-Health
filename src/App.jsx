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

function App() {
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
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
