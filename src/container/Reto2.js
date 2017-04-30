import React from 'react';
import Animation from './reto/Animation';
import Quiz from './reto/Quiz';
import Texto2 from './reto/Texto2';
import Star from './reto/Star';
import total from '../total.png';
import Grande from './reto/Grande';
import {
  Link
} from 'react-router-dom';

const data = [{
    nombre : "¿De qué tamaño era el planeta del principito?",
    respuestas : [{
        name : "Pequeño como una casa",
        respuesta: "red",
        cola: "A"
    },{
        name : "Apenas más grande que una casa",
        respuesta: "green",
        cola: "B"
    },{
        name : "Más grande que la tierra",
        respuesta: "red",
        cola: "C"
    },]
},{
 nombre : "¿Cuál era el nombre del planeta del Principito?",
    respuestas : [{
        name : "A261",
        respuesta: "red",
        cola: "A"
    },{
        name : "Z612",
        respuesta: "red",
        cola: "B"
    },{
        name : "B612",
        respuesta: "green",
        cola: "C"
    },]
},{
 nombre : "¿Cómo crees o infieres que son los habitantes del planeta del principito?",
    respuestas : [{
        name : "Como los monos",
        respuesta: "red",
        cola: "A"
    },{
        name : "Como los humanos",
        respuesta: "green",
        cola: "B"
    },{
        name : "Como los robots",
        respuesta: "red",
        cola: "C"
    },]
},{
 nombre : "El nombre de tu planeta es:",
    respuestas : [{
        name : "Tierra",
        respuesta: "green",
        cola: "A"
    },{
        name : "Marte",
        respuesta: "red",
        cola: "B"
    },{
        name : "Venus",
        respuesta: "red",
        cola: "C"
    },]
}];


class Reto extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            indice : 0,
            score : 0
        }
    }


     onClick = e => {
        let principito = document.getElementById("principito");
        // principito.style.right
        if(e.target.id === "green"){
           e.target.style.background = "#39A00A"; 
           e.target.style.color = "#fff"; 
           principito.style.right =  (parseInt(principito.style.right, 10) + 40) + "px";
           this.setState({
               score : this.state.score + 1
           })
        }
        if(e.target.id === "red"){
           e.target.style.background = "#e91e48"; 
           e.target.style.color = "#fff"; 
        }
        let ambito = this;
        console.log(this.state.indice);
        if(this.state.indice + 1 !== data.length){
            setTimeout(function(){
                ambito.setState({
                    indece : ambito.state.indice++
                });

            },500);
        }

        if(this.state.indice + 1 === data.length){
            setTimeout(function(){
                document.getElementById("puntaje").style.display = "block"
                  },500);
        }
    }
    render(){

        return <div className="reto">
            <div id="puntaje">
                <Grande score={this.state.score} />
                <img src={total} alt=""/>
                <div className="buttonNext">
                    <Link to="/principal"
                                className="button-next">VOLVER</Link>
                </div>
            </div>
            <Star />
            <div className="reto-flex">
            
            
                <Texto2 />   
                <div>
                    <Quiz data={data} onClick={this.onClick} indice={this.state.indice}/>
                    <Animation indice={this.state.indice} />
                </div>         
            </div>
        </div>;
    }
}

export default Reto;