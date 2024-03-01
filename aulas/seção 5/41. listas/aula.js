import React, { Component } from "react";
import Feed from "./components/feed";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         feed: [
            { id: 1, nome: "korrea", curtidas: 54 },
            { id: 2, nome: "lzjunior", curtidas: 36 },
            { id: 2, nome: "matheus", curtidas: 1 },
         ],
      };
   }

   render() {
      return (
         <div>
            {this.state.feed.map((item) => {
               // map() vai vasculhar por cada elemento do array
               return (
                  <Feed
                     key={item.id}
                     nome={item.nome}
                     curtidas={item.curtidas}
                  />
               );
            })}
         </div>
      );
   }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
