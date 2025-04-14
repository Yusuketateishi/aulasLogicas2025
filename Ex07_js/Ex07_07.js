let frase = "Gol;Corsa;Palio;Monza;Fusca"
let palavra = frase.split(';')



for (const [pos, listapalavra] of palavra.entries()) {
    console.log(`A palavra da posição ${pos} é ${palavra}`);
}