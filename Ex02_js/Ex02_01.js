const prompt = require('prompt-sync')();

let nota1 = Number(prompt("qual sua 1ª nota?"));
let nota2 = Number(prompt("qual sua 2ª nota?"));
let media = (nota1 + nota2) / 2;
if (media >= 7) {
    console.log("Passou");
} else {
    console.log("Não passou");
}