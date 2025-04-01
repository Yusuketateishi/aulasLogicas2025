const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite sua 1ª nota:"))
let n2 = Number(prompt("Digite sua 2ª nota:"))

let med = (n1 + n2) / 2
    
if (med > 7) {
    console.log("Aprovado");
} else {
    if (med == 6) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}
