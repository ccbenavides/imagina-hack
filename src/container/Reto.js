import React from 'react';
import Animation from './reto/Animation';
import Quiz from './reto/Quiz';
import Texto from './reto/Texto';
import Star from './reto/Star';
import total from '../total.png';
import Grande from './reto/Grande';
import {
  Link
} from 'react-router-dom';

const data = [{
    nombre : "¿A los cuántos años vio el narrador una lámina donde se representaba una boa que se tragaba una fiera?",
    respuestas : [{
        name : "A los 5 años",
        respuesta: "red",
        cola: "A"
    },{
        name : "A los 6 años",
        respuesta: "green",
        cola: "B"
    },{
        name : "A los 7 años",
        respuesta: "red",
        cola: "C"
    },]
},{
 nombre : "¿Cuál fue la respuesta de los mayores al primer dibujo?",
    respuestas : [{
        name : "Un sombrero",
        respuesta: "green",
        cola: "A"
    },{
        name : "Una gorra",
        respuesta: "red",
        cola: "B"
    },{
        name : "Un caracol",
        respuesta: "red",
        cola: "C"
    },]
},{
 nombre : "¿Cuántos meses dura la digestión de la serpiente boa?",
    respuestas : [{
        name : "6 semanas",
        respuesta: "red",
        cola: "A"
    },{
        name : "6 meses",
        respuesta: "green",
        cola: "B"
    },{
        name : "5 meses",
        respuesta: "red",
        cola: "C"
    },]
},{
 nombre : "¿Por qué no se puede mover la serpiente boa?",
    respuestas : [{
        name : "Porque no tiene pies",
        respuesta: "red",
        cola: "A"
    },{
        name : "Porque tiene pereza",
        respuesta: "red",
        cola: "B"
    },{
        name : "Porque se tragó su presa entera",
        respuesta: "green",
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
        if(this.state.indice + 1 !== data.length){
            setTimeout(function(){
                ambito.setState({
                    indece : ambito.state.indice++
                });

            },500);
        }

        if(this.state.indice + 1 === data.length){
            setTimeout(function(){
                document.getElementById("puntaje").style.display = "block";
                console.log(ambito.state.score);
                  },500);
        }
    }
    render(){

        return <div className="reto">
            <div id="puntaje">
                <Grande score={this.state.score} />
                <img src={total} alt=""/>
                <div className="buttonNext">
                    <Link to="/reto/2"
                                className="button-next">NEXT</Link>
                    
                </div>
            </div>
            <Star />
            <div className="reto-flex">
            
            
                <Texto />   
                <div>
                    <Quiz data={data} onClick={this.onClick} indice={this.state.indice}/>
                    <Animation indice={this.state.indice} />
                </div>         
            </div>
        </div>;
    }
}

export default Reto;