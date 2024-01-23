
const Bemvindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo! {props.nome}</h2>
      <h3>Tenho {props.anos} anos</h3>
    </div>
  )
}

function App () {
  return(
    <div>
      <h1>Olá mundo!</h1>
      <div>
        <Bemvindo nome="Matheus" anos="23"/>
        <Bemvindo nome="Junior" anos="27"/>
      </div>
    </div>
  )
}


export default App