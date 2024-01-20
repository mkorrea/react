// SOME
// Verifica se dentro do array, existe determina condição ( passada pela função )
// o método retorna TRUE ou FALSE ( boolean )

const numeros = [ 1, 2, 3, 4, 5 ]

// let numeroMaior = numeros.some(num => num > 3) // |  função anonima
let numeroMaior = numeros.some(function(num){
    return num > 3
})
console.log(numeroMaior)


const pessoas = ['Matheus', 'Junior', 'Pedro']

let temPessoa = pessoas.some(nome => nome == 'Junior')
console.log(temPessoa)  //  Se tiver 'Junior' no array pessoas, o método retorna "true"