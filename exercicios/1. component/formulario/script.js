const enun = document.getElementById('enunciado').innerText = 'Crie um componente funcional chamado Formulario que inclua um campo de input para o nome e um botão. Ao clicar no botão, o componente deve exibir um alerta com a mensagem "Olá, {nome digitado}!"'



const botao = (props) => {
  alert(`Olá, ${props.nome}`)
}

const Formulario = () => {
  const click = () => {
    const nome = document.getElementById('nome').value
    botao({nome})}
  
  return (
    <div>
      <input type="text" id="nome" />
      <button onClick={click}>Enviar</button>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Formulario />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);