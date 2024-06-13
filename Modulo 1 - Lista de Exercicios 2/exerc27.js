/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/
let prompt = require('prompt-sync')();
let matriz = [];
let V = [];

// Adição de valores a matriz
for(let i=0; i < 6; i++){
    matriz[i] = []; 
    for(let j=0; j < 6; j++){
        matriz[i][j] = parseInt(prompt(`Digite um valor inteiro para a posição M[${i}][${j}]: `));
    }
}

console.table(matriz);

let A = parseInt(prompt("Digite um número para fazer a multiplicação: "));

// Inserção, dos valores da matriz multiplicados, ao vetor
for(let i=0; i < 6; i++){
    for(let j=0; j < 6; j++){
        V.push(matriz[i][j] * A);
    }
}

console.log(V);