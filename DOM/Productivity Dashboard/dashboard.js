/* Quote generation */

const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");

async function setQuote() {
  const res = await fetch("https://dummyjson.com/quotes/random");
  const data = await res.json();
  quoteText.textContent = `"${data.quote}"`;
  quoteAuthor.textContent = `-- ${data.author}`;
}

setQuote();

/* Date and Time  */

const clock = document.querySelector("#clock");
const date = document.querySelector("#calander");

function updateClock() {
  const now = new Date();

  // Require components
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  // Format numbers to always show two digits
  hr = String(hr).padStart(2, "0");
  min = String(min).padStart(2, "0");
  sec = String(sec).padStart(2, "0");

  clock.textContent = `${hr} : ${min} : ${sec}`;
}

function updateDate() {
  const now = new Date();

  let dateNum = now.getDate();

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
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let monthName = months[now.getMonth()];
  let dayName = days[now.getDay()];

  date.textContent = `${dateNum} ${monthName} ${dayName}`;
}

updateClock();
updateDate();

setInterval(() => {
  updateClock();
  updateDate();
}, 1000);

/* Weather  */

const city = document.querySelector("#city");
const condition = document.querySelector("#condition");
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");

const weatherCodes = {
  0: "Clear",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Cloudy",
  45: "Fog",
  48: "Fog",

  51: "Light Drizzle",
  53: "Drizzle",
  55: "Heavy Drizzle",

  56: "Freezing Drizzle",
  57: "Heavy Freezing Drizzle",

  61: "Light Rain",
  63: "Rain",
  65: "Heavy Rain",

  66: "Freezing Rain",
  67: "Heavy Freezing Rain",

  71: "Light Snow",
  73: "Snow",
  75: "Heavy Snow",
  77: "Snow Grains",

  80: "Rain Showers",
  81: "Heavy Showers",
  82: "Violent Showers",

  85: "Snow Showers",
  86: "Heavy Snow Showers",

  95: "Thunderstorm",
  96: "Thunderstorm + Hail",
  99: "Severe Thunderstorm",
};

async function getWeather(lat, lon) {
  try {
    // Weather API
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`,
    );

    const weatherData = await weatherResponse.json();

    console.log(weatherData);

    // Update weather information
    temperature.textContent = `${weatherData.current.temperature_2m}°C`;

    humidity.textContent = `${weatherData.current.relative_humidity_2m}%`;

    wind.textContent = `${weatherData.current.wind_speed_10m} km/h`;

    condition.textContent =
      weatherCodes[weatherData.current.weather_code] ??
      `Code ${weatherData.current.weather_code}`;

    // Reverse Geocoding API (City Name)
    const geoResponse = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
    );

    const geoData = await geoResponse.json();

    console.log(geoData);

    city.textContent =
      geoData.city ||
      geoData.locality ||
      geoData.principalSubdivision ||
      "Unknown Location";
  } catch (err) {
    console.error(err);

    city.textContent = "Error";
    condition.textContent = "--";
    temperature.textContent = "--°C";
    humidity.textContent = "--";
    wind.textContent = "--";
  }
}

// Get user's current location
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      console.log("Latitude:", lat);
      console.log("Longitude:", lon);

      getWeather(lat, lon);
    },

    (error) => {
      console.error(error);

      city.textContent = "Location Denied";
      condition.textContent = "--";
      temperature.textContent = "--°C";
      humidity.textContent = "--";
      wind.textContent = "--";
    },
  );
} else {
  city.textContent = "Geolocation Unsupported";
}
