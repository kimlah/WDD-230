const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temp checking for valid response & data parsing
        for (let i=0; i < prophets.length; 1++) {
            
        }
    });

const prophets = jsonObject['phophets'];