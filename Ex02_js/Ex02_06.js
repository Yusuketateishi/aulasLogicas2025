const prompt = require('prompt-sync')();
let numero = Number(prompt("Qual o numero?"))
let numero2 = Number(prompt("Qual o segundo numero"))

if (numero == numero2) {
    console.log("Igual");
} else {
    console.log("Diferente");
}