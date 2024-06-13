/*
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.

LÓGICA DO CÓDIGO: 
    # Inicialização das variáveis de controle ('i' e 'j'), da variável que recebe o número digitado pelo
usuário ('number_guess') e a variável com o número sorteado ('number_random').
    # Chamada do método 'numberSelection()', que pede para o usuário digitar um número de 1-5. Se o número não tiver
nesse intervalo, o sistema emite uma mensagem de erro e pede um novo número. Já se o número estiver no intervalo,
a variável de controle 'i' se torna 'false' e a execução do método para.
    # A última porção do código analisa o número digitado com o número sorteado. Se o número sorteado for maior ou menor
do que o número digitado, o usuário tem a chance de tentar novamente. Esse loop só termina quando o usuário acerta o
número sorteado.

*/

let prompt = require('prompt-sync')();
let i=true;
let j=true;
let number_guess;
let number_random = parseInt(Math.random()*6);

numberSelection();

function numberSelection(){
    while (i){
        number_guess = parseInt(prompt("Digite um número de 1 a 5: "));
        if(number_guess >= 1 && number_guess <= 5){
            i = false;
            break;
        } else{
            console.log("Digite um número válido!");
        }
    }
}

while(j){
    if(number_guess === number_random){
        console.log(`Você adivinhou o número sorteado!`);
        j = false;
    } else if(number_random > number_guess){
        console.log(`O número sorteado é maior do que ${number_guess}! Tente novamente`);
        i=true;
        numberSelection();
    } else if(number_random < number_guess){
        console.log(`O número sorteado é menor do que ${number_guess}! Tente novamente`);
        i=true;
        numberSelection();
    }
}

