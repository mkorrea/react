import React, { Component } from "react";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         status: true,
      };
   }

   render() {
      return (
         <div>
            {this.state.status ? ( // "?" SE this.state.status for TRUE, executa isso:
               <h1> Online </h1>
            ) : (
               // ":" SE NÂO, executa isso:
               <h1> Offline </h1>
            )}
         </div>
         // <div>{this.state.status ? <h1> Online </h1> : <h1> Offline </h1>}</div> (na mesma linha)
      );
   }
}

export default App;
