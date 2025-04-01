const prompt = require('prompt-sync')();

let preco = Number(prompt("Qual o preço do produto?"));

let desconto = 5 / 100 * preco;

let resultado = preco - desconto;
console.log(`O preço era ${preco} e o valor do desconto é ${desconto}, Sendo o velor total ${resultado}`);



