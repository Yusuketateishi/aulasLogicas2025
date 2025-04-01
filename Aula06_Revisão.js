//Importando biblioteca para receber informação do usuário
const prompt = require('prompt-sync')();

//Declarando váriavel sem dados(undefined)
let nota;
//Declarando váriavel com informação
let nome = "Carlos";

//Reatribuindo um valor à váriavel nome
nome = "Roberto"
nota = 8.5

//Entrada de dados em nosso programa
let sobrenome = prompt("Digite seu sobrenome: ");
let nota1 = Number(prompt('Digite a nota da 1ª prova: '));
let nota2 = Number(prompt('Digite a nota da 2ª prova: '));

//Processamento dos dados
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome + ' ' + sobrenome;
let nomeCompleto2 = `${nome} ${sobrenome}`;
let idade = prompt("Digite sua idade: ");
let idadeNumero = parseInt(idade);

//Saída dos dados
console.log('---Relatório Final---');
console.log(`O seu nome é: ${nomeCompleto} \n sua idade é ${idade}`);
console.log('O seu nome é: ' + nomeCompleto + '\n sua idade é ' + idade);
console.log(`Sua média é: ${media} `);

let n = 0; //0
n = n + 1; //1
n = n + 1; //2
n = n + 1; //3
n += 1;    //4
n++;       //5
n += 3;    //8
n--;       //7
n = n -1;  //6
n -= 2;    //4

//Resolção de exercícios anteruor
let HorasPorDia = Number(prompt('Quantas horas ttrabalhou por dia?'));
let diasTrabalhados = Number(prompt('Quantos dias trabalhou?'));
let ValorHora = Number(prompt('Qual é o valor da hora?'));
let totalHoras = diasTrabalhados * HorasPorDia
let custoTotal = totalHoras * ValorHora
console.log(`O custo total é de R$ ${custoTotal}`);

