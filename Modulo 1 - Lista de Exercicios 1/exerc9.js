/*
Questão 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:

Lógica: para cada código digitado, o programa relaciona com sua respectiva região.
*/


let prompt = require('prompt-sync')();
let produto = parseInt(prompt("Digite o código de origem do produto: "));
let regiao;

if(produto === 1){
    regiao = "Sul";
} else if(produto === 2){
    regiao = "Norte";
} else if(produto === 3){
    regiao = "Leste";
} else if(produto === 4){
    regiao = "Oeste";
} else if((produto >= 5 && produto <= 6) || (produto >= 25 && produto <= 50)){
    regiao = "Nordeste";
} else if(produto >= 7 && produto <= 9){
    regiao = "Sudeste";
} else if(produto >= 10 && produto <= 20){
    regiao = "Centro-Oeste";
} else {
    regiao = "Importado";
}

console.log(`A região do produto de código ${produto} é ${regiao}`);


