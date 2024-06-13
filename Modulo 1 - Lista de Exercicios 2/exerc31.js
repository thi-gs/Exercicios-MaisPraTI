/*
31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/

let prompt = require('prompt-sync')();
let A = parseInt(prompt("Digite um número inteiro: "));

let matriz_gerada = gerarMatriz();
console.log("A matriz 30x30 gerada é: ")
console.table(matriz_gerada);

let contagem = contagemIguais(matriz_gerada, A);
console.log(`A quantidade de vezes que o número ${A} apareceu na matriz 30x30 foi de ${contagem} vezes`);
console.log();

let matrizX = matrizDiferentes(matriz_gerada, A);
console.log(`A matriz contendo todos os elementos diferentes de ${A} é: `);
console.table(matrizX);


function contagemIguais(matriz_gerada, A){
    let contador = 0;

    for(elemento of matriz_gerada){
        for(let i=0; i < matriz_gerada.length; i++){
            if(elemento[i] === A){
                contador++;
            }
        }
    }

    return contador;
}


function matrizDiferentes(matriz_gerada, A){
    let X = [];

    for(elemento of matriz_gerada){
        let linha_X = [];
        for(let i=0; i < matriz_gerada.length; i++){
            let valor;
            if(elemento[i] === A){
                valor = "xx";
            } else{
                valor = elemento[i];
            }
            linha_X.push(valor);
        }
        X.push(linha_X);
    }

    return X;
}

function gerarMatriz(){
    let matriz = [];

    for(let i=0; i < 30; i++){
        let linha = [];
        for(let j=0; j < 30; j++){
            let valor = Math.floor(Math.random() * 100);
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}