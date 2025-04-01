const prompt = require('prompt-sync')();

let totalPar = 0;
let QtdeImpares = 0;
let QtdePares= 0;
let totalImpar = 0;

for (let x = 1; x <= 5; x++){
    let nm = Number(prompt("digite o valor do produto "))
    if (nm % 2 == 0) {
        totalPar = totalPar + nm;
        QtdePares++
    } else {
        totalImpar = totalImpar + nm;
        QtdeImpares++
    }
}
console.log(`Quantidade de par: ${QtdePares}`);
console.log(`Quantidade de ímpar: ${QtdeImpares}`);
console.log(`Soma do total par: ${totalPar}`);
console.log(`Soma do total ímpar: ${totalImpar}`);

