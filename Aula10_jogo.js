const prompt = require('prompt-sync')();

console.log("======================================");
console.log('🤑      JOGO  DA  ADIVINHAÇÃO      🤑');
console.log("======================================");

let nmSecret = Math.floor(Math.random() * 100) + 1;
let acertou = false

while (acertou == false) {
    let chute = Number(prompt(`Digite um número entre 1 e 100: `))

    if (chute == nmSecret) {
        console.log("parabéns você acertou!!! 👏👏👏");
        acertou = true;
    } else if (chute > nmSecret) {
        console.log(`Você chutou ${chute}, tente um número 👇`);
    } else if (chute < nmSecret) {
        console.log(`Você chutou ${chute}, tente um número 👆`);
    }
}
console.log("FIM");
