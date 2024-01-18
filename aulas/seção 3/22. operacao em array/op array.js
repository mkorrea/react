// Operação em arrays

/*     ESTRUTURA
    const array = [ 1, 2, 3, 4 ]

    const novoArray = array.map( function(valor){
        return valor * 2
    })
*/

const numeros = [ 1, 2, 3, 4, 5, 6 ]

// exemplo map
const tabuada5 = numeros.map(function(item){
    return item * 5
})
console.log(tabuada5)   //  resultado =  [ 5, 10, 15, 20, 25, 30 ]


// .map index
const posicao = numeros.map(function(elemento, index) {
    // index se refere a posição de cada array  ( 0, 1, 2, 3 ...)
    return elemento + index 
})
console.log(posicao)


// .reduce
const soma = numeros.reduce(function(acumulador, valorAtual) {
    // valorAtual = cada elemento do array original
    // acumulador = soma do 'valorAtual' anterior  com o valor acumulado até então
    console.log(`Valor Atual: ${valorAtual}, Acumulador: ${acumulador}`);
    return acumulador + valorAtual
},0)  // o número após o fechamento da função, indica o ponto de partida 
console.log(soma)

