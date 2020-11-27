var swiper = new Swiper('.swiper-container', {
slidesPerView: 3,
spaceBetween: 30,
autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});

$(document).ready(function(){
  $('.third-block__input--phone').mask('+7 (999) 999-99-99');
});