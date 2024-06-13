/*
41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/

let pessoa = {nome: "Thiago", idade: 29};

console.log(`A idade de Pessoa é: ${pessoa.idade}`);

pessoa.email = 'thiago@dev.com.br'

console.log(`Nova propriedade adicionada, email: ${pessoa.email}`);



