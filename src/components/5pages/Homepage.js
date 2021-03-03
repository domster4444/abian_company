import React from 'react';

import Header from '../1atoms/Header';
import HeroSection from '../4templates/HeroSection';
import ServiceSection from '../4templates/ServiceSection';
import CustomerChat from '../1atoms/CustomerChat';
import MessageBox from '../2molecules/MessageBox';
export default function Homepage() {
  return (
    <div id="homepage">
      <Header></Header>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>

      <MessageBox />
      <CustomerChat></CustomerChat>
    </div>
  );
}
