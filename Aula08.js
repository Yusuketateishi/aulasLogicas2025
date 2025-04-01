const prompt = require('prompt-sync')();
// Estrutura condicional composta e encadeiada
// Operadores lógicos
// && - e
// || - ou
// ! - não

let a = 2;
let b = 3;
let c = 5;
console.log(a >  2 && b < 2);   // False pq 2 condições e F
console.log(a >  1 && b < 2);   // False pq 1 condições e F
console.log(a >  1 && b < 4);   // True pq 2 condições e V
console.log(a >  1 && b < 4 && c > 4);   // True todas condições V
console.log(a >  1 && b < 4 && c > 5);   // False

console.log(a >  2 || b < 2);   // False nenhuma condição é V
console.log(a >  1 || b < 2);   // True pelo menos 1 V
console.log(a >  1 || b < 4);   // True pelo menos 1 V
console.log(a >  1 || b < 4 || c > 4);   // True todas condições V
console.log(a >  1 && b < 4 || c > 6);   // True

let altura = Number(prompt("Digite sua altura:"))
let peso = Number(prompt("Digite seu peso:"))

let imc = peso / altura ** 2
if (imc < 18.5) {
    console.log("Você está abaixo do peso ideal");
} else if (imc > 18.5 && imc < 24.5) {
    console.log("Você está no peso ideal");
} else if (imc > 24.5 && imc < 29.5) {
    console.log("Você está acima do peso ideal");
} else if (imc > 29.5) {
    console.log("Você é obeso");
}

let lado1 = Number(prompt("Digite a largura de um lado do triangulo"))
let lado2 = Number(prompt("Digite a largura de um lado do triangulo"))
let lado3 = Number(prompt("Digite a largura de um lado do triangulo"))

if (lado1 == lado2 && lado3 == lado2 && lado1 == lado3) {
    console.log("Este é um triangulo equilátero");
} else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    console.log("Este é um triangulo escaleno");
} else if ((lado1 == lado2 && lado2 != lado3 && lado3 != lado1) || (lado1 != lado2 && lado2 == lado3 && lado3 != lado1) || (lado1 != lado2 && lado2 != lado3 && lado3 == lado1)) {
    console.log("Este é um triangulo isóceles");
}

let valor = Number(prompt("Qual o valor vendido:"))
let horas = Number(prompt("Quantas horas de trabalho?"))

if (valor > 5000 || horas > 40) {
    console.log("!!!BONUS!!!");
} else {
    console.log("Sem Bonus");
}

let letra = prompt("Qual a letra escolhida")

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    console.log("Vogal");
} else {
    console.log("Consoante");
}


