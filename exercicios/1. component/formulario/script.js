const enun = document.getElementById('enunciado').innerText = 'Crie um componente funcional chamado Formulario que inclua um campo de input para o nome e um botão. Ao clicar no botão, o componente deve exibir um alerta com a mensagem "Olá, {nome digitado}!"'


let nome = document.getElementById('nome')
// function clicou(prop) {
//   alert(`Olá, ${prop.nome}`)
// }

const Formulario = (prop) => {
  return (
    <div>
      <input type="text" id="nome"></input>
      <button onclick="clicou()">Enviar</button>
      {function clicou(prop) {
  alert(`Olá, ${prop.nome}`)
}}
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Formulario nome={nome}/>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);