// Spread Operator

    // array
        let primeiros = [ 1, 2, 3 ]
        console.log(primeiros)

        let numeros = [ ...primeiros, 4, 5, 6 ]
        // reticência + nome de outro array para "juntar" com outro
        console.log(numeros)

    // objeto
        let pessoa = {
            nome: "Matheus",
            idade: 23,
        }

        let informacoes = {
            ...pessoa,
            nascimento: 2000,
            time: "Flamengo",
        }
        console.log(pessoa)
        console.log(informacoes) 