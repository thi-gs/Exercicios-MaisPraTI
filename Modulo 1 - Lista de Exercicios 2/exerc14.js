/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

let prompt = require('prompt-sync')();
let names = [];

// User digits 7 names
for(let i=0; i < 7; i++){
    names[i] = prompt(`Digite o ${i+1} nome: `);
}

// Prints names on inverse order
for(let i=6; i >= 0; i--){
    console.log(names[i]);
}