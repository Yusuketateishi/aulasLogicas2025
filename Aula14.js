const prompt = require('prompt-sync')();



//Criando função usando o function

function linha() {
    console.log(("--------------"));
}
linha();
console.log("  SESI/SENAI  ");
linha();

//Função sem parâmetro e sem retorno
function cabecalho() {
    linha()
    console.log("   SESI/SENAI   ");
    linha()
}
cabecalho();

//Função com parâmetro e sem retorno
function cabecalhoEscola(nomeEscola) {
    linha()
    console.log(nomeEscola);
    linha()
}
cabecalhoEscola("USP")
cabecalhoEscola("SESI")

//Função com dois parâmetros e sem retorno
function soma(nr1,nr2){
    let result = nr1 + nr2
    console.log(result);
}
soma(9, 4)
soma(30, 55)
soma(354862837, 32865297356293)

//Função com parâmetros e retorno
function media (n1, n2){
    let resultado = (n1 + n2) / 2
    return resultado;
}
let valor = media (20, 9)
console.log(valor);



