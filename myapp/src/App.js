import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        status: true
    }
  }

  render(){
    return(
      <div>
      {this.state.status ?
        <h1> Online </h1>
        :
        <h1> Offline </h1>
      }
      </div>
      // (na mesma linha)  <div>{this.state.status ? <h1> Online </h1> : <h1> Offline </h1>}</div>
    )
  }
}

export default App