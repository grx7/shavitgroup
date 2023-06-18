
const featured = new Swiper('.featured-slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: true,
    speed: 600,

    breakpoints: {
        // when window width is >= 320px
        320: {
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          spaceBetween: 20
        }
      }
});

const similar = new Swiper('.similar-slider', {
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 20,

  breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        spaceBetween: 20
      }
    }
});

const prodSlider = new Swiper('.product-preview__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  thumbs: {
    swiper: {
      el:  ".product-preview__slider-thumbs",
      slidesPerView: 4,
      spaceBetween: 10,

      breakpoints: {
        // when window width is >= 320px
        320: {
          spaceBetween: 17
        },
        // when window width is >= 480px
        480: {
          spaceBetween: 10
        }
      }
    },
  },


});