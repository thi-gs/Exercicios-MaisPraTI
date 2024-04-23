/*
Questão 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

Lógica: o usuário digita um número, e o programa digita o número inteiro por 10 vezes.
*/

let prompt = require('prompt-sync')();
let numero = parseInt(prompt("Digite um número na tela: "));

for(let i=0; i < 10; i++){
    console.log(numero);
}