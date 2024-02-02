
// Criar um componente dentro de outro para separar, por exemplo, um componente só com os dados de uma pessoa e outro com os dados de trabalho

const Equipe = (props) => {
  return (
    <div> 
      <Dados user={props.nome} anos={props.idade} />
      <Social instagram={props.insta} />
    </div>
  )
}

const Dados = (props) => {
  return (
    <div>
      Olá, sou o {props.user} e tenho {props.anos} anos!
    </div>
  )
} 

const Social = (props) => {
  return <p>Meu instagram é: <a href={props.instagram}>mttcorrea</a></p>
}


const App = () => {
  return (
    <div>
      <Equipe nome="Matheus" idade="23" insta="https://instagram.com/mttcorrea" />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);