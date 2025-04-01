//Estrutura de laço de repetição for
const prompt = require('prompt-sync')();

//inicialização da variável ; condição do for; incremento da variável
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
}

//neste for iniciamos a partir do número 5, até o nº 50
//incrementamos de 3 em 3 no contador
for (let cont = 5; cont <= 50; cont += 3) {
    console.log(cont);
}

//utilizando o break para parar o for
for (let cont = 1; cont <= 500; cont++ ) {
    console.log(cont);
    if (cont == 50) {
        break;
    }
}

console.log('entregando os notebooks');
for (let nr = 1; nr <= 32 ; nr++){
    let nome = prompt(`Quem é o nº ${nr}: `)
    let presente = prompt (`O(A) ${nome} está presente (S ou N)? `)
   
    if (presente == "S") {
        console.log(`Pegar o notebook ${nr}`);
        console.log(`Levar o notebook até o(a) ${nome}`);
    }else {
        console.log(`Não pegar o notebook ${nr}`);
    }
}

//Tabuada com o for
let nr = 6;
for (let n = 1;n <= 10; n++) {
    console.log(`${nr} X ${n} = ${nr * n}`);
    
}


