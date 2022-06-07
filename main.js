'use strict';

let hour = 0;
let minute = 0;
let second = 0;

const hourBtn = document.querySelector('.mid-time.hour');
const minBtn = document.querySelector('.mid-time.min');
const secondBtn = document.querySelector('.mid-time.sec');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');

secondBtn.addEventListener('click', ()=>{
  startBtn.classList.add('on');
  resetBtn.classList.add('on');
  second+=10; 
  secondBtn.textContent = second;
  if(second >= 50){
    minute = Math.floor(second / 60)+minute; 
    minBtn.textContent = minute < 10 ? '0'+minute : minute; 
    second = second % 60; 
  }
  if(minute >= 50){
    hour = Math.floor(minute / 60)+hour;
    hourBtn.textContent = hour < 10 ? '0'+hour : hour; 
    second = second % 60 ;
  }
})

