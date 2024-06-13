/*
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

let prompt = require('prompt-sync')();
let nome = prompt("Digite seu nome: ");
let cargo = prompt("Digite seu cargo: ");
let salario = prompt("Digite seu salario: ");

let register = {name: nome, role: cargo, salary: salario};

console.log(register);