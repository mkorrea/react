// EVERY
// Verifica em todo o array
// TODOS os elementos do array devem conter terminada função para obter o retorno "true"

let cadastro = [
    {nome: 'Carlos', idade: 34},
    {nome: 'João', idade: 27},
    {nome: 'Luiz', idade: 20}
]

console.log(cadastro.every(pessoa => pessoa.idade > 15))
// o parametro da função ( "pessoa" nesse caso ) representa cada elemento do array