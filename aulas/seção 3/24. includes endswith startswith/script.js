/*
includes
endsWith
startsWith
*/

// includes
let nomes = ['Matheus', 'Lucas', 'Junior']
// .includes é um método para verificar se existe determinada string dentro de um array
console.log(nomes.includes('Lucas'))  // true
// se for encontrado, ele retorna "true" se não, "false"


// endsWith
let pessoa = 'Pedro'
// .endsWith identifica se a string termina com determinada letra ou frase
console.log(pessoa.endsWith('edro'))  // true
console.log(pessoa.endsWith('x'))  // false
// se for encontrado, ele retorna "true" se não, "false"


// startsWith
let outraPessoa = 'Carlos'
// .startsWith identifica se a string começa com determinada letra ou frase
console.log(outraPessoa.startsWith('M'))  // false
// se for encontrado, ele retorna "true" se não, "false"


// Ps.  As strings são case sensitive, então faz diferença se a palavra está em letra maiúscula