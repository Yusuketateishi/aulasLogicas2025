const prompt = require('prompt-sync')();

let mes  = prompt("Digite o nome de um mês:")

switch (mes) {
    case "Janeiro":
        console.log('31');
        break;
    case "Fevereiro":
        console.log('28');
        break;
    case "Março":
        console.log('31');
        break;
    case "Abril":
        console.log('30');
        break;
    case "Maio":
        console.log('31');
        break;
    case "Junho":
        console.log('30');
        break;
    case "Julho":
        console.log('31');
        break;
    case "Agosto":
        console.log('31');
        break;
    case "Setembro":
        console.log('30');
        break;
    case "Outubro":
        console.log('31');
        break;
    case "Novembro":
        console.log('30');
        break;
    case "Dezembro":
        console.log('31');
        break;
    default:
        console.log('Operador inválido');
}



