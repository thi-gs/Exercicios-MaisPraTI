/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/

M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
]

console.log("A matriz é : ")
console.table(M);
console.log();
console.log(`A soma das linhas é: ${somaLinhas(M)}`);
console.log();
console.log(`A soma das colunas é: ${somacolunas(M)}`);

function somaLinhas(M){
    let somatorio;
    SL = [];

    for(let i=0; i < M.length; i++){
        somatorio = 0;
        for(let j=0; j < M.length; j++){
            somatorio += M[i][j];
        }
        SL.push(somatorio);
    }

    return SL;
}

function somacolunas(M){
    SC = [0, 0, 0, 0, 0];

    for(let i=0; i < M.length; i++){
        for(let j=0; j < M.length; j++){
            SC[j] += M[i][j];
        }
    }

    return SC;
}