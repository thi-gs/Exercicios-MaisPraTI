/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas
*/

let prompt = require('prompt-sync')();

let distance = parseInt(prompt("Qual a distância que o passageiro deseja percorrer em Km? "));

console.log(`O valor da passagem é de R$ ${TicketPrice(distance)}`);

function TicketPrice(distance){
    let final_price;
    if(distance <= 200){
        final_price = distance * 0.50;
        return final_price;
    } else{
        final_price = distance * 0.45;
        return final_price;
    }
}