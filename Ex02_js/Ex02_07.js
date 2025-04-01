const prompt = require('prompt-sync')();

let velocidade = Number(prompt("Qual a velocidade do carro?"))

if (velocidade > 80) {
    console.log("Multado");
} else {
    console.log("Não Multado");
}
let multa = Number(prompt("qual o valor da multa?"))
let custo = (velocidade - 80) * multa
console.log(`E o custo da multa séra ${custo} R$`);

