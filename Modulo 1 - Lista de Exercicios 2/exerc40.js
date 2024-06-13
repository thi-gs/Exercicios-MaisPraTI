/*
40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
*/

let loto_numbers = [1, 8, 6, 7, 5];
let loto_players = [];

// Criar vetor contendo os apostadores e suas respostas
for(let i=0; i<100; i++){
    let answer = [];
    for(let j=0; j<5; j++){
        let number = Math.floor(Math.random() * 10 + 1);
        answer.push(number);
    }
    loto_players[i] =  {id: i+1, answer:answer}
}

console.log("O gabarito é: " + loto_numbers);
console.log(`\nExemplo dos jogadores: `);
for(let i=0; i < 5; i++){
    console.log(loto_players[i]);
}

console.log();

// Comparar respostas dos jogadores com o gabarito
for(let i=0; i<100; i++){
    let score = 0;
    for(let j=0; j<5; j++){
        if(loto_numbers[j] == loto_players[i].answer[j]){
            score++;
        }
    }
    if(score == 5){
        console.log(`O jogador de id ${loto_players[i].id} foi o GANHADOR`);
    } else{
        console.log(`O jogador de id ${loto_players[i].id} marcou ${score} pontos`);
    }
}