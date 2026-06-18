import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import Education from './component/Education'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#111827] min-h-screen">
      <Header />
      <HeroSection />
      <Education />
    </div>
  )
}

export default App

