/*
Questão 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.

Lógica: o usuário digita um número. Se o resto da divisão do número por 2 for igual a zero, o número for
         diferente de NaN e maior do que 0 - ele é PAR.
         Já se o resto da divisão do número por 2 for diferente de zero, o número for diferente de NaN 
         e maior do que 0 - ele é ÍMPAR.
         Quando o usuário digitar 0, o programa encerra.

*/

let prompt = require('prompt-sync')();
let numero;

do{
    numero = parseInt(prompt("Digite um número: "));
    
    if(numero % 2 == 0 && !Number.isNaN(numero) && numero > 0){
        console.log(`O número ${numero} é PAR`);
    } else if(numero % 2 != 0 && !Number.isNaN(numero) && numero > 0) {
        console.log(`O número ${numero} é ÍMPAR`);
    } 
} while(!Number.isNaN(numero) && numero > 0);

