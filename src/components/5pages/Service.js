import React from 'react';
import OfferCard from '../1atoms/OfferCard.js';
import dashboard from '../../img/illustrators/dashboard.png';
import accountImg from '../../img/generalImage/generalSectionInnerCardLogo1.png';
import screwImg from '../../img/generalImage/generalSectionInnerCardLogo2.png';

// generalSection righ division image (illustrator)

import applicationUI from '../../img/illustrators/applicationUI.png';
import diamondBottom from '../../img/illustrators/threeDiamondBottomLeft.png';

import dottedDesign from '../../img/illustrators/dottedDesign.png';
import hexagon from '../../img/generalImage/hexagon.png';
import savingUI1 from '../../img/generalImage/saving1.png';
import savingUI2 from '../../img/generalImage/saving2.png';
export default function Service() {
  return (
    <>
      <main id="servicePageMain">
        <img src={dottedDesign} className="dottedDesign" alt="" />
        <section className="offerCardsSection">
          <div className="containerCenter">
            <div className="contentBlock">
              <OfferCard circleColor="blueCircle" title=" Color 1 " />
              <OfferCard circleColor="redCircle" title="Color 2" />
              <OfferCard circleColor="greenCircle" title="Color 3" />
              <OfferCard circleColor="purpleCircle" title="Color 4" />
              <OfferCard circleColor="goldCircle" title="Color 5" />
            </div>
          </div>
        </section>

        <section id="generalDescriptionSection">
          <div className="containerCenter">
            <div className="contentBlock">
              <div id="leftSection">
                <h1>
                  Easy to sign up & can create <br /> account yourself
                </h1>

                <p>
                  Here you can create you account & login to your account easily
                  <br />
                  You can get details on Process Page too.
                </p>

                <section id="generealDescriptionSection_leftSection_innerCardContainer">
                  <div className="smallServiceCard">
                    <img src={accountImg} alt="" />
                    <h1>Easy Sign up</h1>
                    <p>
                      Our userfriendly interface allows you to create your
                      account easily.
                    </p>
                  </div>
                  <div className="smallServiceCard">
                    <img src={screwImg} alt="" />
                    <h1>Easy LogIn</h1>
                    <p>
                      Our userfriendly interface allows you to LogIn your
                      account easily.
                    </p>
                  </div>
                </section>
              </div>
              <div id="rightSection">
                <img src={applicationUI} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="bestFeatureSection">
          <img
            src={diamondBottom}
            id="bestFeatureSectionDiamondIllustrator"
            alt=""
          />
          <div className="containerCenter">
            <div className="contentBlock">
              <div className="bestFeatureCards cursor">
                <div className="iconContainer">
                  <div className="blueCircle"></div>
                </div>
                <h1>Flexible & Easy</h1>
                <p>Here you can find best services to use onlne at home</p>
              </div>
              <div className="bestFeatureCards cursor">
                <div className="iconContainer">
                  <div className="redCircle"></div>
                </div>
                <h1>Flexible & Easy</h1>
                <p>Here you can find best services to use onlne at home</p>
              </div>
              <div className="bestFeatureCards cursor">
                <div className="iconContainer">
                  <div className="greenCircle"></div>
                </div>
                <h1>Flexible & Easy</h1>
                <p>Here you can find best services to use onlne at home</p>
              </div>
              <div className="bestFeatureCards cursor">
                <div className="iconContainer">
                  <div className="purpleCircle"></div>
                </div>
                <h1>Flexible & Easy</h1>
                <p>Here you can find best services to use onlne at home</p>
              </div>
              <div className="bestFeatureCards cursor">
                <div className="iconContainer">
                  <div className="goldCircle"></div>
                </div>
                <h1>Flexible & Easy</h1>
                <p>Here you can find best services to use onlne at home</p>
              </div>
              <div className="bestFeatureCards cursor">
                <div className="iconContainer">
                  <div className="pinkCircle"></div>
                </div>
                <h1>Flexible & Easy</h1>
                <p>Here you can find best services to use onlne at home</p>
              </div>
            </div>
          </div>
        </section>
        <section id="dashboardSection">
          <div className="containerCenter">
            <div className="contentBlock">
              <img src={dashboard} alt="dashboard" />
            </div>
          </div>
        </section>

        <section
          className="serviceDescriptionSection"
          id="serviceDescriptionSection1"
        >
          <div className="leftSection">
            <img className="savingUI1" src={savingUI1} alt="" />
            <img className="savingUI2" src={savingUI2} alt="" />
          </div>
          <div className="rightSection">
            <div class="hexagon blueHexagon"> </div>

            <h1>
              We save client's
              <br />
              money in various services
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              maiores assumenda rem quibusdam fugiat corrupti eum delectus
              magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
              dolores vitae consequatur atque pariatur exercitationem saepe,
              sed, voluptas voluptate!
            </p>
          </div>
        </section>
        <section
          className="serviceDescriptionSection"
          id="serviceDescriptionSection2"
        >
          <div className="leftSection">
            <img className="savingUI1" src={savingUI1} alt="" />
            <img className="savingUI2" src={savingUI2} alt="" />
          </div>
          <div className="rightSection">
            <div class="hexagon redHexagon"> </div>
            <h1>
              We save client's
              <br />
              money in various services
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              maiores assumenda rem quibusdam fugiat corrupti eum delectus
              magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
              dolores vitae consequatur atque pariatur exercitationem saepe,
              sed, voluptas voluptate!
            </p>
          </div>
        </section>
        <section
          className="serviceDescriptionSection"
          id="serviceDescriptionSection1"
        >
          <div className="leftSection">
            <img className="savingUI1" src={savingUI1} alt="" />
            <img className="savingUI2" src={savingUI2} alt="" />
          </div>
          <div className="rightSection">
            <div class="hexagon greenHexagon"> </div>
            <h1>
              We save client's
              <br />
              money in various services
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              maiores assumenda rem quibusdam fugiat corrupti eum delectus
              magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
              dolores vitae consequatur atque pariatur exercitationem saepe,
              sed, voluptas voluptate!
            </p>
          </div>
        </section>

        <section
          className="serviceDescriptionSection"
          id="serviceDescriptionSection2"
        >
          <div className="leftSection">
            <img className="savingUI1" src={savingUI1} alt="" />
            <img className="savingUI2" src={savingUI2} alt="" />
          </div>
          <div className="rightSection">
            <div class="hexagon purpleHexagon"> </div>
            <h1>
              We save client's
              <br />
              money in various services
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              maiores assumenda rem quibusdam fugiat corrupti eum delectus
              magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
              dolores vitae consequatur atque pariatur exercitationem saepe,
              sed, voluptas voluptate!
            </p>
          </div>
        </section>

        <section
          className="serviceDescriptionSection"
          id="serviceDescriptionSection1"
        >
          <div className="leftSection">
            <img className="savingUI1" src={savingUI1} alt="" />
            <img className="savingUI2" src={savingUI2} alt="" />
          </div>
          <div className="rightSection">
            <div class="hexagon goldHexagon"> </div>
            <h1>
              We save client's
              <br />
              money in various services
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              maiores assumenda rem quibusdam fugiat corrupti eum delectus
              magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
              dolores vitae consequatur atque pariatur exercitationem saepe,
              sed, voluptas voluptate!
            </p>
          </div>
        </section>

        <section
          className="serviceDescriptionSection"
          id="serviceDescriptionSection2"
        >
          <div className="leftSection">
            <img className="savingUI1" src={savingUI1} alt="" />
            <img className="savingUI2" src={savingUI2} alt="" />
          </div>
          <div className="rightSection">
            <div class="hexagon pinkHexagon"> </div>
            <h1>
              We save client's
              <br />
              money in various services
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              maiores assumenda rem quibusdam fugiat corrupti eum delectus
              magni. Corrupti alias voluptatem dolorem iusto quia suscipit magni
              dolores vitae consequatur atque pariatur exercitationem saepe,
              sed, voluptas voluptate!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
