//  Componentes

//  Stateless component ( componentes funcionais )
        // Este é um componente
const Bemvindo = () => <h2>Bem-vindo!</h2>
        // criando uma propriedade ( props ), coloca-se um parâmetro na função
/*const Bemvindo =*/ (props) => {
    return (
      <div>
        {/* define o uso do parametro e cada prop */}
        <h2>Bem-vindo! {props.nome}</h2>
        <h3>Tenho {props.idade} anos</h3>
      </div>
    )
}

function App () {
  return(
    <div>
      <h1>Olá mundo!</h1>
      {/* chamar um componente */}
      <Bemvindo/>
      {/* chamar um componente com as props */}
      <Bemvindo nome="Matheus" idade="23"/>
      <Bemvindo nome="Junior" idade="27"/>         
    </div>
  )
}
