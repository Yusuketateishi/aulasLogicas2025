const prompt = require('prompt-sync')();

let number1 = Number(prompt("Qual seu número?"))
let numberMultiplicado1 = number1 * 2;
let numberMultiplicado2 = number1 * 3;
let numberCubo = number1 ** 3;

console.log(`O seu número escolhido é ${number1} e o seu dobro e triplo é ${numberMultiplicado1} e ${numberMultiplicado2},Além de que seu número ao cubo é ${numberCubo}`);


