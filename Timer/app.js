const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2021, 10, 23, 10, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends on ${day}, ${date} ${month} ${year} ${
  hours % 12
}:${minutes < 10 ? "0" + minutes : minutes}${hours < 12 ? "am" : "pm"}`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const time = futureTime - today;

  //Values needed for calculation
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //Calculating values
  const days = Math.floor(time / oneDay);
  const hours = Math.floor((time % oneDay) / oneHour);
  const minutes = Math.floor((time % oneHour) / oneMinute);
  const seconds = Math.floor((time % oneMinute) / 1000);
  // console.log(days, hours, minutes, seconds);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (time < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, giveaway has ended</h4>`;
  }
}

// Countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
