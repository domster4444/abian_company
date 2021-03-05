import React from 'react';

import HeroSection from '../4templates/HeroSection';
import ServiceSection from '../4templates/ServiceSection';
import AdditionalServiceSection from '../4templates/AdditionalServiceSection';
import OurPartner from '../4templates/OurPartner';
import CustomerChat from '../1atoms/CustomerChat';
import MessageBox from '../2molecules/MessageBox';
import BackgroundBlob1 from '../1atoms/BackgroundBlob1';

import FeatCarousel from '../1atoms/FeatCarousel';
export default function Homepage() {
  return (
    <div id="homepage">
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <AdditionalServiceSection></AdditionalServiceSection>
      <FeatCarousel />
      <OurPartner />
      <MessageBox />
      <CustomerChat></CustomerChat>
      <BackgroundBlob1 />
    </div>
  );
}
