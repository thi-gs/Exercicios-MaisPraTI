/*
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km

LÓGICA DO CÓDIGO:
    # Inicialização das variáveis de controle 'i', 'j' e 'k' como true; e das variáveis para o tipo de carro 
('type_of_car'), número de diárias ('days_rented') e Km dirigidos ('km_drived').
    # Para cada dado que o usuário digita há uma validação, para avaliar se o que foi digitado faz sentido. Se sim,
o código continua. Se não, uma mensagem de erro aparece e o usuário deve digitar novamente.
    # A função 'calculator()' faz os cálculos de acordo com os dados fornecidos pelo usuário, seguindo o definido pelo
enunciado da questão.
*/

let prompt = require('prompt-sync')();
let i = true;
let j = true;
let k = true;
let type_of_car,days_rented,km_drived;

while(i){
    type_of_car = parseInt(prompt("Digite o tipo de carro alugado [1] Popular ou [2] Luxo: "));
    if(type_of_car === 1 || type_of_car === 2){
        i=false;
        break;
    } else{
        console.log("Número digitado inválido! Digite [1] ou [2] apenas!");
    }
}

while(j){
    days_rented = prompt("Digite a quantidade de diárias: ");
    if(!isNaN(days_rented) && days_rented > 0){
        i=false;
        break;
    } else{
        console.log("Número digitado inválido!");
    }
}

while(k){
    km_drived = prompt("Digite a quantidade de Km percorridos: ");
    if(!isNaN(km_drived) && km_drived > 0){
        console.log(`O valor a ser pago é: R$ ${calcultator()}`);
        i=false;
        break;
    } else{
        console.log("Número digitado inválido!");
    }
}

function calcultator(){
    if(type_of_car === 1 && km_drived <= 100){
        return (90 * days_rented) + (0.20 * km_drived);
    } else if (type_of_car === 1 && km_drived > 100){
        return (90 * days_rented) + (0.10 * km_drived);
    } else if(type_of_car === 2 && km_drived <= 200){
        return (150 * days_rented) + (0.30 * km_drived);
    } else if(type_of_car === 2 && km_drived > 200){
        return (150 * days_rented) + (0.25 * km_drived);
    }
}

