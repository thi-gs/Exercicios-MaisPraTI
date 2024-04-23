/*
Questão 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
*/

let prompt = require('prompt-sync')();
let av1 = parseFloat(prompt("Digite a primeira nota: "));
let av2 = parseFloat(prompt("Digite a segunda nota: "));

let media = (av1 + av2) / 2;

if(media >= 6.0){
    console.log("Média: " + media + ". PARABÉNS! Você foi aprovado");
} else{
    console.log("Média: " + media + ". Você foi REPROVADO! Estude mais ");
}