import React from 'react';
import card1Image from '../../img/generalImage/card1.png';
import card2Image from '../../img/generalImage/card2.png';
import card3Image from '../../img/generalImage/card3.png';
import card4Image from '../../img/generalImage/card4.png';

export default function DoubtSection() {
  return (
    <section id="doubtSectionMain">
      <main id="doubtSection">
        <div id="doubtSection_blob"></div>
        <div id="leftSection">
          <h4 className="poppins_light_300">
            What Makes <br />
            <b className="poppins_medium_500">Abian</b> The <br />
            <b className="poppins_medium_500"> Best Place</b> To Find
            <br /> <b className="poppins_medium_500">Services</b> In Nepal?
          </h4>
        </div>
        <div id="rightSection">
          <div className="upperBlock">
            <div className="doutCards" id="card1">
              <img src={card1Image} alt="" />
              <h4>Build With Latest Technology</h4>

              <p className="poppins_light_300">
                All Our Services Are Created With Trending Technologies.
              </p>
            </div>
            <div className="doutCards" id="card2">
              <img src={card2Image} alt="" />
              <h4>People Trust Us</h4>
              <p className="poppins_light_300">
                People trust us as we provide secure services to our clients.
              </p>
            </div>
          </div>
          <div className="upperBlock">
            <div className="doutCards" id="card3">
              <img src={card3Image} alt="" />
              <h4>Less Price</h4>
              <p className="poppins_light_300">
                All our services are up of high quality and promising low
                prices.
              </p>
            </div>
            <div className="doutCards" id="card4">
              <img src={card4Image} alt="" />
              <h4>Quality Services</h4>
              <p className="poppins_light_300">
                Our Team are 24/7 a day available to reach out to you for help.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
