/*
37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

const respostas_possiveis = ['A', 'B', 'C', 'D', 'E'];

let gabarito = gerarGabarito(respostas_possiveis);

console.log("O gabarito é: " + gabarito);

let todos_alunos = gerarAlunos(respostas_possiveis);

console.log("\nExemplo do aluno de id " + todos_alunos[0].id + " => " + todos_alunos[0].respostas);

let pontuacao_alunos = analisePontuacao(gabarito, todos_alunos);


// Função para gerar um gabarito aleatório, com as respostas de A até E
function gerarGabarito(respostas_possiveis){
    let gabarito = [];
    let controle;

    for(let i=0; i < 20; i++){
        controle = true;
        while(controle){
            let numero = Math.floor(Math.random() * 5) + 1;

            if(numero >= 0 && numero < 5){
                gabarito.push(respostas_possiveis[numero]);
                controle = false;
            }
        }
    }

    return gabarito;
}


// Função para gerar os alunos com seu conjunto de respostas gerado aleatoriamente
function gerarAlunos(respostas_possiveis){
    let alunos = [];
    let respostas = [];

    for(let i=0; i < 50; i++){
        for(let j=0; j < 20; j++){
            controle = true;
            while(controle){
                let numero = Math.floor(Math.random() * 5) + 1;
            
                if(numero >= 0 && numero < 5){
                    respostas.push(respostas_possiveis[numero]);
                    controle = false;
                }
            }
        }
        alunos[i] = {id: i, respostas: respostas};
        respostas = [];
    }

    return alunos;
}


// Função analisa a pontuação de cada aluno, comparando suas respostas com o gabarito
function analisePontuacao(gabarito, todos_alunos){
    let pontuacao = 0;
    let resultado;

    for(let i=0; i < 50; i++){
        for(let j=0; j < 20; j++){
            if(todos_alunos[i].respostas[j] == gabarito[j]){
                pontuacao++;
            }
        }
        if(pontuacao >= 12){
            resultado = "APROVADO";
        } else{
            resultado = "REPROVADO";
        }
        console.log(`O aluno de id ${todos_alunos[i].id} teve pontuação de ${pontuacao}, estando ${resultado}`);
        pontuacao = 0;
    }
}
