'use strict'

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

//Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}



/////////slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    centerInsufficientSlides: true,
    slidesPerView:2.4,
    spaceBetween: 50,

    breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.3,
        // spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1.6,
        // spaceBetween: 40
      },
      993:{
          slidesPerView:2.4,
      }
    },
  });


//auto responsive height  of block subscribe

const subscribe = document.querySelector('.subscribe');
const reviews = document.querySelector('.reviews');

const subscribePosition = function() {
  subscribe.style.bottom = -(subscribe.offsetHeight / 2) + 'px'
  console.log(subscribe.offsetHeight);
}

subscribePosition()
window.addEventListener('resize', subscribePosition)
