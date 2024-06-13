/*
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

let fibo = [];
fibo[0] = 1;
fibo[1] = 1;

for(let i=2; i < 10; i++){
    if(i == 2){
        console.log(fibo[0]);
        console.log(fibo[1]);
    }
    fibo[i] = fibo[i-1] + fibo[i-2];
    console.log(fibo[i]);
}
