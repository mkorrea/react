import React, { Component } from 'react'

class Membro extends Component{

    constructor(props){
        super(props)
        this.state = {
            nome: props.nome
        }
    }
    
    componentDidMount(){
        let test = prompt('Digite seu nome!')
        this.setState({ nome: test })
    }

    render(){
        return(
            <div>
                {this.state.nome}
            </div>
        )
    }
}

export default Membro