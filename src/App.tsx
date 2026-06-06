// import React from 'react'
import { useEffect } from 'react';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import ProductSection from './ProductSection';
import AOS from 'aos';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import DeliveryInformation from './DeliveryInformation';
import OrderSection from './OrderSection';
import Footer from './Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false,
      offset: 40,
      delay: 0,
      anchorPlacement: 'top-bottom',
    });
  }, []);

    return (
    <div className='bg-[#F2F1E9] scroll-smooth'>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <About/>
      <WhyChooseUs/>
      <DeliveryInformation/>
      <OrderSection/>
      <Footer/>
    </div>
  );
};

export default App;