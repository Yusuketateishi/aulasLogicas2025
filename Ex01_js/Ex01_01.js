const prompt = require('prompt-sync')();

let number = Number(prompt('Qual o seu 1º número?'));
let number2 = Number(prompt('Qual o seu 2º número?'));

let numberTotal = number + number2
console.log(`O valor total dos dois números é ${numberTotal}`);


