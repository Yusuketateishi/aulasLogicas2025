const prompt = require('prompt-sync')();
// Operadores relacionais
// == quer dizer igual, igualdade
// != quer dizer diferente

let a = 2;
let b = 3;
console.log(a > b);   //False (a=2 que não é maior que b=3)
console.log(a == b);  //False  (a não é igual a b)
console.log(a != b);  //True (a é diferente que b) 
console.log(a > 2);   //False  (a não é maior que dois)
console.log(a >= 2);  //True   (a é maior ou igual a dois)

//if estrutura de condição muito utilizada na programação
let tenhoIngresso = true
if (tenhoIngresso == true) { //Se a condição for verdadeira
    //Entra besse bloco de comando
    console.log("Pode entrar");}

let idade = Number(prompt("Qual sua idade?"))
if (idade >= 18) {
    console.log("Maior de idade");}

tenhoIngresso = false
    if (tenhoIngresso == true) { //Se a condição for verdadeira
        //Entra besse bloco de comando
        console.log("Pode entrar");
    } else {       // Se a primeira conição for false
        console.log('Estou barrado na portaria');}

         idade = Number(prompt("Qual sua idade?"))
        if (idade >= 18) {
            console.log("Maior de idade");}
        else {console.log("Menor de idade");
        }




