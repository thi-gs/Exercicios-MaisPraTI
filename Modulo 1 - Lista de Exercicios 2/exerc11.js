/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/

let prompt = require('prompt-sync')();
let first_term = parseInt(prompt("Digite o primeiro termo da PA: "));
let ratio = parseInt(prompt("Digite a razão da PA: "));
let sum = 0,
    number;

for(let i=1; i <= 10; i++){
    number = first_term + (ratio * i);
    console.log(`Elemento ${i}: ${number}`);
    sum += number;
}

console.log(`A soma dos 10 primeiros números da PA é: ${sum}`);