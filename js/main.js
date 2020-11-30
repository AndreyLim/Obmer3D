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


//кнопка вызова формы
var b = document.getElementById('overlay');
function swa(){
	b.style.visibility = 'visible';
	b.style.opacity = '1';
	b.style.transition = 'all 0.7s ease-out 0s';
}
function swa2(){
	b.style.visibility = 'hidden';
	b.style.opacity = '0';
}