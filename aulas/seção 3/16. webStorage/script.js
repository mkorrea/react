/*
let luke = "Lucas Ferreira"

localStorage.setItem("nome", luke);
localStorage.idade = 23
*/
let nome = '';
if ( typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome:");
}

nome = localStorage.nome;
document.querySelector('div').innerHTML = nome

