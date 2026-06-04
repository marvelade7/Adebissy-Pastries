// import React from 'react'
import { useEffect } from 'react';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import ProductSection from './ProductSection';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
      delay: 0,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection />
    </>
  );
};

export default App;