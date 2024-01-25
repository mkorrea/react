const enun = document.getElementById('enunciado').innerText = 'Crie um componente funcional chamado Saudacao que recebe um prop nome e exibe uma saudação personalizada. Utilize-o no componente App passando diferentes nomes.'


let nome = prompt('Qual o seu nome?')

const Saudacao = (prop) => {
  return (
    <div>
      Olá {prop.nome}, seja bem-vindo!
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Saudacao nome={nome}/>
    </div>
  );
};



ReactDOM.render(
  <App />,
  document.getElementById('root')
);