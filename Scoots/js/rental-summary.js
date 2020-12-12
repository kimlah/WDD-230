const file = './data/rentals.json'

fetch(file)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);
        const vehicle = jsonObject["vehicle"];

        for (let i = 0; i < vehicle.length; i++) {
            let card = document.createElement("section");

            let h2 = document.createElement("h2");
                h2.textContent = vehicle[i].make + " - Seats " + vehicle[i].seats;
                card.appendChild(h2);
                document.querySelector("div.rental-summary").appendChild(card);

            let image = document.createElement("img");
                image.setAttribute("src", "images/" + vehicle[i].photo);
                image.setAttribute("alt", `Photo of ${vehicle[i].make}`);
                card.appendChild(image);
        }
    });