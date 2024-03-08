/*

*/

import React, { Component } from "react";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         form: {
            email: "",
            senha: "",
            sexo: "masculino",
         }
      };

      this.trocaDados = this.trocaDados.bind(this);
   }

   trocaDados(e){
      let form = this.state.form
      form[e.target.name] = e.target.value
      this.setState({form: form})
   }
   // reduzir funções de trocar conteudo do furmulario em uma unica função
   
   render() {
      return (
         <div>
            <label name="email">email: </label>
            <input
               type="email"
               name="email"
               value={this.state.form.email}
               onChange={this.trocaDados}
               // onChange configura que a cada mudança no campo, vai acontecer determinada coisa, neste caso, atualizando o campo de email
            ></input>
            <br />

            <label name="senha">senha: </label>
            <input
               type="password"
               name="senha"
               value={this.state.form.senha}
               onChange={this.trocaDados}
            ></input>
            <br />
            <label name="sexo">Sexo: </label>
            <select
               name="sexo"
               value={this.state.form.sexo}
               onChange={this.trocaDados}>
               <option value="masculino"> Masc </option>
               <option value="feminino"> Fem </option>
            </select>

            <br />
            <br />
            <br />
            <h2>email: {this.state.form.email} </h2>
            {this.state.form.senha.length === 0 ? (
               <h2>senha: 🫣 </h2>
            ) : (
               <h2>senha: {this.state.form.senha} 👀</h2>
            )}
            <h2>sexo: {this.state.form.sexo} </h2>
         </div>
      );
   }
}

export default App;



ReactDOM.render(
  <App />,
  document.getElementById('root')
);