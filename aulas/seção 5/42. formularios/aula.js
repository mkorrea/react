/*

*/

import React, { Component } from "react";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: "",
         senha: "",
      };

      this.trocouSenha = this.trocouSenha.bind(this);
   }

   trocouSenha(e) {
      this.setState({ senha: e.target.value });
   }

   render() {
      return (
         <div>
            <input
               type="email"
               name="email"
               value={this.state.email}
               onChange={(e) => this.setState({ email: e.target.value })}
            ></input>

            <input
               type="password"
               name="senha"
               value={this.state.senha}
               onChange={this.trocouSenha}
            ></input>
            <h2>email: {this.state.email} </h2>
            {this.state.senha.length === 0 ?
            <h2>senha: 🫣 </h2>  
            :
            <h2>senha: 👀 {this.state.senha} </h2>  

         }
         </div>
      );
   }
}

export default App;


ReactDOM.render(
  <App />,
  document.getElementById('root')
);