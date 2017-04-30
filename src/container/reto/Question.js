import React from 'react';
import Row from './Row';

class Question extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            respuesta : ""
        }
    }
   
    render(){
        return <div className="bloque-quest">
            <h2 className="desafiate"> <span>Desafíate</span></h2>
            <h4 className="question">{this.props.data.nombre}</h4>
            <ul className="answers">
                {this.props.data.respuestas.map( (e,i) => <Row  data={e}
                                                            respuesta={this.state.respuesta}
                                                            key={i + e.name} 
                                                            onClick={this.props.onClick} />)}
            </ul></div>
    }
}

export default Question;