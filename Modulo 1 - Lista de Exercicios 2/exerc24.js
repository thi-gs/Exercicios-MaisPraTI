/*
24. Dada uma Matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

let M = [    
    [1, -2, 3, -4, 5, -6, 7, 8],
    [1, 2, -3, 4, 5, 6, -7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16],
    [9, 10, 11, 12, -13, 14, -15, 16],
    [17, 18, 19, 20, 21, -22, 23, -24],
    [-17, 18, -19, 20, -21, 22, 23, 24]
];

let V =[];

let contador;

for(let i=0; i < 6; i++){
    contador = 0;
    for(let j=0; j < 8; j++){
        if(M[i][j] < 0){
            contador++;
        }
    }
    V[i] = contador; 
}

console.log(V);