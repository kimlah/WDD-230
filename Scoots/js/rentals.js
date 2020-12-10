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
            h2.textContent = vehicle[i].make;
            card.appendChild(h2);
            document.querySelector("div.vehicle-cards").appendChild(card);

            let picture = document.createElement("img");
            picture.setAttribute("src", "../images." + vehicle[i].picture);
            picture.setAttribute("alt", `Photo of ${vehicle[i].make}`);
            card.appendChild(picture);

            let h3 = document.createElement("h3");
            h3.textContent = "Extra Information: " + vehicle[i].description + ", Seats " + vehicle[i].seats;
            card.appendChild(h3);

            let p1 = document.createElement("p");
            p1.textContent = "Reservation Half Day: " + vehicle[i].reservation.halfday;
            card.appendChild(p1);

            let p2 = document.createElement("p");
            p2.textContent = "Reservation Full Day: " + vehicle[i].reservation.fullday;
            card.appendChild(p2);

            let p3 = document.createElement("p");
            p3.textContent = "Walk in Half Day: " + vehicle[i].walkIn.halfday;
            card.appendChild(p3);

            let p4 = document.createElement("p");
            p4.textContent = "Walk in Full Day: " + vehicle[i].walkIn.fullday;
            card.appendChild(p4);
        }
    });
