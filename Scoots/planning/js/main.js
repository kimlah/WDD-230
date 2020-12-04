/* CURRENT DATE */
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName = months[d.getMonth()];
let currentDate = dayName + ", " + d.getDate() + " " + monthName + " " + d.getFullYear();

document.getElementById("currentDate").textContent = currentDate;

/* CURRENT YEAR */
const options = {year: "numeric"};

document.getElementById("currentYear").textContent = new Date().toLocaleDateString("en-US", options);

/* BANNER */
window.onload = banner();
function banner() {
    let date = new Date();
    let day = date.getDay();
    if (day == 5) {
        document.querySelector('.banner').style.display ='block';
    }
}

/* MENU */
//toggle to open and close menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("hide-navigation");
}

/* FONT LOAD */
WebFont.load({google: {families: ['Merienda', 'Lato']}});

