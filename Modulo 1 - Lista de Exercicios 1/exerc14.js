/*
Questão 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.

Lógica: enquanto 'numero' for diferente de 0 e de NaN, a iteração continua e o algoritmo
        recebe os 'numeros'. Quando o usuário digita 0, o programa mostra a média artimética.
*/

let prompt = require('prompt-sync')();
let numero;
let somatorio = 0;
let contador = 0;

while(numero != 0){
   numero = parseFloat(prompt(`Digite o ${contador+1} número: `));
   if(numero != 0 && !Number.isNaN(numero)){
    somatorio += numero;
    contador++;
   } else if(Number.isNaN(numero)){
    console.log("Erro! Digite um número válido!");
   }
}

let media = somatorio / contador;

if(!Number.isNaN(media)){
    console.log(`A média aritmética dos ${contador} números adicionados é: ${media}`);
} else if(contador == 0){
    console.log("Erro! Nenhum valor adicionado");
}


