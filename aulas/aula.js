/*

*/

import React, { Component } from "react";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: "",
         senha: "",
         sexo: "masculino",
      };

      this.trocouSenha = this.trocouSenha.bind(this);
   }
   trocouSenha(e) {
      this.setState({ senha: e.target.value });
   }

   render() {
      return (
         <div>
            <label name="email">email: </label>
            <input
               type="email"
               name="email"
               value={this.state.email}
               onChange={(e) => this.setState({ email: e.target.value })}
               // onChange configura que a cada mudança no campo, vai acontecer determinada coisa, neste caso, atualizando o campo de email
            ></input>
            <br />

            <label name="senha">senha: </label>
            <input
               type="password"
               name="senha"
               value={this.state.senha}
               onChange={this.trocouSenha}
            ></input>
            <br />
            <label name="sexo">Sexo: </label>
            <select
               name="sexo"
               value={this.state.sexo}
               onChange={(e) => this.setState({ sexo: e.target.value })}
            >
               <option value="masculino"> Masc </option>
               <option value="feminino"> Fem </option>
            </select>

            <br />
            <br />
            <br />
            <h2>email: {this.state.email} </h2>
            {this.state.senha.length === 0 ? (
               <h2>senha: 🫣 </h2>
            ) : (
               <h2>senha: {this.state.senha} 👀</h2>
            )}
            <h2>sexo: {this.state.sexo} </h2>
         </div>
      );
   }
}

export default App;


ReactDOM.render(
  <App />,
  document.getElementById('root')
);