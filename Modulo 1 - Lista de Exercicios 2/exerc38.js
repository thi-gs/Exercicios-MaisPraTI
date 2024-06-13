/*
38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor
*/

let prompt = require('prompt-sync')()
let vector = [];
let selection;

for(let i=0; i < 6; i++){
    vector[i] = parseInt(prompt(`Digite o ${i+1}o número: `));
}

selection = parseInt(prompt("Digite o número da operação: "));

switch(selection){
    case 1:
        let sum = 0;
        for(let i=0; i < 6; i++){
            sum += vector[i];
        }
        console.log(`O somatório dos valores digitados é ${sum}`);
        break;
    case 2:
        let product = 1;
        for(let i=0; i < 6; i++){
            product *= vector[i];
        }
        console.log(`O produto dos valores digitados é ${product}`);
        break;
    case 3:
        let number_values = 6;
        let sum_values = 0;
        for(let i=0; i < 6; i++){
            sum_values += vector[i];
        }
        console.log(`A média dos valores digitados é ${sum_values / number_values}`);
        break;
    case 4:
        vector.sort((a, b) => {return a-b});
        console.log(`O vetor ordenado de forma crescente fica: \n${vector}`);
        break;
    case 5:
        console.log(`O vetor está assim: \n${vector}`);
        break;
}