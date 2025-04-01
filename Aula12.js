//Variáveis compostas / Vetores / Arrays
const prompt = require('prompt-sync')();

//Variável simples, cabe apenas 1 dado por vez
let fruta = 'maçã';
fruta = 'banana';

//Variável composta, cabe mais de 1 dado
let frutas = ["maçã","banana","abacaxi", "uva"]

console.log(frutas);
console.log(frutas[1]);

//Declarando uma lista vazia
let listaV = []

//Declaração de uma lista de números
let numeros = [1,2,8,5,9]

//Declaração de uma lista de strings
let nomes = ['Ana', 'João', 'Maria']

//Declaração de uma lista mista
let listaM = [4, 'feijão', true, 7.55]

//Declaração de uma lista com outra listas
let listaDeVetores = [['coca-cola', 'hot-dog'], [5.00, 10.00]]
console.log(listaDeVetores[0][1]);

//Alterando a um dos conteudos da lista
frutas[3] = 'melancia'
console.log(frutas);

//Adição de um conteudo a lista
//frutas[4]= 'laranja';
frutas.push('Laranja')//utilizando o método push
console.log(frutas); // utilixando o operd

//Inserindo um novo item em posição específica
frutas.splice(2, 0, 'morango')
//  2 - posição
//  0 - quantidade de itens a serem removidos

//Excluindo itens da lista
frutas.splice(3,1)
//   3 - posição
//   1 - quantidade de itens a serem removidos
frutas.shift();  //remove o primeiro item da lista
frutas.pop();    //remove o ultimo item da lista

console.log(frutas);

frutas = ['maçã', 'banana', 'morango', 'abacaxi', 'melancia', 'laranja', 'uva']
console.log(frutas[4]);  //acessa numa possição especifica
console.log(frutas.slice(0,4)); //acessa da posição 0, 4 itens a frente
console.log(frutas.slice(1));  //acessa da posição 1 até o final
console.log(frutas.slice(-1));  //acessa da posição final até o inicio
console.log(frutas.length);  //total de itens na lista (começando do 1)
frutas.sort()  //Ordenando a lista em ordem alphabetica
frutas.reverse()  //Ordenando a lista em ordem alphabetica reversa 