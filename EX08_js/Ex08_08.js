const prompt = require('prompt-sync')();

function senhaAleatoria(qtdeCaracteres) {
let listaCaracteres= 'zxcvbnmasdfghjklçqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789!@#$%¨&*()_,.;]~[´'
let senha = '';

for (let x = 1; x <= qtdeCaracteres; x++){

    let posSorteada = Math.floor(Math.random() * listaCaracteres.length);
senha = senha + listaCaracteres[posSorteada];
}
return senha;
}
let senhaGerada = senhaAleatoria(99999999);
console.log(senhaGerada);