let countDownDate = new Date("Dec 31 2021 23:59:59").getTime();
let countDown = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDeff = countDownDate - dateNow;
  let days = Math.floor(dateDeff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((dateDeff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((dateDeff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = `Days <br> ${days}`;
  document.querySelector(".hours").innerHTML = `Hours <br> ${hours}`;
  document.querySelector(".min").innerHTML =
    min < 10 ? `Minutes <br> 0${min}` : `Minutes <br> ${min}`;
  document.querySelector(".sec").innerHTML =
    sec < 10 ? `Secounds <br> 0${sec}` : `Secounds <br> ${sec}`;
  if (countDown === 0) {
    clearInterval(countDown);
  }
}, 1000);

let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let box = document.querySelector(".box");
box.style.cssText =
  "font-weight:bold;display:flex; width:100%; height:500px; justify-content:center; align-items:center; flex-wrap:wrap; ";
days.style.cssText =
  "margin:0 20px; background-color:#bb5d5d; color:white; height:120px; width:200px; display:flex; align-items:center; justify-content:center; text-align:center; font-size:30px; border-radius:10px;  ";
hours.style.cssText =
  "margin:0 20px; background-color:#bb5d5d; color:white; height:120px; width:200px; display:flex; align-items:center; justify-content:center; text-align:center; font-size:30px; border-radius:10px; ";
min.style.cssText =
  "margin:0 20px; background-color:#bb5d5d; color:white; height:120px; width:200px; display:flex; align-items:center; justify-content:center; text-align:center; font-size:30px; border-radius:10px; ";
sec.style.cssText =
  "margin:0 20px; background-color:#bb5d5d; color:white; height:120px; width:200px; display:flex; align-items:center; justify-content:center; text-align:center; font-size:30px; border-radius:10px;";
document.body.style.cssText =
  "background-image:url("CountDown/2022.jpg"); background-size:cover; background-position: center;  font-family: 'Zen Kaku Gothic Antique', sans-serif;";
