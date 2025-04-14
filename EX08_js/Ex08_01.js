const prompt = require('prompt-sync')();



function saudacao () {
    let nome = prompt("Qual seu nome? ")
    console.log(`!!! saudação ${nome} e tenha um bom dia !!!`);   
}
saudacao();
saudacao();
saudacao();
for (let x = 0; x >= 3; x++) {
    saudacao();   
}