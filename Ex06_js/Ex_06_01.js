const prompt = require('prompt-sync')();

let film = [];

for (let n = 1; n <= 7; n++) {
    film.push(prompt(`Digite 7 filmes que você gosta: `));
    console.log(film);
}
console.log(film[0]);
console.log(film[4]);
film.splice(5, 1, 'Meu malvado favorito')
console.log(film);
film.splice(6, 0, "Os minions")
console.log(film);
film.splice(5, 0, "Odysseia")
film.shift()
console.log(film);
film.pop()
console.log(film);
console.log(film.slice(0,3));
console.log(film.slice(3,4));
console.log(film.length);
film.reverse()
console.log(film);



