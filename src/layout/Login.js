import React from 'react';
import costa from '../costa.png';
import {
  Link
} from 'react-router-dom';

class Login extends React.Component{
    render(){
        return <div className="principal">
        <div className="img_background">
                    <img src={costa} alt=""/>
                </div>
            <form action="#" className="principal-login">
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
    }
}

export default Login;