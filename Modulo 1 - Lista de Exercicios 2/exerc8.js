/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

LÓGICA DO CÓDIGO:
    # 'hours_trained' recebe o número de horas digitado pelo usuário;
    # 'result' chama a função 'calculator()', que faz o cálculo e retorna os pontos ganhados;
    # O 'console.log' mostra a quantidade de pontos ganhos e sua equivalência em reais
*/

let prompt = require('prompt-sync')();

let hours_trained = prompt("Digite quantas horas de atividade física você teve no mês: ");

let result = calculator();

console.log(`Você ganhou ${result} pontos, que equivalem a R$ ${result * 0.05}`)

function calculator(){
    let points;
    if(hours_trained <= 10){
        points = hours_trained * 2;
    } else if(hours_trained > 10 && hours_trained <= 20){
        points = hours_trained * 5;
    } else if(hours_trained > 20){
        points = hours_trained * 10;
    }
    return points;
}