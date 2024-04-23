/*
Questão 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/


let prompt = require('prompt-sync')();
let A = parseInt(prompt("Digite o primeiro lado: "));
let B = parseInt(prompt("Digite o segundo lado: "));
let C = parseInt(prompt("Digite o terceiro lado: "));
let tipo_triangulo;

if(A < B + C && B < A + C && C < A + B){
    if(A === B && B === C){
        tipo_triangulo = "Triângulo Equilátero";
    } else if(A === B || A === C || B === C){
        tipo_triangulo = "Triângulo Isósceles";
    } else if(A != B && B != C){
        tipo_triangulo = "Triângulo Escaleno";
    }
    console.log(`O triângulo formado é um ${tipo_triangulo}`);
} else{
    console.log("Os lados fornecidos não formam um triângulo");
}


