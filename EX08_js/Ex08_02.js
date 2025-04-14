const prompt = require('prompt-sync')();

function ParImpar (nr) {
    let check = nr % 2
    if (check == 1) {
        console.log(`O ${nr} é impar`);
    } else
        console.log(`O ${nr} é par`);
}
ParImpar (nr = prompt("Qual o 1º número: "))
ParImpar (nr = prompt("Qual o 2º número: "))