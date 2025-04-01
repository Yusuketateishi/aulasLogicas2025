const prompt = require('prompt-sync')();

let inicio = Number(prompt("Qual o valor do nº?"))
let fim = Number(prompt("Qual o valor do nº?"))
let passo = Number(prompt("Qual o valor do nº?"))

for(let x= inicio ; x <= fim ; x+= passo){
    console.log(`O resultado é ${x}`);
}
