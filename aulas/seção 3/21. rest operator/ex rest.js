function cadastrar(usuarios, ...novosUsuarios) {
    let total = [
        ...usuarios,
        ...novosUsuarios
    ]

    return console.log(total)
}

let usuarios = ['Matheus', 'Junior']

let novosUsuarios = cadastrar(usuarios, 'Lucas', 'Pedro', 'João')