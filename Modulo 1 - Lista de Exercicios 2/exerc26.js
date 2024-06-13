/*
26. Dadas duas matrizes numéricas A[1..5,1..3] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].
*/

let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15]
];

let B = [
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30]
];

let P = [];

for (let i = 0; i < 5; i++) {
    P[i] = [];
    for (let j = 0; j < 5; j++) {
        P[i][j] = 0;
        for (let k = 0; k < 3; k++) {
            P[i][j] += A[i][k] * B[k][j];
        }
    }
}

console.log("Resultado da multiplicação:");
console.table(P);