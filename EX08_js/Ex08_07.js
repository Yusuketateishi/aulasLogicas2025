const prompt = require('prompt-sync')();

function soma(nr1, nr2) {
    console.log(nr1 + nr2);
}
function subtração(nr1, nr2) {
    console.log(nr1 - nr2);
}
function multiplicação(nr1, nr2) {
    console.log(nr1 * nr2);
}
function divisão(nr1, nr2) {
    console.log(nr1 / nr2);
}
function calcular(nr1, nr2, op) {
    if (op == '+') {
        soma(nr1, nr2);
    } else if (op == '-') {
        subtração(nr1, nr2)
    } else if (op == '*') {
        multiplicação(nr1, nr2)
    } else if (op == '/') {
        divisão(nr1, nr2)
    }
}
calcular(nr1 = Number(prompt("Escolha um número: ")), nr2 = Number(prompt("Escolha um número: ")), op = (prompt("Escolha um operador: ")))
