/*
34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
*/

// Gerei uma matriz 10x10 para facilitar a visualização do resultado
let matriz_gerada = gerarMatriz();
console.log("Matriz 10x10 gerada: ");
console.table(matriz_gerada);

for(let i=0; i < 10; i++){
    let multiplicador = matriz_gerada[i][i];
    for(let j=0; j < 10; j++){
        matriz_gerada[i][j] *= multiplicador;
    }
}

console.log("\nA Matriz 10x10 multiplicada pelo elemento diagonal da linha é: ");
console.table(matriz_gerada);



function gerarMatriz(){
    let matriz = [];
    for(let i=0; i < 10; i++){
        let linha = [];
        for(let j=0; j < 10; j++){
            let valor = Math.floor(Math.random() * 100);
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}