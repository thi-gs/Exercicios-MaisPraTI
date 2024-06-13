/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/


let prompt = require('prompt-sync')();
let number,
    controller = true,
    counter = 0;
let array_numbers = [];

do{
    number = prompt("Digite um número ou [E] para sair: ");
    if(number === "E"){
        break;
    }
    array_numbers[counter] = parseInt(number); 
    counter++;
}while(controller);

console.log(`O somatório dos valores digitados é de: ${calculateSum(array_numbers)}`);
console.log(`O menor número digitado é: ${calculateSmaller(array_numbers)}`);
console.log(`A média dos números digitados é: ${calculateAverage(array_numbers)}`);
console.log(`A quantidade de números pares digitados é de: ${calculateOddNumbers(array_numbers)}`);

// Calculate sum of inputed numbers
function calculateSum(array_numbers){
    let sum = 0;

    for(let i=0; i < array_numbers.length; i++){
        sum += array_numbers[i];
    }

    return sum;
}


// Calculate smaller inputed number 
function calculateSmaller(array_numbers){
    let smaller = array_numbers[0];
    
    for(let i=0; i < array_numbers.length; i++){
        if(i+1 < array_numbers.length && smaller > array_numbers[i+1]){
            smaller = array_numbers[i+1];
        }
    }

    return smaller;
}

// Calculate average 
function calculateAverage(array_numbers){
    let numbers_sum = calculateSum(array_numbers);
    let number_of_numbers = array_numbers.length;
    let average = numbers_sum / number_of_numbers;

    return average;
}

// Calculate amount of odd numbers
function calculateOddNumbers(array_numbers){
    let number_of_odds = 0;

    for(let i=0; i < array_numbers.length; i++){
        if(array_numbers[i] % 2 == 0){
            number_of_odds++;
        }
    }

    return number_of_odds;
}


