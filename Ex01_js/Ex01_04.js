const prompt = require('prompt-sync')();

let nota1 = Number(prompt("Qual a sua 1ª nota?"))
let nota2 = Number(prompt("Qual a sua 2ª nota?"))

let media = (nota1 + nota2) / 2;
console.log(`A suas duas notas são ${nota1} e ${nota2}, Sendo sua media ${media}`);

