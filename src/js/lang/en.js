import {page} from '../main.js';
import {goLang} from '../switchLang.js';
import {ruBtn, enBtn} from './ru.js';

const enIndex = {
  about: 'About me',
  intro: 'Become a master of Streetlifting and Workout!',
  programs: 'Programs',
  street: 'Streetlifting',
  force: 'Muscle Ups',
};

const enIndexImg = [
  'img/programs/en/street/lvl1.jpg',
  'img/programs/en/street/lvl2.jpg',
  'img/programs/en/street/lvl3.jpg',
  'img/programs/en/street/lvl4.jpg',
  'img/programs/en/force/lvl1.jpg',
  'img/programs/en/force/lvl2.jpg',
];

const enPrice = [
  '20',
  '25',
  '30',
  '35',
  '25',
  '30',
];

const enFaq = {
  faq: 'Frequently Asked Questions:',
  questions: [
    'What age group is each program appropriate for?',
    'What results can be achieved in six months or a year of training?',
    'Are these programs suitable for gaining muscle mass?',
    'What is included in these programs? What do I get if I buy one of these programs?',
    'Where to train? What equipment do I need for training?',
    'Do you give any guarantees that I or my friends will get results training on your programs?',
    'Did you develop these programs yourself?',
    'When I buy the course, do I get anything else?',
    'What should I do if I want a refund?',
  ],
  answers: [
    'All programs are suitable for all ages except the Intermediate and Advanced levels of Streetlifting and the Advanced level of Power Trips. They are only suitable for athletes over the age of 18.',
    'It depends on what level you are at right now, and it also depends specifically on the individual characteristics of each person. Genetics, lifestyle, nutrition, and sleep have a lot to do with it.',
    'The purpose of these programs is specifically Stretlifting, Power Exits and Static Elements of Gymnastics. That is to increase the strength performance. To some extent, it all has an impact on muscle mass gain, especially in the initial stages of training.',
    'You will get a PDF file in which everything you need to know how to train at any of the levels, and specifically is the training program itself, that is the scheme of progress, the plan, call it what you want. Also in addition in programs there will be links to videos with analysis of exercises and general recommendations on training.',
    'You can work out wherever you want. You can go to the gym, but for streetlifting there is unlikely to be good equipment. Therefore it is best to create your own training corner. To do this will need a horizontal bar, bars, a belt with a rope or chain and extra weight of pancakes from 50 to 150 kg total weight. It is best to use thin powerlifter discs.',
    'The only guarantee we really have is that we will all die sooner or later. The rest is irrelevant. Just kidding. I guarantee you that by training with my program youll get exactly the result you want! The most important thing is that not only the program works, but also you! It should follow all the tips I wrote, then you will soon notice the progress. Good luck!',
    'Yes, the training programs are developed by me personally, and are my intellectual property. If you have any requests to distribute the programs, or to cooperate - write to me by e-mail or on Telegram.',
    'Yes, in addition to the program you get access to a closed Telegram-channel, where you can communicate with like-minded people and with me.',
    'There are no refunds. Why? The point is that you know what you pay for, and in the case of a refund, I have no way to take away your access to the program you have already received, which you get FOREVER. However, if there are any problematic questions about the payment - write to me by e-mail or on Telegram.',
  ]
};

const enAbout = {
  title: 'About me',
  subtitles: [
    'Who am I?',
    'About others',
    'Results',
  ],
  descriptions: [
    'Im just a guy who loves Streetlifting and Calisthenics with all his soul! And I also love to teach it to those who are willing to give it their all. My experience in training is a little over 10 years, during that time I have gone through fire and water, ups and downs, at times I progressed quickly, and sometimes even quit training for a long time. But only now I understand that all this way was worth it: where I was then and where I am now are two completely different people, both mentally and physically. When I was a kid in 2012 I got into the idea of training with my own weight, I began to learn tricks on the bar and chinning bar, I was searching for knowledge about training and soon after a decade I have put all my knowledge together and I share it with you in my new training programs. I wanted to be the strongest! I wanted more from myself! And if I had known then how to properly eat, train, recover and progress, I would have reached the current level 2 times faster and I would be 2 times stronger now!',
    'You know what I dont like most of all about the standard modern training methods? It is that all of them are so perverted that it is almost impossible to become stronger with them, a lot of incomprehensible training schemes, some diets, etc. only confuse me and do not give almost anything of value. And I also trained like everyone else, my progress lasted up to a certain level, then got stuck, and I didnt understand what to do with it next. My potential was at such an incredible height, but there was no specific knowledge of what to do with it. And only training with additional weights in a Classical Stretlifting helped me to realize this potential and progress further, to become stronger and stronger!',
    'These are the results of years of self-study and analysis of their mistakes, you can avoid them by studying my program and reach the heights in a shorter time!',
  ],
  resultA: 'My result ten years ago:',
  resultAInfo: {
    a: '8-10 pull-ups with your own weight',
    b: '15-20 push-ups from the floor',
  },
  resultB: 'My score right now is on 1 repeat:',
  resultBInfo: {
    a: 'Pulling up on the bar with extra weight +100kg',
    b: 'Push-up on uneven bars with additional weight +140 kg',
    c: 'Power output on the chinning bar and the rings +40kg',
  },
};

const enProgramInfo = {
  img: [
    'img/programs/en/covers/street1.jpg',
    'img/programs/en/covers/street2.jpg',
    'img/programs/en/covers/street3.jpg',
    'img/programs/en/covers/street4.jpg',
    'img/programs/en/covers/force1.jpg',
    'img/programs/en/covers/force2.jpg',
  ],
  intro: [
    'The program of the zero level is designed for those who want to train, but do not know where to start.',
    'This program is designed for entry-level athletes who are just starting to train with additional weights.',
    'The intermediate level means that you have completely exhausted the potential of entry-level programs. That load is no longer enough for you, so other methods of progression will be included in the work.',
    'The Advanced Level program is only for athletes who have a high strength performance on one repetition. Now your goal is to use all of your past training volume that you have built up over several years in high intensity.',
    'This entry-level program is designed for lifters who already have a minimum base in pull-ups and push-ups on the uneven bars with extra weight. In this guide, you will learn the technique of the exercise and increase the number of repetitions per approach.',
    'This advanced level program is necessary for athletes who want to train power outputs with extra weight and learn other variations of power outputs to truly become a Master of Power Outputs!',
  ],
  subtitles: [
    'Required data for this programm:',
    'Goal for this programm:',
  ],
  items: [
    [
      'Pull-ups on the bar: 0 reps',
      'Push-ups from the floor or Dips: 0 rep',
      'Floor push-ups 25 reps with +15kg',
      'Pull-ups 15 reps and one rep with +30kg',
      'Dip one rep with +50kg',
    ],
    [
      'Floor push-ups 25 reps with +15kg',
      'Pull-ups 15 reps and one rep with +30kg',
      'Dip one rep with +50kg',
      'Pull-up +70kg x1 rep',
      'Dip +100kg x1 rep',
    ],
    [
      'Pull-up +70kg x1 rep',
      'Dip +100kg x1 rep',
      'Pull-up +100kg x1 rep',
      'Dip +150kg x1 rep',
    ],
    [
      'Pull-up +100kg x1 rep',
      'Dip +150kg x1 rep',
      'Pull-up +120kg x1 rep ',
      'Dip +200kg x1 rep',
    ],
    [],
    [],
  ],
};

const enPrograms = [
  'Zero',
  'Beginner',
  'Medium',
  'Advanced',
  'Beginner',
  'Advanced',
];

const enOther = {
  buy: 'Buy',
  copy: 'All rights reserved 2023 ©',
  train: 'To training!',
}

const payForm = {
  mail: 'Mail to send programm:',
  direction: 'Direction:',
  level: 'Level:',
  price: 'Price:',
  goBuy: 'Go buy',
};

const languages = [
  'en-US',
  'en-GB',
  'hi',
  'tr',
  'fr',
  'es',
  'sv',
  'it',
  'de',
  'pl',
];

window.onload = () => {
  languages.forEach(lang => {
    if(!localStorage.getItem('langEn', 'en') && !localStorage.getItem('langRu', 'ru')) {
      page.setAttribute('lang', 'en');
      ruBtn.classList.remove('main-nav__button-lang--active');
      enBtn.classList.add('main-nav__button-lang--active');
      goLang(enIndex, enOther, enIndexImg, enPrice, enFaq, enAbout, enProgramInfo, payForm, enPrograms);
    }

    if (window.navigator.language === lang || localStorage.getItem('langEn', 'en')) {
      page.setAttribute('lang', 'en');
      ruBtn.classList.remove('main-nav__button-lang--active');
      enBtn.classList.add('main-nav__button-lang--active');
      goLang(enIndex, enOther, enIndexImg, enPrice, enFaq, enAbout, enProgramInfo, payForm, enPrograms);
    }
  });
};

enBtn.addEventListener('click', () => {
  localStorage.clear();
  localStorage.setItem('langEn', 'en');

  page.setAttribute('lang', 'en');
  ruBtn.classList.remove('main-nav__button-lang--active');
  enBtn.classList.add('main-nav__button-lang--active');
  goLang(enIndex, enOther, enIndexImg, enPrice, enFaq, enAbout, enProgramInfo, payForm, enPrograms);
});
