/*
  Biscoito da sorte
*/

import React, { Component } from "react";
import "./biscoito.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = { textoFrase: '' };

      this.frases = [
         "Siga os bons e aprenda com eles.",
         "O bom-senso vale mais do que muito conhecimento.",
         "O riso é a menor distância entre duas pessoas.",
         "Deixe de lado as preocupações e seja feliz.",
         "Realize o óbvio, pense no improvável e conquiste o impossível.",
         "Acredite em milagres, mas não dependa deles.",
         "A maior barreira para o sucesso é o medo do fracasso."
      ];
      this.quebraBiscoito = this.quebraBiscoito.bind(this)
   }

   quebraBiscoito(){
      let state = this.state
      let numAleatorio = Math.floor(Math.random() * this.frases.length)
      this.setState({textoFrase: '" ' + this.frases[numAleatorio] + ' "'})
   }

   render() {
      return (
         <div className="container">
            <img className="image" src={require("./assets/biscoito.png")} />
            <Botao nome=" Abrir biscoito " acaoBTN={this.quebraBiscoito} />
            <h3 className="frase"> {this.state.textoFrase} </h3>
         </div>
      );
   }
}

class Botao extends Component {
   render() {
      return (
         <div>
            <button onClick={this.props.acaoBTN} className="botao"> {this.props.nome} </button>
         </div>
      );
   }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);