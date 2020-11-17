const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid={cc326e22c40b514d2512902cd32e0862}";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

    