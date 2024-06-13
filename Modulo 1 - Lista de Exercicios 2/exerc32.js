/*
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/

let matriz_gerada = gerarMatriz();
console.table(matriz_gerada);

console.log();

// Avalia qual o maior elemento de cada linha e divide cada valor da linha pelo maior elemento
for(let i=0; i < 12; i++){
    let maior = matriz_gerada[i][0];
    for(let j=1; j < 13; j++){
        if(matriz_gerada[i][j] > maior){
            maior = matriz_gerada[i][j];
        }  
    }
    for(let k=0; k < 13; k++){
        let novo_valor = matriz_gerada[i][k] / maior;
        matriz_gerada[i][k] = novo_valor.toFixed(2);
    }  
}

console.table(matriz_gerada);


// Função gera uma matriz 12x13 com números inteiros entre 0-100
function gerarMatriz(){
    let matriz = [];

    for(let i=0; i < 12; i++){
        let linha = [];
        for(let j=0; j < 13; j++){
            let valor = Math.floor(Math.random() * 100);
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}