const prompt = require('prompt-sync')();
let numero = Number(prompt("Qual o numero?"));

if (numero % 2 == 0) {
    console.log("par");
} else {
    console.log("ímpar");
}
