/*
42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

let dados = {
    nome: "Thiago",
    idade: 29,
    enderecos: ["Rua dev - 3860", "Rua JS - 2000"],
    linguagem_fav: "Java",
    linguagens_domina: ["Java", "JS", "PHP"]
};

console.log("Objeto antes da função de remoção de propriedades que não são arrays: ");
console.log(dados);
console.log("Objeto que a função de remoção de propriedades retorna: ");
console.log(tratamentoDados(dados));


function tratamentoDados(dados){
    let novo_dados = dados;

    for(dado in novo_dados){
        if (typeof novo_dados[dado] !== "object"){
            delete novo_dados[dado];
        }
    }

    return novo_dados;
}