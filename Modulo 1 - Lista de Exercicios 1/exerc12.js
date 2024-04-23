/*
Questão 12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.

Lógica: a iteração vai do número 1000 a 1999. Se a divisão do número por 11 tiver como resto 5, este
        é adicionado ao resultado.
*/

let todos_numeros = "";
let pontuacao;

for(let i=1000; i < 2000; i++){
    if(i % 11 == 5){ 
        todos_numeros += i + " ";
    }
}

console.log(todos_numeros);