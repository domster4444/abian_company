import React from 'react';

export default function FeatCarousel() {
  return (
    <>
      <div
        class="carousel"
        data-flickity='{ "freeScroll": true, "wrapAround": true,"prevNextButtons": false,"autoPlay": 1500 }'
      >
        <div class="carousel-cell">Carousel 1</div>
        <div class="carousel-cell">Carousel 2</div>
        <div class="carousel-cell">Carousel 3</div>
        <div class="carousel-cell">Carousel 4</div>
        <div class="carousel-cell">Carousel 5</div>
      </div>
    </>
  );
}
