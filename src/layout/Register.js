import React from 'react';
import costa from '../costa.png';
import flecha from '../flecha.png';
import pedro from '../pedro.png';
import pedro_b from '../pedro_b.png';
import rosita from '../rosita.png';

import {
  Link
} from 'react-router-dom';


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectImgOne : false,
            selectImgTwo : false,
            valueDni : "DNI",
            valueNic : "NIC"
         }
    }
    handleClickOne = (e) => {
        
            this.setState({
                selectImgOne : e.target.id === "on_pedro" ? false :true ,
                selectImgTwo : false 
            });

        
    }
    handleClickTwo = (e) => {
        console.log("casasxx1");
       this.setState({
            selectImgOne : false,
            selectImgTwo : true 
        });
    }
    handleInputDni = (e) => {
        if(e.target.value === "DNI")
            e.target.value = "";
    }
    handleInputNic = (e) => {
        if(e.target.value === "NIC")
            e.target.value = "";
    }
    handleChangeDni = (e) => {
        this.setState({
            valueDni : e.target.value
        })
    }
    handleChangeNic = (e) => {
        this.setState({
            valueNic : e.target.value
        })
    }
    render(){
        return <div className="principal-form">
                <div className="fondo_morado"></div>
                <div className="img_background">
                    <img src={costa} alt=""/>
                </div>
                <div className="block-register">
                    
                    <div className="principal-select">
                        <h3 className="title-select">Costa</h3>
                        <img className="arrow-select" src={flecha} alt=""/>
                    </div> 
                    <div className="register-img">
                       
                        {
                            this.state.selectImgOne ?
                            <img src={pedro_b} onClick={this.handleClickOne}  
                                    id="on_pedro" alt="" />:
                            <img onClick={this.handleClickOne}
                                    id="off_pedro"                           
                             src={pedro} alt=""/>
                        }
                        <img onClick={this.handleClickTwo} 
                             style={{ border: this.state.selectImgTwo && "3px solid #fff" }}
                             src={rosita} alt=""/>
                    </div>
                    <div className="principal-down">
                        <input type="text"
                                onClick={this.handleInputDni}
                                onChange={this.handleChangeDni}
                                className="principal-input" 
                                value={this.state.valueDni} />
                        <input type="text"
                                onClick={this.handleInputNic}
                                onChange={this.handleChangeNic}
                                className="principal-input" 
                                value={this.state.valueNic} />
                        <Link to="/principal"
                                className="principal-submit">confirmar</Link>
                    </div>
                </div>
             </div>;
    }
}

export default Register;


/*
<div className="principal">
            <form action="#" className="principal-form">
                <h2 className="principal-h2">Bienvenido</h2>
                <div className="principal-body">
                    <input type="text"
                            className="principal-input" 
                            placeholder="DNI" />
                    
                    <Link to="/principal"
                        className="principal-submit">Ingresar</Link>
                </div>
                <Link to="/register"
                        className="principal-link">Registrarse</Link>
            </form>
        </div>;

<select name="" 
                            id=""
                            className="principal-select">
                        <option value="#">costa</option>
                        <option value="#">sierra</option>
                        <option value="#">selva</option>
                    </select>

        */