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
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
