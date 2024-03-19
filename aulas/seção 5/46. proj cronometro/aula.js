import React, { Component } from "react";
import './assets/cronometro.css'

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         timer: 0,
         botao: 'Iniciar'
      };
      this.crono = null
      this.iniciar = this.iniciar.bind(this)
      this.zerar = this.zerar.bind(this)
   }
   
   iniciar(){
      let state = this.state
      if(this.state.timer == 0 || this.crono == null){
         this.crono = setInterval( () => {
            state.timer += 0.01
            this.setState(state)
         }, 10)
         state.botao = 'Pausar'
      } else {
         clearInterval(this.crono)
         this.crono = null
         state.botao = 'Iniciar'
      }
      this.setState(state)
   }

   zerar(){
      clearInterval(this.crono)
      let state = this.state
      state.timer = 0
      this.setState(state)
      state.botao = 'Iniciar'
      this.setState(state)
   }

   render() {
      return (
         <div className="container">
            <h1> Cronômetro</h1>
            <img className="img" src={require("./assets/cronometro.png")} />
            <div className="timer" > {this.state.timer.toFixed(2)} </div>
            {/* ".toFixed() define a quantidade de casas decimais depois da vírgula" */}
            <div className="areaButtons">
               <p className="button" onClick={this.iniciar}> {this.state.botao} </p>
               <p className="button" onClick={this.zerar}> Zerar </p>
            </div>
         </div>
      );
   }
}


export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);