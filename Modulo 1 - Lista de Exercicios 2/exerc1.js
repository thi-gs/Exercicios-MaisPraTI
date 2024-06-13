/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias
*/

let prompt = require('prompt-sync')();

let cigarretes_day = parseInt(prompt("Quantos são os cigarros fumados por dia? "));

let years_smoking = parseInt(prompt("Quantos são os anos fumando? "));

console.log(`O tempo de vida perdido: ${WastedTimeCalculus(cigarretes_day, years_smoking)} dias`);

function WastedTimeCalculus(cigarretes_day, years_smoking){
    let total_cigarretes_smoked = cigarretes_day * (years_smoking * 365);

    let wasted_time_min = total_cigarretes_smoked * 10;
    
    let wasted_days = parseInt((wasted_time_min / 60) / 24);

    return wasted_days;
}

