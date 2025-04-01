const prompt = require('prompt-sync')();

let ano = Number(prompt("Qual ano você nasceu?"));
let idade = 2025 - ano;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
