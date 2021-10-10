'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
var name;

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
const renderCountry = function (data) {
  const html = ` <article class="country">
                  <img class="country__img" src="${data.flags.svg}" />
                  <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(2)}M people</p>
                    <p class="country__row"><span>🗣️</span>${
                      data.languages[0].name
                    }</p>
                    <p class="country__row"><span>💰</span>${
                      data.currencies[0].name
                    }</p>
                  </div>
                </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
// submit.onclick = function () {
//   name = document.getElementById('name').value;
//   getCountryData(name);
// };

// ///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://restcountries.com/v2/name/${country}?fullText=true`
//   );
//   request.send(); //Will fetch data in the background and will send load event

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(this.responseText);

//     const html = ` <article class="country">
//                   <img class="country__img" src="${data.flags.svg}" />
//                   <div class="country__data">
//                     <h3 class="country__name">${data.name}</h3>
//                     <h4 class="country__region">${data.region}</h4>
//                     <p class="country__row"><span>👫</span>${(
//                       +data.population / 1000000
//                     ).toFixed(2)}M people</p>
//                     <p class="country__row"><span>🗣️</span>${
//                       data.languages[0].name
//                     }</p>
//                     <p class="country__row"><span>💰</span>${
//                       data.currencies[0].name
//                     }</p>
//                   </div>
//                 </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://restcountries.com/v2/name/${country}?fullText=true`
//   );
//   request.send(); //Will fetch data in the background and will send load event

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);
//     renderCountry(data);

//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     console.log(neighbour);

//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://restcountries.com/v2/alpha/${neighbour}?fullText=true`
//     );
//     request2.send(); //Will fetch data in the background and will send load event

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2);
//     });
//   });
// };
// getCountryAndNeighbour('India');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
//     .then(response => {
//       console.log(response)
//       if(response.ok)
//       throw new Error('Country not found');

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       // console.log(neighbour);

//       if (!neighbour) return;

//       //Country 2
//       return fetch(
//         `https://restcountries.com/v2/alpha/${neighbour}?fullText=true`
//       );
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data))
//     .catch(err => {
//       console.error(`🔴🔴${err}🔴🔴`);
//       renderError(`Something went wrong 🔴🔴 ${err.message}. Try again!`)
//     })
//     .finally(()=>{
//       countriesContainer.style.opacity=1;
//     })
// };
// getCountryData('USA');
// btn.addEventListener('click', function () {
//   getCountryData('USB');
// });
// const whereAmI = function (lat, lng) {

//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data=>{
//     console.log(data);
//     console.log(`You are in ${data.place}`)})
//     .catch(err=>console.error(err));
// };
// whereAmI(52.508, 13.381);

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery happening ');
  setTimeout(function () {
    if (Math.random() >= 0.5) resolve('You win!😁');
    else reject('You lose 😴');
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
