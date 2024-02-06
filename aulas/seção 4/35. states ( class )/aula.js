/*
    Class components - states
*/


class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      nome: 'Carlos'
    }
  }

  render(){
    return(
      <div>
        {this.state.nome}
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);