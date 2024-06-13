/*
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

// Lista de funcionários de teste
const funcionarios = [
    { matricula: 101, nome: "Ana Silva", salarioBruto: 3500.00 },
    { matricula: 102, nome: "Bruno Souza", salarioBruto: 4200.50 },
    { matricula: 103, nome: "Carlos Oliveira", salarioBruto: 3100.75 },
    { matricula: 104, nome: "Daniela Costa", salarioBruto: 4700.00 },
    { matricula: 105, nome: "Eduardo Lima", salarioBruto: 3900.25 }
];

for(indice in funcionarios){
    console.log(`Matrícula: ${funcionarios[indice].matricula}`);
    console.log(`Nome: ${funcionarios[indice].nome}`);
    console.log(`Salário bruto: ${funcionarios[indice].salarioBruto}`);
    console.log(`Dedução INSS: ${funcionarios[indice].salarioBruto * 0.12}`);
    console.log(`Salário líquido: ${funcionarios[indice].salarioBruto * 0.88}`);
    console.log();
}