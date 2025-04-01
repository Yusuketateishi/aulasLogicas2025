const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o ano de nascencia:"))
let n2 = Number(prompt("Digite o ano atual:"))

let idade = (n2 - n1)
if (idade <= 10) {
    console.log(`Criança`);
} else {
    if (idade >= 11 && idade <= 17) {
        console.log(`Adolescente`);
    }else {
        if (idade >= 18 && idade <= 59) {
            console.log(`Adulto`);
        } else {
            if (idade > 60) {
                console.log(`Idoso`);
            }
        }
    }
}