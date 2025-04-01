const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Qual o 1º número?"));
let numero2 = Number(prompt("Qual o 2º número?"));
if (numero1 > numero2) {
    console.log("1º número é maior");
} else {
    console.log('2º número é maior');
}