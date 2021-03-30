/* src/app.js */

// Styles
import 'styles/_app.scss';

function hello() {
  console.log('Ready!');

  require('scripts/demo');
}
hello();

const header = document.querySelector('.header');
window.onscroll = function(){
  let top = window.scrollY;
  if (top >= 50){
    header.classList.add('active')
  }else{
    header.classList.remove('active')
  }
}

const burger = document.querySelector('.header-mobile--burger');
const nav = document.querySelector('.header-mobile--nav')
burger.addEventListener('click', () =>{
  if(nav.style.top !== '45px'){
    nav.style.top = '45px';
  } else{
    nav.style.top = '-1000px';
  }
  
})

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      pagination: {}
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});