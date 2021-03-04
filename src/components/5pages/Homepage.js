import React from 'react';

import Header from '../1atoms/Header';
import HeroSection from '../4templates/HeroSection';
import ServiceSection from '../4templates/ServiceSection';
import AdditionalServiceSection from '../4templates/AdditionalServiceSection';
import OurPartner from '../4templates/OurPartner';
import CustomerChat from '../1atoms/CustomerChat';
import MessageBox from '../2molecules/MessageBox';
export default function Homepage() {
  return (
    <div id="homepage">
      <Header></Header>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <AdditionalServiceSection></AdditionalServiceSection>
      <OurPartner />

      <MessageBox />
      <CustomerChat></CustomerChat>
    </div>
  );
}
