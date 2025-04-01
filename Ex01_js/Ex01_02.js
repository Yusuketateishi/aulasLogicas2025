const prompt = require('prompt-sync')();

let numeroInteiro = parseInt(prompt('Qual o seu número inteiro?'))
let numeroAntecessor = numeroInteiro -1 ;
let numeroSucessor = numeroInteiro + 1 ;

console.log(`O seu numero é ${numeroInteiro} e o número anterior a esse é ${numeroAntecessor} e o número succesor ao ${numeroInteiro} é ${numeroSucessor}`);


