/* The formula to calculate the wind chill factor is 
   f=35.74+0.6215t−35.75s0.16+0.4275ts0.16, 
   where f is the wind chill factor in Fahrenheit, 
   t is the air average temperature in Fahrenheit, 
   and s is the wind speed in miles per hour. */

let temp = 34;
let windSpeed = 15;

function getWindChill(temp, windSpeed) {
   if ((temp <= 30) && (windSpeed > 3.0)) {
      var windChill = (35.74 + (0.6215 * temp) - 
      (35.75 * (Math.pow(windSpeed, 0.16))) + 
      (0.4275 * temp * (Math.pow(windSpeed, 0.16)))).toFixed(0);
   }
   else {
      var windChill = "N/A";
   }
   return windChill;
}

document.getElementById("windchill").textContent = getWindChill(temp, windSpeed);