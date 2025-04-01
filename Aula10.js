//estrutura de laço de repetição while
const prompt = require('prompt-sync')();

let resposta = "s"
while (resposta == "s") {
    console.log("voce esta dentro do bloco");
    resposta = prompt("deseja continuar? s/n ")
} 
console.log("fim");
//exemplo 2
let senhaSecreta = "SENAI"
let senhaDigitada
while (senhaSecreta != senhaDigitada) {
    console.log("descubra a senha secreta!")
     senhaDigitada = prompt("qual é a senha?")
}
console.log("fim");

//exemplo 3 - executando um numero determinado de vezes
let contador = 1;
while (contador <=5){
console.log(`o contador esta no n° ${contador}`);
contador++;//contador = contador + 1
    
}
console.log("fim");
//exemplo 4
//posso deixar meu laço executando sem uma condição especifica, apenas
//com while (true) e encerrar o loop com o coando break
let total = 0
let qtde = 0
while (true){
    let valor =Number(prompt("digite o valor do produto (0 para encerrar): "))

    if (valor == 0) {
        break;
    } else {
        total = valor + total;
        qtde++
    }
}

console.log(`voce comprou no total ${qtde} produtos`);
console.log(`valor total da compra R$ ${total.toFixed(2)}`);
