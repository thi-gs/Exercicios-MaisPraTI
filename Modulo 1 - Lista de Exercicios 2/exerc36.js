/*
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
*/

// Para simular o gabarito, criei o vetor contendo valores de 1 a 4
let gabarito = criarVetor();
console.log("Gabarito: " + gabarito);

let apostadores = criarApostadores();

// Vou mostrar as marcações dos dois primeiros apostadores para validação dos resultados
for(let i=0; i < 2; i++){
    console.log(apostadores[i]);
}

let resultado = analiseResultado(gabarito, apostadores);



// Função cria um vetor com 13 posições, preenchendo-o com valores aleatórios entre 1 e 4
function criarVetor(){
    let valores = [];
    for(let i=1; i <= 13; i++){
        valores.push(Math.floor(Math.random() * 4) + 1);
    }
    return valores;
}

function criarApostadores(){
    let apostadores = [];

    for(let j=0; j < 100; j++){
        let objeto = {numero: j+1, respostas: []}
        for(let k=0; k < 13; k++){
            objeto.respostas.push(Math.floor(Math.random() * 4) + 1);
        }
        apostadores.push(objeto);
    }
    
    return apostadores;
}

function analiseResultado(gabarito, apostadores){
    for(let i=0; i < 100; i++){
        let pontuacao = 0;
        for(let j=0; j < 13; j++){
            if(gabarito[j] === apostadores[i].respostas[j]){
                pontuacao++;
            }
        }
        console.log(`\nA pontuação do apostador ${i+1} foi de ${pontuacao}`);
        if(pontuacao == 13){
            console.log(`\n-----------Parabéns apostador ${i+1} tu foi o ganhador-----------`);
        }
    }
}
