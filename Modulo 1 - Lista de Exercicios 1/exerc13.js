/*
Questão 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N

Lógica: o algoritmo repete 5 vezes, e a cada valor recebido mostra na tela a tabuada do número digitado,
        até que 'N' seja seu valor.
*/
let prompt = require('prompt-sync')();

for(let i=0; i < 5; i++){
    let numero = parseInt(prompt(`Digite o ${i+1} número: `));
    for(let j=1; j <= numero; j++){
        console.log(`${j} * ${numero} = ${j * numero}`);
    }
}