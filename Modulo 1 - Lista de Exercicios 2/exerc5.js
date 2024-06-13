/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

let prompt = require('prompt-sync')();
let i,j=true;

while(i=true){
    var first_selection = prompt("Jogador 1, escolha: Pedra, Papel ou Tesoura? ");
    if(first_selection === "Pedra" || first_selection === "Papel" || first_selection === "Tesoura"){
        i = false;
        break;
    } else{
        console.log("Erro de digitação! Digite novamente!")
    }
}

while(j=true){
    var second_selection = prompt("Jogador 2, escolha: Pedra, Papel ou Tesoura? ");
    if(second_selection === "Pedra" || second_selection === "Papel" || second_selection === "Tesoura"){
        i = false;
        break;
    } else{
        console.log("Erro de digitação! Digite novamente!")
    }
}

if(first_selection === "Pedra" && second_selection == "Tesoura" || 
    first_selection === "Papel" && second_selection == "Pedra" || 
    first_selection === "Tesoura" && second_selection == "Papel" 
){
    console.log(`Jogador 1 ganhou, pois ${first_selection} ganha de ${second_selection}`);
} else if(second_selection === "Pedra" && first_selection == "Tesoura" || 
        second_selection === "Papel" && first_selection == "Pedra" || 
        second_selection === "Tesoura" && first_selection == "Papel"){
            console.log(`Jogador 2 ganhou, pois ${second_selection} ganha de ${first_selection}`);
} else if(first_selection === second_selection){
    console.log(`Empate! Ambos jogadores escolheram ${first_selection}`);
}