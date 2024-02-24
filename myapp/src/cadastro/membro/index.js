import React, { Component } from 'react'

class Membro extends Component{

    constructor(props){
        super(props)
        this.state = {
            nome: props.nome
        }

        this.entrar = this.entrar.bind(this)
    }
    
    entrar(){
        let test = prompt('Digite seu nome!')
        this.setState({ nome: test })
    }


    render(){
        return(
            <div>
                <h2> Bem vindo {this.state.nome}! </h2>
                <button onClick={this.entrar}> Entrar </button>
                <button onClick={ () => this.setState({ nome:''} ) }> Sair </button>
                {/* função anônima de uma linha para zerar o conteúdo sem precisar criar uma função separada */}
            </div>
        )
    }
}

export default Membro