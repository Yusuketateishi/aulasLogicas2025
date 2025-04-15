//Escopo de variáveis
//variável global pode ser acessada em qualquer lugar
//variável local so pode ser acessada dentro do bloco
function NomeEscola(){
    let escola = 'SESI'
    console.log(`Valor dentro da função: ${escola}`);

}

let escola = 'SENAI'
console.log(`Valor fora da função: ${escola}`);
NomeEscola();
console.log(`Valor após a função: ${escola}`);

//Utilizando variavrl local
var escola2 = 'SENAI'

function NomeEscola2(){
    console.log(`Valor dentro da função: ${escola2}`);
}

escola2 = 'SENAI'
console.log(`Valor fora da função: ${escola2}`);
NomeEscola2();
console.log(`Valor após a função: ${escola2}`);


//Documento fnções usando o JSDoc
/*
*Soma de dois números
*@param {number} a - primeiro númro
*@param {númber} b - segundo número
*/
function Soma(a, b){
    return a + b;
}

soma(2,4);