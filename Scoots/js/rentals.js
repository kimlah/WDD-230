const file = open('rentals.json',)

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
            h2.textContent = vehicle[i].type;
            card.appendChild(h2);

            let h3 = document.createElement("h2");
            h3.textContent = vehicle[i].make;
            card.appendChild(h3);

            let p1 = document.createElement("p");
            p1.textContent = vehicle[i].max-people;
            card.appendChild(p1);

            let p2 = document.createElement("p");
            p2.textContent = vehicle[i].reservation.half-day;
            card.appendChild(p2);

            let p3 = document.createElement("p");
            p3.textContent = vehicle[i].reservation.full-day;
            card.appendChild(p3);

            let p4 = document.createElement("p");
            p4.textContent = vehicle[i].walkIn.half-day;
            card.appendChild(p4);

            let p5 = document.createElement("p");
            p5.textContent = vehicle[i].walkIn.full-day;
            card.appendChild(p5);
        }
    });
