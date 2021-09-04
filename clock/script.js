const body = document.querySelector('body');
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');

setInterval(() => {  
  let day = new Date();

  // 1시간 당 돌아가는 각도 30° 1분,1초 당 돌아가는 각도 6°
  let hourDeg = day.getHours() * 30;  
  let minDeg = day.getMinutes() * 6;  
  let secDeg = day.getSeconds() * 6; 

  hr.style.transform = `rotateZ(${hourDeg+(minDeg/12)}deg)`;  
  // minDeg/12 : 자연스러운 clock 느낌을 내기 위해 시침이 시간 사이에 위치하도록 조정
  mn.style.transform = `rotateZ(${minDeg}deg)`;
  sc.style.transform = `rotateZ(${secDeg}deg)`;
})

function toggleClass() {
  body.classList.toggle('light');
}
