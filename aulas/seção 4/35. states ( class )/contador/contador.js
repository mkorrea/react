/*
    Class components - states
*/


class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      contador: 0,
    }

    this.diminuir = this.diminuir.bind(this)
    this.aumentar = this.aumentar.bind(this)
    // bind() é usado para VINCULAR algo, nesse caso, está usando o "this.diminuir/aumentar para vincular ao constructor.   bind(this) = vincular(a este local)"
  }

  aumentar(){
    let state = this.state
    // criar uma variável para o estado
    state.contador += 1
    this.setState(state)
    // re-configura e atualiza o estado/valor
  }

  diminuir(){
    let state = this.state
    state.contador -= 1
    this.setState(state)
  }

  render(){
    return(
      <div>
        <h2>Contador</h2>
          <button onClick={this.diminuir}> diminuir </button>
            {this.state.contador}
          <button onClick={this.aumentar}> aumentar </button>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);