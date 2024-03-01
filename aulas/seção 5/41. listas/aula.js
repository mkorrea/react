import React, { Component } from "react";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         feed: [
            {id: 1, nome: 'korrea', curtidas: 54},
            {id: 2, nome: 'lzjunior', curtidas: 36}
         ]
      };
   }

   render() {
      return (
         <div>
            {this.state.feed.map( (item) => {
               // map() vai vasculhar por cada elemento do array
               return(
                  <div key={item.id}>
                     {/* configurando a key, o react entende e cria uma div para cada elemento do array, e cada div vai ter um id próprio */}
                     <h2>{item.nome}</h2>
                     <h3>{item.curtidas} curtidas </h3>
                  </div>
               )
            } )}
         </div>
      );
   }
}


export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);