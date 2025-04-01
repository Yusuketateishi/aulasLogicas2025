const prompt = require('prompt-sync')();

let vendeu = Number(prompt("Quanto ele vendeu?"))

if (vendeu > 5000) {
    let comissao1 = 5 / 100 * vendeu;
    console.log(`Sua comissão é de ${comissao1}`);

}
else {
    let comissao2 = 3 / 100 * vendeu
    console.log(`Sua comissão é de ${comissao2}`);
}

