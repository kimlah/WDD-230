/* Event Cards */

// URL to pull data from
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// Which town are events being pulled for? 
var townName = "";

    if (document.getElementById("preston")) {
        townName = "Preston";
    }
    else if (document.getElementById("soda-springs")) {
        townName = "Soda Springs";
    }
    else if (document.getElementById("fish-haven")) {
        townName = "Fish Haven";
    };

// Fetch JSON file
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    // Extract JSON file
    .then(function (jsonObject) {
        let towns = jsonObject["towns"];

        for (let i = 0; i < towns.length; i++) {
            if(towns[i].name == townName) {
                // Create Event Card
                let card = document.createElement("section");
                // Create h3 ("Town" Events: )
                let h3 = document.createElement("h3");
                    h3.textContent = "Events in " + towns[i].name;
                    card.appendChild(h3);
                    document.querySelector("div.eventcard").appendChild(card);
                // Create p with event list
                let p1 = document.createElement("p");
                    p1.textContent = towns[i].events[0];
                    card.appendChild(p1);
                let p2 = document.createElement("p");
                    p2.textContent = towns[i].events[1];
                    card.appendChild(p2);
                let p3 = document.createElement("p");
                    p3.textContent = towns[i].events[2];
                    card.appendChild(p3);
                let p4 = document.createElement("p");
                    p4.textContent = towns[i].events[3];
                    card.appendChild(p4);
            }
        }
});