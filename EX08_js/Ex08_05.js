const prompt = require('prompt-sync')();

function exibirtabuada(nr){
for (let x = 0; x <= 10; x++){
    console.log(`${nr} x ${x} é igual a ${nr * x}`);
}
}


exibirtabuada(Number(prompt("Escolha um número: ")))
