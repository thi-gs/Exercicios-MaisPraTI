/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.

LÓGICA DO CÓDIGO:
    # Enquanto o usuário não digitar 'P' o código vai ficar repetindo, e coletando o salário e sexo;
    # Para o sexo do usuário: o sistema só aceita como entrada "F", "M" ou "P". Caso contrário, o sistema continua 
pedindo pelo dado correto.
    # A cada iteração, o salário e o sexo são armazenados no array 'employers', mudando a posição em que este é 
armazenado - de acordo com a variável contadora 'counter';
    # Por fim, um 'for' percorre o array 'employers' e realiza a soma dos salários dos homens e das mulheres. Então,
imprime na tela o resultado final.
*/
let i=true, j=true;
let employers = [];
let counter = 0;

while(i){
    let prompt = require('prompt-sync')();
    var salary = prompt(`Digite o salário de ID ${counter} ou P para parar: `);
    if(salary === "P"){
        break;
    }
    while(j){
        var gender = prompt(`Digite seu sexo de ID ${counter}, sendo F para Feminino ou M para Masculino ou P para parar: `);
        if(gender === "P" || gender === "F" || gender === "M"){
            break;
        } else{
            console.log("Erro! Nome digitado inválido!")
        }
    }
    if(gender === "P"){
        break;
    }
    employers[counter] = {id: counter, salario: salary, sexo: gender};
    counter++;
    console.log();
}

let total_salaries_man = 0,
    total_salaries_woman = 0;

for (let x in employers){       // o 'x' atua no array, assumindo os valores dos índices do array
    if(employers[x].sexo === "F"){
        total_salaries_woman += parseInt(employers[x].salario);
    } else if(employers[x].sexo === "M"){
        total_salaries_man += parseInt(employers[x].salario);
    }
}

/* Mesma coisa disso:
for(let j=0; j < employers.length; j++){
    if(employers[j].sexo === "F"){
        total_salaries_woman += parseInt(employers[j].salario);
    } else if(employers[j].sexo === "M"){
        total_salaries_man += parseInt(employers[j].salario);
    }
}
*/

console.log(`O total de funcionários é de ${counter}. O salário total pago às mulheres foi de R$ ${total_salaries_woman} e dos homens foi de R$ ${total_salaries_man}`);
