/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h
-1
, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/


let prompt = require('prompt-sync')();

let car_speed = parseInt(prompt("Qual é a velocidade do carro em Km/h? "));

if(car_speed > 80){
    console.log(`O usuário foi multado por passar do limite de 80 Km/h, no valor de R$ ${SpeedAnalyzer(car_speed)}`);
} else{
    console.log("Velocidade dentro do limite permitido");
}

function SpeedAnalyzer(car_speed){
    let ticket_amount = (car_speed - 80) * 5;
    return ticket_amount;
}
