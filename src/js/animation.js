import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';

const resultsSlider = new Splide('.results__slider', {
  classes: {
    pagination: 'splide__pagination slider__pagination',
    page: 'splide__pagination__page slider__pagination-page',
  },
  gap: '25px',
}).mount();

const programsSlider = new Splide('.programs__slider', {
  classes: {
    pagination: 'splide__pagination slider__pagination',
    page: 'splide__pagination__page slider__pagination-page',
  },
  gap: '25px',
}).mount();
