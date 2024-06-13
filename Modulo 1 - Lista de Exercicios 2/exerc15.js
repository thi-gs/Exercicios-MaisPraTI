/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
*/

let prompt = require('prompt-sync')();
let numbers = [];
let odds_positions = [];
let counter = 0;

// User digits 10 numbers
for(let i=0; i < 10; i++){
    numbers[i] = parseInt(prompt(`Digite o ${i+1} número: `));
}
console.log(numbers)
// Collects odds numbers and it's indexes
for(let i=0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        odds_positions[counter] = {numero: numbers[i], posicao: i};
        counter++;
    }
}

console.log("Números pares digitados foram:")

// Prints odds numbers and it's indexes
for(x in odds_positions){
    console.log(`O número ${odds_positions[x].numero} está na posição ${odds_positions[x].posicao}`);
}