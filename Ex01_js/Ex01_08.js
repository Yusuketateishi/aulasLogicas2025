const prompt = require('prompt-sync')();

let altura = Number(prompt("Qual a altura da parede?"));
let largura = Number(prompt("Qual a largura da parede?"));

let area = altura * largura;
let tinta = area / 2;

console.log(`A altura e a largura é ${altura}, ${largura}, Sendo sua área ${area} e sua quantidade de tinta nescessaria por m² é ${tinta}`);

