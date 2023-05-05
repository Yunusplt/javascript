// const form = document.querySelector("form")
const form = document.querySelector(".top-banner form");
// console.log(form);
const input = document.querySelector(".top-banner form input");
const msgSpan = document.querySelector(".top-banner .msg");
const list = document.querySelector(".cities");
// ! locate
const locate = document.querySelector("#locate")
//! language
const clearAllButton = document.querySelector("#clear-all")
const langButton = document.querySelector("#lang")

let units = "metric";
let lang = "en";

let url; //api url

let cities = []; // sorgulanan sehirlerin isimlerini tutacak.

// const apiKey = "f56f703795a90532f7b92917734c7e64";  //! Acik veri (Plain Text)

// localStorage.setItem(
//   "apiKey",
//   EncryptStringAES("f56f703795a90532f7b92917734c7e64")
// );  //! sefreli veri (chipher Text)
// localStorage.setItem(
//   "apiKeysifresiz",
//   "f56f703795a90532f7b92917734c7e64"
// );

const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
console.log(apiKey);

// form.addEventListener("submit", (e) =>{
//   e.preventDefault();
//   const cityName= input.value
//     console.log(cityName);
//     form.reset()
//   //url = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// })



locate.addEventListener("click", () => {
  navigator.geolocation?.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    getWeatherDataFromApi();
  });
});










form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    const cityName = input.value;
    console.log(cityName);
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
    // console.log(url);
    getWeatherDataFromApi();
  }
  form.reset();
});


langButton.addEventListener("click", (e)=> {

    if (e.target.id == "de") {
        lang = de,
        input.setAttribute("placeholder", "🔍 Suche nach einer Stadt")
        searchEl.innerHTML = "SUCHE"
    }
//todo#



})


const getWeatherDataFromApi = async () => {
  try {
    const response = await fetch(url).then((response) => response.json());
    // console.log(response) // fetch api dönen veri

    //Data Destruction

    const { main, name, weather, sys } = response; //fetch
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    if (cities.indexOf(name) == -1) {
      cities.unshift(name);

      const resultData = document.createElement("li");
      resultData.classList.add("city");
      resultData.setAttribute("id", `${name}`);
      resultData.innerHTML = `<!-- <button type='button' class='single-clear-btn'>X</button>-->
            <h2 class="city-name" >
                      <span>${name}</span>
                      <sup>${sys.country}</sup>
                  </h2>
                  <div class="city-temp">${Math.round(
                    main.temp
                  )}<sup>°C</sup></div>
                  <figure>
                      <img class="city-icon" src="${iconUrlAWS}">
                      <!-- <img class="city-icon" src="${iconUrl}"> -->
                      <figcaption>${weather[0].description}</figcaption>
                  </figure>`;
      list.prepend(resultData); //öne ekler
      //list.append(resultData); //sona ekler
    }else{
        msgSpan.innerText = "hello"  // todo ############################
    }
  } catch (error) {
    msgSpan.innerText =" City not found"
   
  }
}