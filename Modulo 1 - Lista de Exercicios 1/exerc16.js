/* 
Questão 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

Lógica: dado um número 'n', avaliar o resto da divisão de 'n' % 'n-1' até que 'n-1' seja diferente de 1.
Se o resultado for igual a zero, indica um número não primo.
Se 'n-1' chegar ao valor 1, indica que o número 'n' é primo.
 */

let numero=100;
let aux = 0;
let acumulador_numeros = "";
let contador = 0;

while(contador <= 50){
    aux = numero - 1;
    while(aux >= 1){
        if(aux != 1 && numero % aux == 0){
            break;
        }
        if(aux == 1){
            acumulador_numeros += `${numero} `;
            contador++;
        }
        aux--;
    }
    numero++;
}
console.log(acumulador_numeros);