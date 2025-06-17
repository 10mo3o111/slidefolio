import "./style.css";

// import Swiper JS
import Swiper from "swiper";
import {
  EffectCoverflow,
  EffectCube,
  EffectCards,
  EffectCreative,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

const swiper01 = new Swiper(".swiper01", {
  direction: "horizontal",
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  spaceBetween: 30,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiper02 = new Swiper(".swiper02", {
  direction: "horizontal",
  spaceBetween: 30,
  modules: [Navigation, Scrollbar],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  a11y: {
    prevSlideMessage: "前へ",
    nextSlideMessage: "次へ",
  },
});

const swiper03 = new Swiper(".swiper03", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 1,
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiper04 = new Swiper(".swiper04", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 1,
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiper05 = new Swiper(".swiper05", {
  modules: [EffectCube, Pagination],
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper06 = new Swiper(".swiper06", {
  modules: [EffectCoverflow, Pagination],
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper07 = new Swiper(".swiper07", {
  modules: [EffectCards],
  effect: "cards",
  grabCursor: true,
});

const swiper08 = new Swiper(".swiper08", {
  modules: [EffectCreative],
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-125%", 0, -800],
      rotate: [0, 0, -90],
    },
    next: {
      shadow: true,
      translate: ["125%", 0, -800],
      rotate: [0, 0, 90],
    },
  },
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiper09 = new Swiper(".swiper09", {
  modules: [Autoplay, Pagination],
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
