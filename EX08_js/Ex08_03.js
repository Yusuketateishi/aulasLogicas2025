const prompt = require('prompt-sync')();

function FormatarData (nr1,nr2,nr3) {
    return `${nr1}/${nr2}/${nr3}`
}

let valor1 = FormatarData (nr = prompt("Qual o dia? "),nr2 = prompt("Qual o mês? "),nr3 = prompt("Qual o ano? "))
let valor2 = FormatarData (nr = prompt("Qual o dia? "),nr2 = prompt("Qual o mês? "),nr3 = prompt("Qual o ano? "))
let valor3 = FormatarData (nr = prompt("Qual o dia? "),nr2 = prompt("Qual o mês? "),nr3 = prompt("Qual o ano? "))
console.log(`O valor dos tempos selecionados é ${valor1}, ${valor2} e ${valor3}`);
console.log(FormatarData (nr = prompt("Qual o dia? "),nr2 = prompt("Qual o mês? "),nr3 = prompt("Qual o ano? ")));
