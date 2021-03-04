import React from 'react';
import AdditionalServiceCard from '../1atoms/AdditionalServiceCard';

export default function AdditionalService() {
  return (
    <div id="AdditionalServiceSection">
      <div className="containerCenter">
        <div className="contentBlock">
          <h1 className="blueText poppins_semibold_500">ALSO BUY</h1>
        </div>
      </div>

      <div className="containerCenter">
        <div className="contentBlock " id="additionalServiceCardContainer">
          <AdditionalServiceCard />
          <AdditionalServiceCard />
          <AdditionalServiceCard />
          <AdditionalServiceCard />
          <AdditionalServiceCard />
        </div>
      </div>
    </div>
  );
}
