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
              <h1>Hello, React!</h1>
          </div>
      );
  }
}

const App = () => {
  return (
    <div>
      <Equipe />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);