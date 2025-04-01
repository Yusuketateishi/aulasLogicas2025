const prompt = require('prompt-sync')();

//Criando nossa primeira variável
//Uma variável serve para armazenar uma informação/valor
//O memória crie um espaço com o nome curse e receba o valor 'desenvolvimento do sistema'
var curso = 'Desenvolvimento de Sistemas';

//Exibindo o conteúdo da variável
console.log('curso'); //Para imprimir uma variável, não se coloca entre '  '
console.log(curso);   //Jeito correto de usar variável
console.log('curso', curso);

//Criando e atribuindo valores a uma variável
var idade = 1601122008; //inteira // integer
var temperatura = 24.5; //real // float
var nome = 'Marcelo Yusuke Tateishi'; //string

console.log('Olá', nome, 'você tem', idade, 'anos');
console.log('está cursando', curso, 'e hoje faz', temperatura, ' ºC');

console.log('Olá ' + nome + ' você tem ' + idade + ' anos');
console.log('está cursando ' + curso + ' e hoje faz ' + temperatura + ' ºC');

//Template String
console.log(`Olá, ${nome} você tem ${idade} anos
     está cursando ${curso} hoje faz ${temperatura}`)

//Declarando uma variável lógica/boolean/boleano (true/false)
var podeDirigir = true;
var estaChovendo = false;

//Declarando uma variável nula
var escola;

//Variáveis válidos
//var Minha_EScola
//var escola_
//var TELEFONE
//var Nota1
//var nomeCompleto
//var _salario

//Variáveis inválidos
//var Nome Completo
//var Média
//var 9dade 
//var console 
//var var 
//var valor$
//var nome-completo 
//var true

let cidade = 'andradina'
var turma = '2ºB'
const ano = 2025

console.log(turma);
turma = '3ºB' //Reatribuindo o valor de uma variavel
console.log(turma);
//ano = 2026; //Não podemos reatribuir valor a uma constante

let _nome = 'Marcelo'        //STRING
let _idade = 16              //NUMBER
let _peso = 61.5             //NUMBER
console.log(_nome + " idade " + _idade + " peso " + _peso);
 
//Mostrando no console quais são os tipos dos dados
console.log(typeof _nome, typeof _idade, typeof _peso );


//No prompt o computador espera o usuario digitar uma informação
//Sempre quando recebemos uma informação de entrada ela vem em STRING
_nome = prompt('Qual é o nome?');               //STRING
_idade = prompt('Qual é a idade?');             //STRING
_peso = prompt('Qual é seu peso?');             //STRING
console.log(_nome, _idade, _peso);

console.log(typeof _nome, typeof _idade, typeof _peso );

//criem 2 variaveis num1 e num2 e recebam as informações pelo prompt
num1 = prompt('Digite um número');
num2 = prompt('Digite um número');
console.log(num1 + num2);

console.log(typeof num1);  //string
num1 = Number(num1)        //convertendo a variavel do tipo string para Number
console.log(typeof num1);  //number

//Receber uma informação já convertendo seu tipo de dados
let nr1 = Number(prompt('Digite o primeiro nº:'));     //number
let nr2 = Number(prompt('Digite o segundo nº:'));      //number
console.log(nr1 + nr2);

//Convertando os dados de uma variável
nr1 = "100.14";           //string
nr1 = Number('100.14');   //convertendo string para number
nr1 = parseInt('100.14'); //convertendo string para integer
nr1 = parseFloat('100');  //convertendo string para float 100.00
nr1 = String('100.14');   //convertendo number para string

_nome = prompt('Qual é o nome?');               //STRING
_idade = prompt('Qual é a idade?');             //STRING
_peso = prompt('Qual é seu peso?');             //STRING
console.log(_nome, _idade, _peso);

_nome = String(_nome);               //string
_idade = parseInt(_idade);           //number
_peso = parseFloat(_peso);           //number
console.log(typeof _nome, typeof _idade, typeof _peso);

//Exercícios Variáveis
var NomeAluno = "Marcelo"
var Altura = 1.7 
var Escola = 'Sesi' 
var AnoAtual = 2025

let Douglas = 'Prof.Douglas'
let Materia = 'Lógica e Programação'
let AnoIngresso = 2022

NomeAluno = prompt('Qual seu nome?');
Altura = prompt('Qual sua altura?');
Escola = prompt('Qual sua Escola?');
AnoAtual = prompt('Qual o ano atual?');
Douglas = prompt('Qual o nome do professor?');
Materia = prompt('Qual a materia do professor?');
AnoIngresso = prompt('Qual o ano que o professor ingressou?');

AnoAtual = parseInt(AnoAtual);
AnoIngresso = parseInt(AnoIngresso);
Altura = parseFloat(Altura);
console.log(typeof AnoAtual, typeof AnoIngresso, typeof Altura);
