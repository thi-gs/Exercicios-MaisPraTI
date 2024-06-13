/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

let prompt = require('prompt-sync')();

let A = prompt("Digite o valor do primeiro segmento de reta: ");

let B = prompt("Digite o valor do segundo segmento de reta: ");

let C = prompt("Digite o valor do terceiro segmento de reta: ");

if(A < B + C && B < A + C && C < A + B){
        console.log("É possível formar um triângulo");
    } else{
        console.log("Não é possível formar um triângulo");
    }