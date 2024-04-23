/*
Questão 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.

Lógica: enquanto 'numero' e 'peso' forem diferentes de 0 e de NaN, a iteração continua e o algoritmo
        recebe os 'numeros' e 'pesos'. Quando o usuário digita 0, o programa mostra a média ponderada.
*/

let prompt = require('prompt-sync')();
let numero;
let peso;
let soma_produtos = 0;
let soma_pesos = 0;
let contador = 0;

while(numero != 0 && peso != 0){
    numero = parseFloat(prompt(`Digite o ${contador+1} número: `));

    if(numero != 0 && !Number.isNaN(numero)){
            peso = parseFloat(prompt(`Digite o peso para o ${contador+1} número: `));

            if(peso != 0 && !Number.isNaN(peso)){
                soma_produtos += numero * peso;
                soma_pesos += peso;
                contador++;
            }else if(Number.isNaN(peso)){
                console.log("Erro! Digite um peso válido!");
            }
    } else if(Number.isNaN(numero)){
        console.log("Erro! Digite um número válido!");
    }
}

let media = soma_produtos / soma_pesos;

if(!Number.isNaN(media)){
    console.log(`A média ponderada dos ${contador} números adicionados é: ${media}`);
} else if(contador == 0){
    console.log("Erro! Nenhum valor adicionado");
}