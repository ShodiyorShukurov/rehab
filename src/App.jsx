import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import VideoModal from './pages/VideoSection';
import FeaturesSection from './pages/FeaturesSection';
import Features from './pages/FeaturesSection1';
import ServicesSection from './pages/ServicesSection';
import DoctorsSection from './pages/DoctorsSection';
import BookingBanner from './pages/BookingBanner';
import Testimonials from './pages/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VideoModal />
        <FeaturesSection />
        {/* <Features /> */}
        {/* <ServicesSection /> */}
        {/* <DoctorsSection /> */}
        {/* <Testimonials /> */}
        {/* <BookingBanner /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
