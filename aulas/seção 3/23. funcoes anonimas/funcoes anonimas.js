// Funções anônimas 

// Estão presentes em lugares que existem uma função, mas ela está escondida:

function adicionar (...numeros) {
// dentro do método reduce, existe uma função para que ele funcione adequadamente, ele poderia ser escrito assim:  "  let total = numeros.reduce(function(total, proximo) {  "
    let total = numeros.reduce((total, proximo) => {
        // A função anônima está presente aqui, não se escreve a palavra function, e no  lugar, coloca uma seta => APÓS os parâmetros
        //   function( ){ }    |    ( )=>{ }
        return total + proximo
    })
    console.log(total)
}
adicionar (1,2,3,4,5,6)


// Caso o bloco da função seja simples e de uma só linha, é possível simplificar ainda mais:
function adicionar (...numeros) {
    let total = numeros.reduce((total, proximo) => total + proximo)
    // não foi necessário colocar as chaves {}, nem o return
    console.log(total)
}
adicionar (1,2,3,4,5,6)