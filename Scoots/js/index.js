const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject); // temp checking for valid response & data parsing
        const towns = jsonObject["towns"];

        for (let i = 0; i < towns.length; i++) {
            if(towns[i].name == "Preston" || towns[i].name == "Soda Springs" ||towns[i].name == "Fish Haven") {
                let card = document.createElement("section");

                let image = document.createElement("img");
                    image.setAttribute("src", "images/" + towns[i].photo);
                    image.setAttribute("alt", towns[i].name);
                    card.appendChild(image);

                let h2 = document.createElement("h2");
                    h2.textContent = towns[i].name;
                    card.appendChild(h2);
                    document.querySelector("div.cards").appendChild(card);

                let h3 = document.createElement("h3");
                    h3.textContent = towns[i].motto;
                    card.appendChild(h3);

                let p1 = document.createElement("p");
                    p1.textContent = "Year Founded: " + towns[i].yearFounded;
                    card.appendChild(p1);

                let p2 = document.createElement("p");
                    p2.textContent = "Population: " + towns[i].currentPopulation;
                    card.appendChild(p2);

                let p3 = document.createElement("p");
                    p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                    card.appendChild(p3);
            }
        }
});