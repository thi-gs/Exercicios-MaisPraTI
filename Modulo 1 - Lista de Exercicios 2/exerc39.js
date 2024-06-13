/*
39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

let A = [];
let B = [];
let values = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null];
let number = 0;

// Gerar vetor de 100 posições
for(let i=0; i<100; i++){
    number = Math.floor(Math.random() * values.length);
    A.push(values[number]);
}

console.log("O vetor inicial está assim: ");
console.log(A);

for(let i=0; i<100; i++){
    if(A[i] !== null && A[i] >= 0){
        B.push(A[i])
    }
}

console.log("\nO vetor final ficou assim: ");
console.log(B);
