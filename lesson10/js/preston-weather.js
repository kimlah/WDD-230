/* Preston cityid = "5604473" */

const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=cc326e22c40b514d2512902cd32e0862";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let kelvin = jsObject.list[0].main.temp;
    let celsius = kelvin - 273;
    let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

    document.getElementById('weather-summary').textContent=fahrenheit;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    /*document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only */
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

  });