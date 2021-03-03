import React from 'react';

import Header from '../1atoms/Header';
import HeroSection from '../4templates/HeroSection';
import ServiceSection from '../4templates/ServiceSection';

export default function Homepage() {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
    </div>
  );
}
