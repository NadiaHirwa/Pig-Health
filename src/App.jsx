import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Guide from './components/Guide'
import Services from './components/Services'
import CTABanner from './components/CTABanner'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <Guide />
      <Services />
      <CTABanner />
      <Features />
      <Footer />
    </div>
  )
}

export default App
