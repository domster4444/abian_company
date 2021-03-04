import React from 'react';
import PartnerCard from '../1atoms/PartnerCard';

import partner1 from '../../img/partner/partner1.png';
// import partner2 from '../../img/partner/partner2.png';
export default function OurPartners() {
  return (
    <>
      <section id="partnerSectionMain" className=" ourPartnerSectionBg">
        <div className=" centerText ourPartnerSectionBg">
          <h1 className="poppins_light_300">Our Partners</h1>
          <h2 className="poppins_light_300">
            Leading insurers for your financial freedom
          </h2>
        </div>

        <section id="ourPartnerSection">
          <div className="containerCenter">
            <div className="contentBlock">
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />
              <PartnerCard logo={partner1} />

              {/* <PartnerCard logo={partner2} /> */}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
