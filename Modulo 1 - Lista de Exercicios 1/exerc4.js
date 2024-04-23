/*
Questão 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
*/

let prompt = require('prompt-sync')();
let av1 = parseFloat(prompt("Digite a primeira nota: "));
let av2 = parseFloat(prompt("Digite a segunda nota: "));

let media = (av1 + av2) / 2;

if(media >= 6.0){
    console.log("PARABÉNS! Você foi aprovado com nota " + media);
} else{
    console.log("Nada a declarar!");
}