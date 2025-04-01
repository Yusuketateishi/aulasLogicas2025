const prompt = require('prompt-sync')();

let cda = [];

for (let n = 1; n <= 6; n++) {
    cda.push(prompt(`Digite 6 comidas que você gosta: `));
    console.log(cda);
}
console.log(cda[0]);
console.log(cda[4]);
cda.splice(5, 1, 'Fritas')
console.log(cda);
cda.splice(6, 0, "Hamburguer")
console.log(cda);
cda.splice(5, 0, "Puré")
cda.shift()
console.log(cda);
cda.pop()
console.log(cda);
console.log(cda.slice(0,3));
console.log(cda.slice(3,4));
console.log(cda.length);
cda.reverse()
console.log(cda);



