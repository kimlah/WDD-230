// Preston id = 5604473

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=5c05f660a88c4f2c5c6b9a3e63c19638";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById("current").textContent = jsObject.list[0].weather[0].main;
        document.getElementById("temp").innerHTML = jsObject.list[0].main.temp;
        document.getElementById("windSpeed").textContent = jsObject.list[0].wind.speed;
        document.getElementById("humidity").textContent = jsObject.list[0].main.humidity;
    });

fetch (apiURL)
    .then(response => response.json())
    .then(jsObject => {

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        
        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt_txt);
    
            const dayofweek = weekdays[d.getDay()];

            const imagesrc = "https://openweathermap.org/img/w/" + forecast[day].weather[0].icon + ".png";

            document.getElementById(`forecast${day+1}`).textContent = forecast[day].main.temp + `&#8457`;
            document.getElementById(`dayofweek${day+1}`).textContent = dayofweek;
            document.getElementById(`weathericon${day+1}`).setAttribute("src", imagesrc);
            document.getElementById(`weathericon${day+1}`).setAttribute("alt", forecast[day].weather[0].main);
        }

    });

