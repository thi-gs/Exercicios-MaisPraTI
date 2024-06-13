/*
33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

let prompt = require('prompt-sync')();
let matriz = [];

// Programa lê uma matriz 3x3
for(let i=0; i < 3; i++){
    linha_matriz = [];
    for(let j=0; j < 3; j++){
        let elemento = parseInt(prompt(`Digite o valor de [${i}][${j}]: `));
        linha_matriz.push(elemento);
    }
    matriz.push(linha_matriz);
}

console.log("\nA matriz digitada foi: ");
console.table(matriz);

let media = mediaDiagSec(matriz);

console.log("\nA média dos elementos da diagonal secundária é " + media);

// Multiplicação dos elementos da diagonal principal com a média
for(let i=0; i < 3; i++){
    for(let j=0; j < 3; j++){
        if(i === j){
            matriz[i][j] = matriz[i][j] * media;
        }
    }
}

console.log("\nA matriz alterada é: ");
console.table(matriz);


// Função que calcula a média dos elementos da diagonal secundária
function mediaDiagSec(matriz){
    let soma = 0;

    for(let i=0; i < 3; i++){
        let j = 2 - i;
        soma += matriz[i][j];
    }

    let media = soma / 3;

    return media;
}