import React from 'react';
import firstGroupCompany from '../../img/partner/partner1.png';
import secondGroupCompany from '../../img/partner/partner2.png';
export default function GroupCompaniesListSection() {
  return (
    <section className="containerCenter" id="groupCompaniesListSection">
      <div className="contentBlock" id="groupCompaniesListSection">
        <div id="leftSection">
          <div className="companyCard poppins_regular_400">Group Companies</div>
        </div>

        <div id="rightSection">
          <div className="companyCard poppins_light_300">
            <img src={firstGroupCompany} alt="" />
          </div>
          <div className="companyCard poppins_light_300">
            <img src={secondGroupCompany} alt="" />
          </div>
          <div className="companyCard poppins_light_300">
            <img src={firstGroupCompany} alt="" />
          </div>
          <div className="companyCard poppins_light_300">
            <img src={secondGroupCompany} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
