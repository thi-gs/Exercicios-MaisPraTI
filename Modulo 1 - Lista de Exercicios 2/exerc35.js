/*
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/

// Os 30 valores foram criados para facilitar o programa
let valores = criarValores();
console.log(valores);
let valores_pares = [];
let valores_impares = [];

for(let i=0; i < 30; i++){
    if(valores[i] % 2 == 0){
        if(valores_pares.length < 5){
            valores_pares.push(valores[i]);
        } else if(valores_pares.length == 5){
            console.log("Array Par: " + valores_pares);
            valores_pares = [];
            valores_pares.push(valores[i]);
        }
    } else{
        if(valores_impares.length < 5){
            valores_impares.push(valores[i]);
        } else if(valores_impares.length == 5){
            console.log("Array Impar: " + valores_impares);
            valores_impares = [];
            valores_impares.push(valores[i]);
        }
    }
}

console.log("\nTérmino - Array Par final: " + valores_pares);
console.log("Término - Array Impar final: " + valores_impares);

// Função cria os valores de entrada do programa
function criarValores(){
    let valores = [];
    for(let i=1; i <= 30; i++){
        valores.push(i);
    }
    return valores;
}
