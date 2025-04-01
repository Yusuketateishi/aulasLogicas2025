const prompt = require('prompt-sync')();

//Operações com variáveis
let Uno = 10
let Duo = 20
let soma = Uno + Duo;
console.log(Uno,Duo,soma);

let subtraçao = Uno - Duo;
console.log(Uno,Duo,subtraçao);

let multiplicaçao = Uno * Duo;
console.log(Uno, Duo, multiplicaçao);

let divisao = Uno / Duo;
console.log(Uno,Duo,divisao);

let exponenciaçao = Uno ** Duo;
console.log(Uno,Duo,exponenciaçao);

//Exercícios
let valor = 2500.00
let desconto = 150.00
let promoçao = valor - desconto;
console.log(`com a promoção o celular ficou ${promoçao} no  total.`);

valor = Number(prompt('Qual o valor do celular'));
desconto = Number(prompt('Qual é o desconto em %?'));
valor = valor - (valor * desconto / 100)
console.log(`promoção do celular com R$ ${desconto} de desconto, por apenas R$ ${valor}`);

//Reatribuição de valor de variável
var numero = 4 / 2
numero = numero ** 2
numero = numero * (50-20)
console.log('O valor é ',numero);
console.log(`O valor é: ${numero}`);

_numero = (prompt('Qual o valor do numero?'))
dobroNumero = _numero * 2
MetadeNumero = _numero / 2
console.log(`O valor do numero é ${_numero}, e metade dele é ${MetadeNumero}, sendo que o drobro dele é ${dobroNumero}`);

tempo = prompt('Quantas horas você gasta trabalhando?')
TempoTotal = tempo * 15
pagamento = TempoTotal * 100
console.log(`Você ganhou ${pagamento}, num periodo de ${TempoTotal} horas.`);

