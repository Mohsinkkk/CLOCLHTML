const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const secondDegree = (getSecond / 60) * 360;
  second.style.transform = `rotate(${secondDegree}deg)`;

  const minuteDegree = (getMinute / 60) * 360;
  minute.style.transform = `rotate(${minuteDegree}deg)`;

  const hourDegree = (getHour / 12) * 360 + (getMinute / 60) * 30;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
