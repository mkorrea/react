/*
    CICLO DE VIDA DOS COMPONENTES
*/


class App extends React.Component {

// MONTAGEM
  constructor(props){
    super(props)
    this.state = {
      hora: "00:00:00"
    }
  }
  // constructor aqui é o primeiro a ser executado, então ele está no ciclo de vida do componente

  componentDidMount(){
    setInterval( ()=>{
      this.setState({ hora: new Date().toLocaleTimeString() })
    }, 1000 )
  } 
  // depois que o componente é montado, ele pode rodar o que tem nessa função a cima
  // só rodado uma ÚNICA vez

// ATUALIZAÇÃO
  componentDidUpdate(){
    console.log('Atualizou!')
  }
  // Toda vez que o componente ou o state sofrer alguma alteração, o componentDidUpdate vai ser executado




  render(){
    return(
      <div>
        <h2> O horário atual é: {this.state.hora} </h2>
      </div>
    )
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);