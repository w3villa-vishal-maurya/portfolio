import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import AboutSection from './component/AboutSection'
import Certificates from './component/Certificates'
import Testimonial from './component/Testimonial'
import MyProjects from './component/MyProjects'
import Contact from './component/Contact'
import MobileNav from './component/MobileNav'


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Certificates/>
      <Testimonial/>
      <MyProjects/>
      <Contact/>
      <MobileNav/>
    </>
  )
}

export default App