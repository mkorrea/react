import React, { Component } from "react";

class Feed extends Component{
    render(){
        return(
            <div key={this.props.id}>
            {/* configurando a key, o react entende e cria uma div para cada elemento do array, e cada div vai ter um id próprio */}
            <h2>{this.props.nome}</h2>


            <h3>{this.props.curtidas !== 1 ?
            <h3>{this.props.curtidas} curtidas </h3>
            :
            <h3>{this.props.curtidas} curtida </h3>

            }</h3>
         </div>
        )
    }
}

export default Feed 