$(document).ready(function(){

  $('.lecture').on('init reInit',function(event,slick){
    const amount = slick.slideCount;
    const range = $(this).siblings('.slider-range').find('.range');
    $(range).attr('max',amount);
  })
  
  $('.lecture').on('afterChange',function(e,slick,currentSlide){
    const range = $(this).siblings('.slider-range').find('.range');
    $(range).val(currentSlide+1);
  })
  
  $('.range').on('input change',function(e){
    const slider = $(this).parent('.slider-range').siblings('.lecture');
    slider.slick('slickGoTo',this.value-1);
  });

  $('.lecture').slick({
      adaptiveHeight: true,
      variableWidth: true,
      arrows: false,
      slidesToShow: 4,
      touchMove: true,
      swipe: true,
      touchMove: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1601,
          settings: {
            adaptiveHeight: true,
            arrows: false,
            slidesToShow: 3,
            touchMove: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            adaptiveHeight: true,
            arrows: false,
            slidesToShow: 2,
            centerPadding: '80px',
            swipe: true,
            touchMove: true,
          }
        },
        {
          breakpoint: 441,
          settings: {
            centerMode: true,
            centerPadding: '60px',
            adaptiveHeight: false,
            arrows: false,
            slidesToShow: 1,
            swipe: true,
            touchMove: true,
          }
        }
      ]
  });
});

window.addEventListener('DOMContentLoaded', () => {
const menu = document.querySelector('.mobile_menu'),
menuItem = document.querySelectorAll('.mobile_menu__link'),
hamburger = document.querySelector('.hamburger'),
hamburgerAc = document.querySelectorAll('.hamburger__active'),
footerHamburger = document.querySelector('.footer_hamburger');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu_active');
    if (hamburger.classList.contains('hamburger__active') == true) {
     document.body.style.overflow = 'hidden';
   } else {
     document.body.style.overflow = 'auto';
   }
});

footerHamburger.addEventListener('click', () => {
  footerHamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu_active');
    if (footerHamburger.classList.contains('hamburger__active') == true) {
     document.body.style.overflow = 'hidden';
   } else {
     document.body.style.overflow = 'auto';
   }
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu_active');
    })
})

})