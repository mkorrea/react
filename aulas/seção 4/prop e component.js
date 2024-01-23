//  Componentes

//  Stateless component ( componentes funcionais )
        // Este é um componente
const Bemvindo = () => <h2>Bem-vindo!</h2>
function App () {
  return(
    <div>
      <h1>Olá mundo!</h1>
      {/* chamar um componente */}
      <Bemvindo/>
    </div>
  )
}
const meuElemento = <div>Olá, JSX!</div>;