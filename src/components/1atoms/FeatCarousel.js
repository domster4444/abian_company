import React from 'react';

import carouselIcon1 from '../../img/carouselIcon/first.png';
import carouselIcon2 from '../../img/carouselIcon/second.png';
import carouselIcon3 from '../../img/carouselIcon/third.png';
import carouselIcon4 from '../../img/carouselIcon/fourth.png';
import carouselIcon5 from '../../img/carouselIcon/fifth.png';
export default function FeatCarousel() {
  return (
    <>
      <div
        class="carousel"
        data-flickity='{ "freeScroll": true, "wrapAround": true,"prevNextButtons": false,"autoPlay": 1500 }'
      >
        <div class="carousel-cell" id="firstCard">
          <img src={carouselIcon1} alt="" />
          Carousel 1
        </div>
        <div class="carousel-cell" id="secondCard">
          <img src={carouselIcon2} alt="" />
          Carousel 2
        </div>
        <div class="carousel-cell" id="thirdCard">
          <img src={carouselIcon3} alt="" />
          Carousel 3
        </div>
        <div class="carousel-cell" id="fourthCard">
          <img src={carouselIcon4} alt="" />
          Carousel 3
        </div>
        <div class="carousel-cell" id="fifthCard">
          <img src={carouselIcon5} alt="" />
          Carousel 3
        </div>
      </div>
    </>
  );
}
