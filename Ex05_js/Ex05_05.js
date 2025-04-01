const prompt = require('prompt-sync')();

let somaidadeM = 0;
let somaIdadeF = 0;
let qtdadeM = 0;
let qtdadeF = 0;

for (let x = 1; x <= 10; x++) {
    let idade = Number(prompt("Digite sua idade: "))
    let sexo = prompt("digite seu sexo; (M/F) ")

    if (sexo == 'M') {
        qtdadeM++;
        somaidadeM = somaidadeM + idade;
    } else if (sexo = "F") {
        qtdadeF++;
        somaIdadeF = somaIdadeF + idade;
    }
}

console.log(`a média dos sexos M e de ${somaidadeM / qtdadeM}`);
console.log(`a média dos sexos F e de ${somaIdadeF / qtdadeF}`);
console.log(`a media dos grupos é de ${(somaIdadeF + somaidadeM) / 10}`);

