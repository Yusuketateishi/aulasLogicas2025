const prompt = require('prompt-sync')();

function Divisão(nr1, nr2){
    let resultado = nr1 / nr2;
    console.log(resultado);
}

Divisão(nr1 = Number(prompt("Escolha um número: ")), nr2 = Number(prompt("Escolha um número: ")))
