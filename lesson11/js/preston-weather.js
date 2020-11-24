/* Preston cityid = "5604473" */

const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=cc326e22c40b514d2512902cd32e0862";

  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let temp = jsObject.main.temp;
        document.getElementById('currentTemp').textContent = temp;
        document.getElementById('current').textContent = jsObject.weather[0].description;
        document.getElementById('currentTemp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = jsObject.wind.speed;
    });

//5-day forecast
const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5604473&appid=cc326e22c40b514d2512902cd32e0862&units=imperial";
fetch(forecast)
    .then(function (response) {
        return response.json();
    })
    
    .then(function (jsonObject) {
        const days = jsonObject['list'];
        console.log(days);
        var newDays = [];
        var today = parseInt(new Date(days[0].dt_txt).getDate());
        var x = 0;
       
        //check if the time is 6pm
        for (let i = 0; i < days.length; i++) {
            if (days[i].dt_txt == `2020-11-${today} 18:00:00`) {
                newDays[x] = days[i];
                x++;
                today++;
            }
        }
        //temperature
        let forecastTemp = document.getElementsByClassName('forecastTemp');
        for (let i = 0; i < forecastTemp.length; i++) {
            forecast[i].innerHTML = newDays[i].main.temp;
        }
        //icon
        let weathericon = document.getElementsByClassName("forcastimg");
        for (let i = 0; i < weathericon.length; i++) {
            weathericon[i].setAttribute("src", `https://openweathermap.org/img/wn/${newDays[i].weather[0].icon}@2x.png`);
            weathericon[i].setAttribute("alt", `Icon representing ${newDays[i].weather[0].description}`);
        }
        //days of the week
        let weatherDay = document.getElementsByClassName('day');
        for (let i = 0; i < weatherDay.length; i++) {
            let longDate = new Date(newDays[i].dt_txt);
            dayofweek[i].textContent = longDate.toLocaleString("en-us",{weekday:"long"});
        }
    });

