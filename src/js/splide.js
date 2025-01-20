import Splide from '@splidejs/splide';
// import '@splidejs/splide/css/core';

const resultsSlider = new Splide('.results__slider', {
  classes: {
    pagination: 'splide__pagination slider__pagination',
    page: 'splide__pagination__page slider__pagination-page',
  },
  gap: '25px',
  mediaQuery: 'min',
  breakpoints: {
    1280: {
      perPage: 2,
      pagination: false,
      arrows: false,
      drag: false,
      cloneStatus: false,
      gap: '45px',
    },
    1360: {
      gap: '60px',
    }
  }
}).mount();

const programsSlider = new Splide('.programs__slider', {
  classes: {
    pagination: 'splide__pagination slider__pagination',
    page: 'splide__pagination__page slider__pagination-page',
  },
  gap: '25px',
  mediaQuery: 'min',
  breakpoints: {
    1280: {
      destroy: true,
  //     perPage: 4,
      pagination: false,
      arrows: false,
  //     drag: false,
    },
  },
}).mount();

// if (window.matchMedia("(min-width: 1080px)").matches) {
//   document.querySelector('.programs__slider').classList.remove('is-initialized');
// }
