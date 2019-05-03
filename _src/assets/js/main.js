'use strict';
//PARALLAX

const midImgHigh = document.querySelector('.mid--img__high');
const midImgLow = document.querySelector('.mid--img__low');
const bottomImg = document.querySelector('.bottom--img');

function handleScrollY(){
  if(window.outerWidth >= 768){
    let scrollY = window.pageYOffset;
    midImgHigh.style.top = 150+(scrollY*0.5)+'px';
    midImgLow.style.top = 350+(scrollY*0.6)+'px';
    bottomImg.style.top = 250+(scrollY*0.75)+'px';
  }
}
window.addEventListener('scroll', handleScrollY);
