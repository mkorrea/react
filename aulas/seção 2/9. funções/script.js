function entrar() {
    let area = document.getElementById('area')
    let name = prompt('Digite seu nome:')

    if(name == '' || name == null) {
        alert('Digite seu nome novamente.')
    } else {
        sobrenome(name)
        idade()
    }
}
function sobrenome(name) {
    let nick = prompt('Digite seu sobrenome:')
    area.innerHTML = `Olá, Seja Bem vindo ${name} ${nick}`
}
function idade() {
    let idade = document.getElementById('idade')
    let anos = prompt('Quantos anos você tem ?')
    idade.innerHTML = `Você tem ${anos} anos`
}