/*
Questão 2: Escreva um algoritmo para ler: 
        o número de eleitores de um município, 
        o número de votos brancos, 
        nulos e 
        válidos. 
    Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

    Lógica: o programa só aceita números digitados - se o usuário digitar uma letra ou tentar enviar
    nenhum número, uma mensagem de erro é mostrada.
*/

let prompt = require('prompt-sync')();
let eleitores = parseInt(prompt("Digite o número de eleitores: "));
let votos_brancos = parseInt(prompt("Digite o número de votos brancos: "));
let votos_nulos = parseInt(prompt("Digite o número de votos nulos: "));
let votos_validos = parseInt(prompt("Digite o número de votos válidos: "));

if(!Number.isNaN(eleitores) && !Number.isNaN(votos_brancos) && 
    !Number.isNaN(votos_nulos) && !Number.isNaN(votos_validos)){
        let percentual_brancos = (votos_brancos * 100) / eleitores;
        let percentual_nulos = (votos_nulos * 100) / eleitores;
        let percentual_validos = (votos_validos * 100) / eleitores;

        console.log(`O percentual de votos brancos foi de ${percentual_brancos}%`);
        console.log(`O percentual de votos nulos foi de ${percentual_nulos}%`);
        console.log(`O percentual de votos válidos foi de ${percentual_validos}%`);
} else{
    console.log("Erro. Digite um número!");
}

