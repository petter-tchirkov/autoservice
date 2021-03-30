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
  if(nav.style.top !== '30px'){
    nav.style.top = '30px';
  } else{
    nav.style.top = '-100px';
  }
  
})