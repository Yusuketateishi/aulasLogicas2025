const prompt = require('prompt-sync')();

let QtdePares = 0;
let QtdeImpares = 0;
let somaPares =  0;
let somaImpares = 0;

while (true) {
    let num = Number(prompt("Digite um número: "))

    if (num == 0) {
        break;
    }
    if (num % 2 == 0) { //par
        QtdePares++         //QtdePares + 1
        somaPares = somaPares + num; //SomaPares += num

    } else {
        QtdeImpares++
        somaImpares = somaImpares + num;
    }
}

console.log(`Você digitou ${QtdePares} nº pares, somadas resultou em ${somaPares}`);
console.log(`Você digitou ${QtdeImpares} nº Ímpares, somadas resultou em ${somaImpares}`);

