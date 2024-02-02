/*
  Class component
*/
/*
import React, { Component } from 'react';
  // para importar os componentes de classe do react

class Equipe extends Component{
  // para criar o componente
*/

class Equipe extends React.Component {
  render() {
      return (
          <div>
              <h1>Hello, {this.props.nome} </h1>
              {/* 
                  Utilizar uma prop
                "this" porque está fazendo referência ao próprio componente "Equipe"
              */}
          </div>
      );
  }
}

const App = () => {
  return (
    <div>
      <Equipe nome="Matheus" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);