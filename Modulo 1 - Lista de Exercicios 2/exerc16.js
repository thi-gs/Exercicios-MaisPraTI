/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

let vector = [];
let number_random;

// Populate an array with 20 random numbers

for(let i=0; i < 20; i++){
    vector[i] = parseInt(Math.random()*100);
}


console.log(`Os números gerados foram ${vector}`);

// Order array
/**
 * Sorting algorithm logic: select the bigger number at each iteration, and place it in the last arrays' position.
 *                          At each iteration, the last number is not read anymore (because it is the bigger number)
 */
let vector_size = vector.length-1;
let bigger;
let position;

for(let i=0; vector_size > 0;vector_size--){
    bigger = vector[0];
    position = 0;
    for(let j=i+1; j <= vector_size; j++){
        if(vector[j] > bigger){
            bigger = vector[j];
            position = j;
        }
    }
    if(vector[vector_size] != bigger){
        let aux = vector[vector_size];
        vector[vector_size] = bigger;
        vector[position] = aux;
    }
}


console.log();

console.log(`Vetor ordenado ${vector}`);