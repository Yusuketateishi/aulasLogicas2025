const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite um numero de 1 a 7"))

switch (n1) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
    case 7:
        console.log("Sabado");
    default:
        console.log('Operador inválido');
}
