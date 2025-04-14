const prompt = require('prompt-sync')();
let vogais = ["a","e","i","o","u"]
let palavra = prompt("Digite uma palavra: ")

for (let letra of palavra){
    if(vogais.includes(letra.toLowerCase()))
    console.log(letra);
    
}


