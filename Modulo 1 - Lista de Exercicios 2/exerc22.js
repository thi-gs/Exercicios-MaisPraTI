/* 
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/

let prompt = require('prompt-sync')();
let controlador = true;
let salario, nro_filhos, contador = 0;
let dados_habit = [];

while(controlador){
    salario = parseFloat(prompt(`Digite o valor do salário para a ${contador+1} pessoa: `));
    nro_filhos = parseInt(prompt(`Digite a quantidade de filhos da ${contador+1} pessoa: `));

    dados_habit[contador] = { salario: salario, nro_filhos: nro_filhos };
    contador++;

    let saida_loop = prompt("Digite 'E' para terminar a inserção e ver os resultados ou pressione 'Enter' para continuar: ")
    if(saida_loop === "E"){
        controlador = false;
    }
}

calculosHabitantes(dados_habit, contador);

function calculosHabitantes(dados_habit, contador){
let soma_salarios = 0, media_salario, soma_filhos = 0, media_filhos; 

    // Soma dos salários, encontrar o maior salario e número de pessoas com salário até 350
    let maior_salario = dados_habit[0].salario;
    let nro_salarios_baixos = 0;
    for(indice in dados_habit){
        soma_salarios += dados_habit[indice].salario;

        if(dados_habit[indice].salario > maior_salario){
            maior_salario = dados_habit[indice].salario;
        }

        if(dados_habit[indice].salario <= 350){
            nro_salarios_baixos++;
        }
    }

    // Cálculo da média dos salários
    media_salario = soma_salarios / contador;

    // Soma dos filhos
    for(indice in dados_habit){
        soma_filhos += dados_habit[indice].nro_filhos;
    }

    // Cálculo da média de filhos
    media_filhos = soma_filhos / contador;

    // Cálculo do percentual de pessoas com salário até R$ 350,00
    let percentual_salario_baixo = 100 * nro_salarios_baixos / contador;

    console.log(`A média dos salários é: ${media_salario}`);
    console.log(`A média do número de filhos é: ${media_filhos}`);
    console.log(`O maior salário é: ${maior_salario}`);
    console.log(`O percentual de pessoas com salário até R$ 350 é: ${percentual_salario_baixo}%`);
}