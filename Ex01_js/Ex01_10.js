const prompt = require('prompt-sync')();

let dias = Number(prompt("Quantos dias esse carro foi alugado?"));
let km = Number(prompt("Quantos kilometros esse carro percorreu?"))

let carroDias = dias * 60;
let kmCarro = parseFloat(km * 0.15)
let precototal = parseFloat(carroDias + kmCarro)

console.log(`A quantidade de dias que o carro foi alugado foi ${dias} e a quantidade de km percorridos forão ${km}, Sendo o preço do carro por dias ${carroDias} e o preço por km ${kmCarro}, No final tendo um preço total de ${precototal} R$`);





