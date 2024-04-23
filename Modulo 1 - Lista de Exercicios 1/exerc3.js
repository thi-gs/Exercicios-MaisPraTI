/*
Questão 3: Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

let prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));
let num4 = parseInt(prompt("Digite o terceiro número: "));

let num1_proc = num1 + 25;
let num2_proc = num2 * 3;
let num3_proc = num3 * 0.12;
let num4_proc = num1 + num2 + num3 + num4;

console.log(`Número 1 digitado: ${num1} + 25 = ${num1_proc}`);
console.log(`Número 2 digitado: ${num2} * 3 = ${num2_proc}`);
console.log(`Número 3 digitado: ${num3} * 0.12 = ${num3_proc}`);
console.log(`Número 4 digitado: ${num4} + ${num1} + ${num2} + ${num3} = ${num4_proc}`);