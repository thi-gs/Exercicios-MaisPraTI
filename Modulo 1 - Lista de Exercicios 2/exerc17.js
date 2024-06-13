/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

let prompt = require('prompt-sync')();

let names = [];
let ages = [];

for(let i=0; i < 9; i++){
    names[i] = prompt(`Digite o ${i+1}o nome: `);
    ages[i] = parseInt(prompt(`Digite a ${i+1}a idade: `));
    console.log();
}

// Test if an age is smaller than 18. If yes, it prints the name in the same index as the numbers'
for(let i=0; i < ages.length; i++){
    if(ages[i] < 18){
        console.log(`A pessoa de nome ${names[i]} é de menor, com idade de ${ages[i]} anos`);
    }
}
