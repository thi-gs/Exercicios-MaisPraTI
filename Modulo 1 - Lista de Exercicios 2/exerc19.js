/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/

let prompt = require('prompt-sync')();
let hours = [];

for(let i=0; i < 5; i++){
    hours[i] = prompt(`Digite o ${i+1} horário, no formato HH.MM.SS: `);

    // Validação para a hora, que não pode ser < 0 nem >= 24
    if(parseInt(hours[i].substring(0,2)) < 0 || parseInt(hours[i].substring(0,2)) >= 24){
        console.log("A Hora está com formato errado! Digite novamente")
        i--;

        // Validação para os minutos, que não pode ser < 0 nem > 60
    } else if(parseInt(hours[i].substring(3,5)) < 0 || parseInt(hours[i].substring(3,5)) > 60){
            console.log("Os Minutos estão com formato errado! Digite novamente")
            i--;

        // Validação para os segundos, que não pode ser < 0 nem > 60
    } else if(parseInt(hours[i].substring(6,8)) < 0 || parseInt(hours[i].substring(6,8)) > 60){
        console.log("Os Segundos estão com formato errado! Digite novamente")
        i--;
    }
}

console.log("\nAqui estão os horários registrados: ")
for(hour of hours){
    console.log(hour);
}