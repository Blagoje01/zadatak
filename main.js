//hamburger menu

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

//slider image
const slider = function () {
  const slides = document.querySelectorAll('.animation__slider-slide');
  const btnLeft = document.querySelector('.animation__slider-btn--left');
  const btnRight = document.querySelector('.animation__slider-btn--right');
  const dotContainer = document.querySelector('.animation__slider-dots');
  let currentSlide = 0;

  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "animation__slider-dots--dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.animation__slider-dots--dot')
      .forEach((dot) =>
        dot.classList.remove('animation__slider-dots--dot__active')
      );

    document
      .querySelector(`.animation__slider-dots--dot[data-slide="${slide}"]`)
      .classList.add(`animation__slider-dots--dot__active`);
  };

  const goToSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('animation__slider-dots--dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
///////////////////////////////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((modal) => {
  modal.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////////////////////////////////////////////////////
const hero = document.querySelector('.hero');
const navSticky = document.querySelector('.header');
const navHeight = navSticky.getBoundingClientRect().height;
const social = document.querySelector('.social');
const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) navSticky.classList.add('sticky');
  else navSticky.classList.remove('sticky');
  if (!entry.isIntersecting) social.classList.add('social-sticky');
  else social.classList.remove('social-sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(hero);
///////////////////////////////////////////////////////////////////////////
// const btnTop = document.querySelector('.btn-top');
// window.onscroll = () => {
//   if (document.documentElement.scrollTop > 500) {
//     btnTop.style.display = 'block';
//   } else {
//     btnTop.style.display = 'none';
//   }
// };
// function toTop() {
//   document.documentElement.scrollTop = 0;
// }

// btnTop.addEventListener('click', toTop);
