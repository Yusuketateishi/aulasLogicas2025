const prompt = require('prompt-sync')();

let carteira = parseFloat(prompt("quantos R$ você tem na carteira?"));
const dolar = parseFloat(5.79);
let resultado = parseFloat(carteira / dolar);

console.log(`Você tem um total de ${resultado} dollars`);




