function acao(){
    document.querySelector('div').innerHTML += 'Executando... </br>'
}

// Executar de tempo em tempo infinitamente
let timer = setInterval(acao, 1000);

// Executa após determinado tempo, depois para
setTimeout(acao, 3000);

// Parar intervalo  -  ( pode colocar um botão para parar de executar )
clearInterval(timer);