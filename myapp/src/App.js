import React, { Component } from "react";
import "./biscoito.css"

class App extends Component {
   constructor(props){
      super(props)
      this.state = {

      }
   }

   render() {
      return (
         <div className="container">
            <img className="image" src={require('./assets/biscoito.png')}/>
            <Botao />
            <h3 className="frase"> Frase Aleatória ... </h3>
         </div>
      );
   }
}

class Botao extends Component {
   render(){
      return(
         <div>
            <button className="botao"> Abrir biscoito </button>
         </div>
      )
   }
}

export default App;
