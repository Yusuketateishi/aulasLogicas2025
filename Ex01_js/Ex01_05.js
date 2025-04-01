const prompt = require('prompt-sync')();

let metros = Number(prompt("Quantos metros você conseguiu?"));
let centimetros = metros * 100;
let km = metros / 1000;
let mm = metros * 1000;

console.log(`Seus metros são ${metros}, Sendo os cm, km e mm da distancia percorrida ${centimetros}, ${km} e ${mm}`);

