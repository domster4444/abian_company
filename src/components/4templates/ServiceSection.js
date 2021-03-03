import React from 'react';
import ServiceCard from '../1atoms/ServiceCard';
import serviceLogo1 from '../../img/serviceLogo/serviceLogo1.png';
import serviceLogo2 from '../../img/serviceLogo/serviceLogo2.png';

export default function ServiceSection() {
  let serviceLogo = [serviceLogo1, serviceLogo2];

  return (
    <div className="containerCenter" id="serviceSection">
      <div className="contentBlock">
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>

        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo2}
            offername="Ambulance Service"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
      </div>
    </div>
  );
}
