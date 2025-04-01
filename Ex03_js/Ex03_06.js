const prompt = require('prompt-sync')();

let salario = Number(prompt("Digite seu salário:"))

if (salario >= 0 && salario <= 2000) {
    let pobre = (salario * 0.12)
    console.log(`O seu reajuste foi de ${pobre}`);
} else {
    if (salario > 2000 && salario <= 4000 ) {
        let funcionario = (salario * 0.10)
        console.log(`O seu reajuste foi de ${funcionario}`);
    } else {
        if (salario > 4000) {
            let rico = (salario * 0.08)
            console.log(`O seu reajuste foi de ${rico}`);
        }
    }
}
