// criação de um objeto
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Correa',
    idade: 23,
    prof: 'dev'
}
console.log(pessoa)

// Desconstruir um objeto, transformar um identificador e valor em uma variável própria
let {nome} = pessoa
console.log(nome) // Matheus

// Possível fazer com mais um por vez:
let {idade, prof} = pessoa
console.log(idade) // 23
console.log(prof) // dev

// Mudar o nome da variável que é criada ( de 'prof' para 'cargo' )
let {prof: cargo} = pessoa
console.log(cargo)