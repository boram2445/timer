'use strict';
const hourBtn = document.querySelector('.mid-time.hour');
const minBtn = document.querySelector('.mid-time.min');
const secondBtn = document.querySelector('.mid-time.sec');
const stopBtn = document.querySelector('.stop-btn');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');

let _second = 0;
let _intervalId;

secondBtn.addEventListener('click', ()=>{clickTimeBtn('sec')});
minBtn.addEventListener('click', ()=>{clickTimeBtn('min')});
hourBtn.addEventListener('click', ()=>{clickTimeBtn('hour')});

//시간 클릭 함수 
function clickTimeBtn(type){
  startBtn.classList.add('on');
  resetBtn.classList.add('on');
  if(type === 'sec'){
    _second+=10;
  } else if(type === 'min'){
    _second+=60;
  } else if(type === 'hour'){
    _second+=60*60;
  }
  let [hour, minute, second]= getTime();
  setContextTime(hour, minute, second);
}

//시간 계산 함수 
function getTime(){
  let hour = Math.floor(_second / (60 * 60)) % 100;
  let minute = Math.floor(_second / 60) % 60;
  let second = _second % 60; 
  return [hour, minute, second];
}

//시간 반영 함수 
function setContextTime(hour, minute, second){
  hourBtn.textContent = hour < 10 ? '0'+ hour : hour; 
  minBtn.textContent = minute < 10 ? '0'+ minute : minute; 
  secondBtn.textContent = second < 10 ? '0' + second : second; 
}


startBtn.addEventListener('click',startTimer);
resetBtn.addEventListener('click', resetTimer);
stopBtn.addEventListener('click', stopTimer);

//start 버튼 
function startTimer(){
  startBtn.classList.add('hidden');
  stopBtn.classList.add('visible');
  _intervalId = setInterval(()=>{
    _second-=1; 
    if(_second == 0){
      clearInterval(_intervalId);
      resetTimer();
    }
    let [hour, minute, second]= getTime();
    setContextTime(hour, minute, second);
  },1000)
}

//reset 버튼 
function resetTimer(){
  clearInterval(_intervalId);
  _second = 0;
  setContextTime(0, 0, 0);
  startBtn.classList.remove('hidden', 'on');
  stopBtn.classList.remove('visible');
  resetBtn.classList.remove('on');
}

//stop 버튼()
function stopTimer(){
  clearInterval(_intervalId);
  startBtn.classList.remove('hidden');
  stopBtn.classList.remove('visible');
}

