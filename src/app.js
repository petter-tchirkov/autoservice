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

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.main__form').addEventListener('submit', (e)=>{
    e.preventDefault();

    let phone = document.querySelector(".phone-input").value;
    let name = document.querySelector(".name-input").value;


    phone = phone.replace(/[\s\-\(\)]/g, "");

    if (phone.match(/^((\+?3)?8)?0\d{9}$/) != null) {
        sendEmail(phone,name);
      } else {
        alert("Пожалуйста, введите корректный номер телефона");
      }
    
    const url = window.location.href;
    function sendEmail(phone, name) {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "gagarinauto24@gmail.com",
        Password: "fdqdgivfettyzlva",
        To: "gagarinauto24@gmail.com",
        From: "gagarinauto24@gmail.com",
        Subject: `Новый заказ: ${name}`,
        Body: `
              Имя: ${name}<br/>
              Телефон: ${phone}<br/>
              `,
      }).then((message) =>
        window.location = `${url}/contact`
      );
    }
  })
})

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.consultation--form').addEventListener('submit', (e)=>{
    e.preventDefault();

    let phone = document.querySelector(".phone-input").value;
    let name = document.querySelector(".name-input").value;


    phone = phone.replace(/[\s\-\(\)]/g, "");

    sendEmail(phone,name);
    
    const url = window.location.href;
    function sendEmail(phone, name) {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "gagarinauto24@gmail.com",
        Password: "fdqdgivfettyzlva",
        To: "gagarinauto24@gmail.com",
        From: "gagarinauto24@gmail.com",
        Subject: `Новый заказ: ${name}`,
        Body: `
              Имя: ${name}<br/>
              Телефон: ${phone}<br/>
              `,
      }).then((message) =>
        window.location = `${url}/contact`
      );
    }
  })
})

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.connection--form').addEventListener('submit', (e)=>{
    e.preventDefault();

    let phone = document.querySelector(".con-phone").value;
    let name = document.querySelector(".con-name").value;


    phone = phone.replace(/[\s\-\(\)]/g, "");

    if (phone.match(/^((\+?3)?8)?0\d{9}$/) != null) {
        sendEmail(phone,name);
      } else {
        alert("Пожалуйста, введите корректный номер телефона");
      }
    
    const url = window.location.href;
    function sendEmail(phone, name) {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "gagarinauto24@gmail.com",
        Password: "fdqdgivfettyzlva",
        To: "gagarinauto24@gmail.com",
        From: "gagarinauto24@gmail.com",
        Subject: `Новый заказ: ${name}`,
        Body: `
              Имя: ${name}<br/>
              Телефон: ${phone}<br/>
              `,
      }).then((message) =>
        window.location = `${url}/contact`
      );
    }
  })
})