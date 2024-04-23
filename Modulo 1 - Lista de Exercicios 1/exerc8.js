/*
Questão 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.

Lógica: o programa lê o primeiro valor. Então, lê o segundo valor e baseado nos seus valores
        ordena em ordem crescente. Ainda, se o 2o valor for igual ao 1o, o programa não permite - pedindo
        novamente por outro valor.
*/
let prompt = require('prompt-sync')();
let valor1 = prompt("Digite o primeiro valor: ");
let valor2;

do{
    valor2 = prompt("Digite o segundo valor: ");
} while(valor2 === valor1);

if(valor1 < valor2){
    console.log(`1 - Valores em ordem crescente: ${valor1}, ${valor2}`);
} else if(valor1 > valor2){
    console.log(`2 - Valores em ordem crescente: ${valor2}, ${valor1}`);
}
