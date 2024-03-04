import React, { Component } from "react";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         nome: "",
         email: "",
         senha: "",
      };
      this.cadastro = this.cadastro.bind(this)
   }

   cadastro(event){
      const {nome, email, senha} = this.state;
      alert(`nome: ${nome} \nemail: ${email} \nsenha: ${senha}`);

      event.preventDefault();
      // previne da pagina atualizar ao clicar em cadastrar
   }

   render() {
      return (
         <div>
            <h1> Formulário </h1>

            <form onSubmit={this.cadastro}>
               Nome:
               <input
                  type="text"
                  value={this.state.nome}
                  onChange={(event) =>
                     this.setState({ nome: event.target.value })
                  }
               /><br/>
               Email: 
               <input
                  type="email"
                  value={this.state.email}
                  onChange={(event) =>
                     this.setState({ email: event.target.value })
                  }
               /><br/>
               Senha:
               <input 
                  type="password"
                  value={this.state.senha}
                  onChange={ (event) => this.setState({ senha: event.target.value})} />
               <button type="submit">Cadastrar</button>
               {/* ao tem um botão do tipo "submit", envia o form e realiza a função de onSubmit */}
            </form>
         </div>
      );
   }
}

export default App;
