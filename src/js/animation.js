import { gsap, ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  const scroll = gsap.timeline();
  const programInfoList = gsap.utils.toArray('.programs__description');

  if (window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches) {
    scroll.to(programInfoList[0], {
      x: '115%',
      opacity: 1,
      scrollTrigger: {
        trigger: '.programs__info--street',
        start: 'top center',
        end: 'top center',
        scrub: true,
      },
    }).to(programInfoList[1], {
      x: '-115%',
      opacity: 1,
      scrollTrigger: {
        trigger: programInfoList[0],
        start: 'bottom center',
        end: 'bottom center',
        scrub: true,
      },
    }).to(programInfoList[2], {
      x: '115%',
      opacity: 1,
      scrollTrigger: {
        trigger: programInfoList[1],
        start: 'bottom center',
        end: 'bottom center',
        scrub: true,
      },
    }).to(programInfoList[3], {
      x: '-115%',
      opacity: 1,
      scrollTrigger: {
        trigger: programInfoList[2],
        start: 'bottom center',
        end: 'bottom center',
        scrub: true,
      },
    }).to(programInfoList[4], {
      x: '115%',
      opacity: 1,
      scrollTrigger: {
        trigger: '.programs__info--force',
        start: 'top center',
        end: 'top center',
        scrub: true,
      },
    })
  } else if (window.matchMedia('(min-width: 1280px)').matches) {
    scroll.to(programInfoList[0], {
      x: '130%',
      opacity: 1,
      scrollTrigger: {
        trigger: '.programs__info--street',
        start: 'top center',
        end: 'top center',
        scrub: true,
      },
    }).to(programInfoList[1], {
      x: '-130%',
      opacity: 1,
      scrollTrigger: {
        trigger: programInfoList[0],
        start: 'bottom center',
        end: 'bottom center',
        scrub: true,
      },
    }).to(programInfoList[2], {
      x: '130%',
      opacity: 1,
      scrollTrigger: {
        trigger: programInfoList[1],
        start: '650px center',
        end: '650px center',
        scrub: true,
      },
    }).to(programInfoList[3], {
      x: '-130%',
      opacity: 1,
      scrollTrigger: {
        trigger: programInfoList[2],
        start: '650px center',
        end: '650px center',
        scrub: true,
      },
    }).to(programInfoList[4], {
      x: '130%',
      opacity: 1,
      scrollTrigger: {
        trigger: '.programs__info--force',
        start: 'top center',
        end: 'top center',
        scrub: true,
      },
    })
  }
});
