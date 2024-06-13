/* 
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

let prompt = require('prompt-sync')();
let controlador = true;
let pesoIdeal;
let sexo;

let altura = parseFloat(prompt("Digite a altura da pessoa em metros: "));

while(controlador){
    sexo = prompt("Digite o sexo da pessoa, sendo H para Homem ou M para Mulher: ");

    if(sexo === "H" || sexo === "M"){
        controlador = false;
    } else{
        console.log("Formato de dados do sexo errado. Escreva apenas 'H' ou 'M'\n");
    }
}

calculaPesoIdeal(sexo, altura);

function calculaPesoIdeal(sexo, altura){
    if(sexo === "M"){
        pesoIdeal = 62.1 * altura - 44.7;
    }

    if(sexo === "H"){
        pesoIdeal = 72.7 * altura - 58;
    }

    console.log(`O peso ideal para a pessoa é de: ${pesoIdeal}`);
}
