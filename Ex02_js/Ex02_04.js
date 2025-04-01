const prompt = require('prompt-sync')();

let number = Number(prompt("Qual o número?"));
if (number * 2 >= 1) {
    console.log("Positivo");
} else {
    console.log("Negativo");
}