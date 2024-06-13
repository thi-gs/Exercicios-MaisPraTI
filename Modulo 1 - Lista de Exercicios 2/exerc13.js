/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/

let fibo = [];
fibo[0] = 1;
fibo[1] = 1;

for(let i=2; i < 15; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log(fibo);