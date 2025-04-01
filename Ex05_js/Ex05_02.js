const prompt = require('prompt-sync')();

console.log("===============");
console.log("    MEGASENA   ");
console.log("===============");

for(let nm = 1; nm <= 6; nm++){
    let nrMega = Math.floor(Math.random() * 60) + 1;
    console.log(nrMega);
}