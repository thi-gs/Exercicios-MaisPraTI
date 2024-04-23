/*
Questão 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
*/

let prompt = require('prompt-sync')();

let temp_Celsius = parseInt(prompt("Digite a temperatura em Celsius: "));

if(!Number.isNaN(temp_Celsius)){
    let temp_Fahrenheit = temp_Celsius * 1.8 + 32;

    console.log(`A temperatura de ${temp_Celsius} graus Celsius equivale a ${temp_Fahrenheit} graus Fahrenheit`);
} else{
    console.log("Erro. Digite um número!");
}



