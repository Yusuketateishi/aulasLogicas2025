//iteração sobre nossos vetores (arrays / listas)

const prompt = require('prompt-sync')();

//vetor          0        1         2        3   
let frutas = ['maçã', 'banana', 'abacaxi', 'uva']
//para iterar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length; x++) {
    console.log(`A fruta da posição ${x} é ${frutas[x]}`);
}
console.log("FIM");

//vetor          0        1         2        3   
let Frutas = ['maçã', 'banana', 'abacaxi', 'uva']
//para iterar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length; x++) {
    let FrutasAtuais = Frutas[x];
    console.log(`A fruta da posição ${x} é ${FrutasAtuais}`);
}
console.log("FIM");

//iterando sobre uma lista usando o for of
let listaJogadores = ["Pelé", "Maradona", "Messi", "Ronaldo"];
for (let jogador of listaJogadores) {
    console.log(`O jogador é ${jogador}`);
}

let soma = 0;
let num = [1, 2, 3, 4, 5];
for (let nume of num) {
    soma = nume + soma;
    console.log(`O número é ${nume}`);
}
console.log(soma);

// verificando se um elemento existe em um array
let vogais = ['a', 'e', 'i', 'o', 'u'];
let LetraVerificar = prompt("Digite uma letra do alfabeto: ");
if (vogais.includes(LetraVerificar.toLowerCase())) {
    console.log(`A letra ${LetraVerificar} é uma vogal.`);
} else {
    console.log(`A letra ${LetraVerificar} não é uma vogal.`);
}

let numero = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let consoante = ['q', 'w', 'r', 't', 'y', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
let Vogais = ['a', 'e', 'i', 'o', 'u'];
let letraVerificar = prompt("Digite uma letra do alfabeto: ");
if (Vogais.includes(letraVerificar.toLowerCase())) {
    console.log(`A letra ${letraVerificar} é uma vogal.`);
} else if (consoante.includes(letraVerificar.toLowerCase())) {
    console.log(`A letra ${letraVerificar} é uma consoante.`);
} else if (numero.includes(letraVerificar)) {
    console.log(`A letra é o número ${letraVerificar}.`);
} else {
    console.log(`A letra ${letraVerificar} é um character.`);
}

//Obtendo a posição de um item em um array usando o for of e a função entries()
//        posição    0        1          2        3  
let listaFrutas = ['maçã', 'banana', 'abacaxi', 'uva'];
for (const [pos, fruta] of listaFrutas.entries()) {
    console.log(`A fruta da posição ${pos} é ${fruta}`);
}

//separando uma string utilizando o split
let produtos = "cell,phone,bar,gold,silver"
let listaProdutos = produtos.split(',');
console.log(produtos);
console.log(listaProdutos);

//string são listas (vetores / arrays) de caracteres
//           01234       0   1   2   3   4
let escolac='SENAI'; //['S','E','N','A','I']
for (let letra of escolac) 
    console.log(letra);
//utilizando o for of exibir a palavra da seguinte forma
//S
//E
//N
//A
//I
