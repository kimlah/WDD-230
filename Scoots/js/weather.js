/* Variables */
    // Weather Summary and Forecast Variables
const APIurl = 'https://api.openweathermap.org/data/2.5/';
const weatherAPIurl = APIurl + 'weather';
const forecastAPIurl =  APIurl + 'forecast';
const ID = '&appid=cc326e22c40b514d2512902cd32e0862';
const APIunits = '&units=imperial';
const cozumel = '?id=3530103' + ID + APIunits;

/* Concatanated Links */
    // Cozumel
const cozumelForecast = forecastAPIurl + cozumel;
const cozumelWeather = weatherAPIurl + cozumel;

/* Choosing which page needs weather and events */
let weatherURL = "";
let forecastURL = "";

document.getElementById("cozumel"); 
    weatherURL = cozumelWeather;
    forecastURL = cozumelForecast;

/* Weather Function */
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const desc = jsObject.weather[0].description; 
        document.getElementById('current').innerHTML = jsObject.weather[0].description;
        document.getElementById('currentTemp').innerHTML = Math.round(t) + "&#8457;";
        document.getElementById('humidity').innerHTML = jsObject.main.humidity;
    });

/* Forecast Function */
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.table(forecast)
        
        for (let day = 0; day < forecast.length; day++) {
            // Day of Week
            let weatherDay = document.getElementsByClassName('dayofweek');
            for (let i = 0; i < weatherDay.length; i++) {
                let longDate = new Date(forecast[day].dt_txt);
                weatherDay[day].textContent = longDate.toLocaleString("en-us", {
                    weekday: "long"
                });
            }

            // Temperature
            let forecastTemp = document.getElementsByClassName('forecastTemp');
            for (let i = 0; i < forecastTemp.length; i++) {
                forecastTemp[day].innerHTML = (forecast[day].main.temp).toFixed(0) + "&#8457;";
            }

            // Icon Image
            let forecastIcon = document.getElementsByClassName("forecastIcon");
            for (let i = 0; i < forecastIcon.length; i++) {
                forecastIcon[day].setAttribute("src", `https://openweathermap.org/img/wn/${forecast[day].weather[0].icon}@2x.png`);
                forecastIcon[day].setAttribute("alt", `Icon representing ${forecast[day].weather[0].description}`);
            }
        }
    });