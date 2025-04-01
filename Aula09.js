//Estruturas condicionais aninhadas
//switch case
const prompt = require('prompt-sync')();

let valorCompra = 120;
let clienteVIP = true;

if (valorCompra >= 100) {
    if (clienteVIP == true) {
        console.log(`Você ganhou R$ ${valorCompra * 0.1} de desconto`);
    } else {
        let desconto = valorCompra * 5 / 100
        console.log(`Você ganhou R$ ${desconto} de desconto`);
    }
} else {
    let restante = 100 - valorCompra;
    console.log(`Compre mais R$ ${restante} e ganhe desconto`);
}

let idade = Number(prompt("Qual sua idade?"));
if (idade < 16) {
    console.log("Não pode votar");
} else if (idade > 70) {
    console.log("Seu voto é facultativo");
} else if (idade >= 18) {
    console.log("Obrigado a votar");
} else if (idade >= 16) {
    console.log("Seu voto é facultativo");
}

//Switch case é uma alternativa ao if else
let n1 = Number(prompt("Digite um nº: "))
let n2 = Number(prompt("Digite um outro n: º"))
let op = prompt("Digite um operador (+ - / * **): ")

switch (op) {
    case '+':                                //else if (op == '+')
        console.log(n1 + n2);
        break;
    case '-':                                //else if (op == '-')
        console.log(n1 - n2);
        break;
    case '/':                                //else if (op == '/')
        console.log(n1 / n2);
        break;
    case '*':                                //else if (op == '*')
        console.log(n1 * n2);
        break;
    case '**':                               //else if (op == '**')
        console.log(n1 ** n2);
        break;
    default:
        console.log('Operador inválido');
}

