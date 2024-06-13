/*
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/

M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
]

somaLinha4(M);
console.log();

somaColuna2(M);
console.log();

diagonalPrincipal(M);
console.log();

todosElementos(M);

function somaLinha4(M){
    let somatorio = 0;

    for(let i=3; i < 4; i++){
        for(let j=0; j < M.length; j++){
            somatorio += M[i][j];
        }
    }

    console.log("A soma dos elementos da 4 linha é: " + somatorio);
}

function somaColuna2(M){
    let somatorio = 0;

    for(let i=0; i < M.length; i++){
        for(let j=1; j < 2; j++){
            somatorio += M[i][j];
        }
    }

    console.log("A soma dos elementos da 2 coluna é: " + somatorio);
}

function diagonalPrincipal(M){
    let somatorio = 0;

    for(let i=0; i < M.length; i++){
        for(let j=i; j < i+1; j++){
            somatorio += M[i][j];
        }
    }

    console.log("A soma dos elementos da diagonal principal é: " + somatorio);
}

function todosElementos(M){
    let somatorio = 0;

    for(let i=0; i < M.length; i++){
        for(let j=0; j < M.length; j++){
            somatorio += M[i][j];
        }
    }

    console.log("A soma de todos elementos da matriz é: " + somatorio);
}