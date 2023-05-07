const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner form input");
const msgSpan = document.querySelector(".top-banner .msg");
const list = document.querySelector(".cities");
// ! location
const locate = document.querySelector("#locate");
//! language
const clearAllButton = document.querySelector("#clear-all");
const langButton = document.querySelector("#lang");
const searchEl = document.querySelector("#search")

let units = "metric";
let lang = "en";
let url;              //api url
let cities = [];      // sorgulanan sehirlerin isimlerini tutacak.

// const apiKey = "f56f703795a90532f7b92917734c7e64";  //! Acik veri (Plain Text)

localStorage.setItem(
  // todo sessionStorage de aynı şekilde kullanılabilir
  "apiKey",
  EncryptStringAES("f56f703795a90532f7b92917734c7e64")
); //! sifreli veri (chipher Text)
// localStorage.setItem(
//   "apiKeysifresiz",
//   "f56f703795a90532f7b92917734c7e64"
// );

const apiKey = DecryptStringAES(localStorage.getItem("apiKey")); // todo sifreli api keyi localstorage den cekiyoruz.

// todo formun submit özelligi var. entera basinca submit yapiyor.
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    const cityName = input.value;
    // console.log(cityName)
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;
    // console.log(url)
    getWeatherDataFromApi();
  }
  form.reset(); // todo bu esittir... input.value=""
});

locate.addEventListener("click", () => {
  navigator.geolocation?.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=${lang}`;
    getWeatherDataFromApi();
  });
});

langButton.addEventListener("click", (e) => {
  if (e.target.id == "de") {
    lang = "de"
    input.setAttribute("placeholder", "🔍 Suche nach einer Stadt");
    searchEl.innerHTML = "SUCHE";
    clearAllButton.innerHTML = "Alles Löschen"
  }else if(e.target.id== "en"){
    lang = "en"
    input.setAttribute("placeholder", " Search for a city");
    searchEl.innerHTML = "SEARCH";
    clearAllButton.innerHTML = "Clear All"
  }else if(e.target.id == "clear-all"){
    list.innerHTML = ""
    cities=[]
    
  }
});

const getWeatherDataFromApi = async () => {
  try {
    //! const response = await fetch(url).then((response) => response.json());    // fetch ile istek
    // console.log(response) // fetch api dönen veri
    const response =  await axios(url)          // todo axios ile istek
    //Data Destruction
    // const { main, name, weather, sys } = response; //fetch
    const { main, name, weather, sys } = response.data; //axios
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    //! li olusturma
    if (cities.indexOf(name) == -1) {
      cities.unshift(name);

      const resultData = document.createElement("li");
      resultData.classList.add("city");
      resultData.setAttribute("id", `${name}`);
      resultData.innerHTML = `<button type='button' class='single-clear-btn'>X</button>
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
      //! single clear
      console.log(cities);
      const singleClearButton = document.querySelectorAll(".single-clear-btn");
      singleClearButton.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          delete cities[cities.indexOf(e.target.closest(".city").id)];
          //todo cities.splice(cities.indexOf(e.target.closest(".city").id),1) //development aşamasında
          e.target.closest(".city").remove();
          console.log(cities);
        })
    })
    } else {
      if (lang == "de") {
        msgSpan.innerText = `Sie kennen das Wetter für die ${name} bereits. Bitte suchen Sie nach einer anderen Stadt 😉`;
      } else {
        msgSpan.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
      }

      setInterval(() => {
        msgSpan.innerText = "";
      }, 3000);
    }
  } catch (error) {
    if (lang == "de") {
      msgSpan.innerText = `Stadt nicht gefunden`;
    } else {
      msgSpan.innerText = "City not found!";
    }
    setInterval(() => {
      msgSpan.innerText = "";
    }, 3000);

  }
};
